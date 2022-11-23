import { Schema, model, Model } from "mongoose"
import { IDev } from "../interfaces/IDev"
import MongoModel from "./MongoModel"

const DevSchema =  new Schema<IDev>({
  name: String,
  user: String,
  bio: String,
  avatar: String,
}, {
  versionKey: false,
})

export default class Dev extends MongoModel<IDev> {
  constructor(superModel = model('Dev', DevSchema)) {
    super(superModel)
  }
}