import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello ${name}.` });
});

app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`);
});
