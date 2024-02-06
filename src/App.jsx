import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import ReactGA from 'react-ga';
import
{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App()
{
  const [count, setCount] = useState(0)
  ReactGA.initialize('G-EVDP6RWK28');
  useEffect(() =>
  {
    ReactGA.initialize('G-EVDP6RWK28');

  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
