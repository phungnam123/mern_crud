import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let result = await axios.get('http://localhost:8080/api/v1/users')
        setUsers(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser()
  }, [])

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:8080/api/v1/users/${id}`
      )
      window.location.reload()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-secondary">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success mb-4">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th className="p-3 fw-bold">Name</th>
              <th className="p-3 fw-bold">Email</th>
              <th className="p-3 fw-bold">Age</th>
              <th className="p-3 fw-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.age}</td>
                  <td className="p-3">
                    <Link
                      to={`/update/${item._id}`}
                      className="d-inline-block text-decoration-none me-3 text-primary border p-2"
                    >
                      Update
                    </Link>
                    <button
                      className="d-inline-block delete text-danger border p-2"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
