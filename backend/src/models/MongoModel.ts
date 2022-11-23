import { Model, UpdateQuery } from "mongoose";
import { IModel } from "../interfaces/IModel";

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(
    protected _model: Model<T>
  ) {}

  public async create(obj: T): Promise<T> {
    return this._model.create(obj)
  }

  public async read(): Promise<T[]> {
    return this._model.find()
  }

  public async readOneByUser(user: string): Promise<T | null> {
    return this._model.findOne({ user })
  }

  public async update(_id: string, obj: T): Promise<T | null> {
    return this._model.findByIdAndUpdate({ _id }, obj as UpdateQuery<T>)
  }

  public async delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndDelete({ _id })
  }
}