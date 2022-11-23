import { Router, Request, Response } from 'express'
import DevController from '../controller/dev.controller'
import Dev from '../models/Dev'

const routes = Router()
const controller = new DevController(new Dev())

routes.get('/', (_req: Request, res: Response): Response => {
  return res.json({
    message: 'Iniciando Back-End do Projeto'
  })
})

routes.post('/login', (req, res) => controller.login(req, res))

export default routes