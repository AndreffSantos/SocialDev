import axios from 'axios'
import { Request, Response } from 'express'
import { IDev } from '../interfaces/IDev'
import { IModel } from '../interfaces/IModel'

export default class DevController {
  constructor (
    private _model: IModel<IDev>
  ) {}

  public async login(req: Request, res: Response): Promise<Response> {
    const { username } = req.body
    
    const existUser = await this._model.readOneByUser(username)
    if (existUser) return res.json(existUser)
    
    const response = await axios.get(`https://api.github.com/users/${username}`)

    const { name, login, bio, avatar_url } = response.data

    const newDev = await this._model.create({
      name: name,
      user: login,
      bio: bio,
      avatar: avatar_url,
    })

    return res.json(newDev)
  }
}