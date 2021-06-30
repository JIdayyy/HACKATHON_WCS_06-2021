import axios from 'axios';
export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    const data = await axios({
      methog: 'GET',
      url: `${process.env.REST_URL}/login`,
      headers: {
        'x-hasura-admin-secret': process.env.KEY,
      },
      data: { email: email },
    });
    console.log(data.data.User[0]);
    if (data.data.User[0].password === password) {
      return res.status(200).send(data.data.User);
    } else {
      res.status(404).send({ message: 'user not found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error' });
  }
}
