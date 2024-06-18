import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './components/Users'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
  },
  {
    path: '/create',
    element: <AddUser />,
  },
  {
    path: '/update/:id',
    element: <UpdateUser />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
