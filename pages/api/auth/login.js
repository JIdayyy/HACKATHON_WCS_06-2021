// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { login } from "../../apollo/userQueries"

export default function authAPI(req, res) {

    res.status(200).json({ name: 'John Doe' })



  }
  