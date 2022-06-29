import { NextApiRequest, NextApiResponse } from 'next';

export default function hello(_: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({ text: 'Hello' });
}
