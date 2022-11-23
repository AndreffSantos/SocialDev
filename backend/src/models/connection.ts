import { connect } from "mongoose";

const MONGO_DB_URL = 'mongodb://localhost:27017/SocialDev'

const connectToDatabase = (
  mongoUrl = process.env.MONGO_URL || MONGO_DB_URL
) => connect(mongoUrl)

export default connectToDatabase