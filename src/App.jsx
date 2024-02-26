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
import TermsConditions from './pages/Terms&Conditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { Navbar } from 'react-bootstrap'
import NavBar from './pages/components/Navbar'
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
    },{
      path: "/terms_conditions",
      element: <TermsConditions />,
    },{
      path: "/privacy_policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return (
    <>
    <NavBar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App
