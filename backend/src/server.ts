import express from 'express'
import connectToDatabase from './models/connection'
import { devRoute } from './routes'

const app = express()

app.use(express.json())
app.use(devRoute)

connectToDatabase().then(() => {
  app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001.')
  })
})
.catch((error) => {
  console.error(error)
})