import { Schema, model } from 'mongoose' // Erase if already required

// Declare the Schema of the Mongo model
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
})

const UserModel = model('User', userSchema)

//Export the model
export default UserModel
