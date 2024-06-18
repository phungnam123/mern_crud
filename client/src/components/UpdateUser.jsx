import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
  const { id } = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/api/v1/users/${id}`
        )
        setName(result.data.data.name)
        setEmail(result.data.data.email)
        setAge(result.data.data.age)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [id])

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.patch(
        `http://localhost:8080/api/v1/users/${id}`,
        { name, email, age }
      )
      console.log(result)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-secondary">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdateUser}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age || ''}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
