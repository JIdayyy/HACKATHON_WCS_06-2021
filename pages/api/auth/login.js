import axios from "axios";
import Cors from "cors";
const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  const { email, password } = req.body;

  await runMiddleware(req, res, cors);

  try {
    const data = await axios({
      methog: "GET",
      url: `${process.env.REST_URL}/login`,
      headers: {
        "x-hasura-admin-secret": process.env.KEY,
      },
      data: { email: email },
    });
    console.log(data.data.User[0]);
    if (data.data.User[0].password === password) {
      return res.status(200).send(data.data.User);
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error" });
  }
}
