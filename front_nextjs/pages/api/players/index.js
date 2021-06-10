import { players } from '../../../data/taverne'

export default function handler(req, res) {
  res.status(200).json(players)
}
