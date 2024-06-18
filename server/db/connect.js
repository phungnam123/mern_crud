// -M48feJS46d7*2m
//mern-crud
import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected mongodb successful')
  } catch (error) {
    console.log(error)
  }
}

export default connect
