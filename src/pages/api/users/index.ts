import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await addUser(req, res);
  }; 
};

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results = await connection.query("SELECT * FROM users");

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  };
};

const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, age, email, password } = req.body;

    const result: any = await connection.query("INSERT INTO users SET ?", {
      name,
      age,
      email,
      password,
    });

    return res.status(200).json({ ...req.body, id: result.insertId })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export default handler;
