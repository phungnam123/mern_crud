import UserModel from '../models/Users.js'
const usersController = {
  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body
      const user = await UserModel.create({ name, email, age })
      const data = await user.save()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  getAllUser: async (req, res) => {
    try {
      const data = await UserModel.find()
      return res.status(200).json({
        msg: 'Ok',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { id } = req.params
      if (!id) return res.status(404).json({ msg: 'Not Found' })
      const data = await UserModel.findById(id)
      res.status(200).json({
        msg: 'Ok',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params
      const { name, email, age } = req.body
      if (!name || !email || !age) {
        return res.status(200).json({ msg: 'Missing required params' })
      }

      const data = await UserModel.findByIdAndUpdate(id, { name, email, age })
      return res.status(200).json({
        msg: 'Ok',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params
      if (!id) return res.status(404).json({ msg: `Not found with ${id}` })
      const data = await UserModel.findByIdAndDelete(id)
      return res.status(200).json({
        msg: 'OK',
        data,
      })
    } catch (error) {
      res.status(500).json({
        msg: error,
      })
    }
  },
}

export default usersController
