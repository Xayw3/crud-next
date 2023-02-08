import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../../database/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      return await deleteUser(req, res);
    case "PUT":
      return await editUser(req, res);
  }
};

const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connection.query("DELETE FROM users WHERE id = ?", [req.query.id]);

    return res.status(204).json('');
  } catch (error) {
    return res.status(500).json(error)
  };
};

const editUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connection.query("UPDATE users SET ? WHERE id = ?", [
      req.body,
      req.query.id
    ]);

    return res.status(204).json("");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default handler;