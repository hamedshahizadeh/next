import connectDB from "../../../utils/connectDB";
import User from "../../../models/User";
export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const name = req.body.name;
    if (!name || name.length < 3) {
      res.status(422).json({ status: "failed ", message: "Invalid Data" });
      return;
    }

    const user = await User.create({ name });
    res.status(201).json({
      status: "succsess",
      message: "Data Created",
      data: { name: name },
    });
  }
}
