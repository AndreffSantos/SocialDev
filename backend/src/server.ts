import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response): Response => {
  return res.json({
    message: 'Iniciando Back-End do Projeto'
  })
})

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001.')
})