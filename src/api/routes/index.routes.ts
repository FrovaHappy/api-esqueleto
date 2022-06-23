import { Router } from 'express'

const router = Router()
router.get('/', (req, res) => {
  res.json({ data: 'hola' })
})

export default router
