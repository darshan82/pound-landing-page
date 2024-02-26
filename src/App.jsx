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
import TermsConditions from './pages/Terms&Conditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
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
      element: <TermsConditions />,
    },
    // {
    //   path: "/terms_conditions",
    //   element: <TermsConditions />,
    // },
    // {
    //   path: "/privacy_policy",
    //   element: <PrivacyPolicy />,
    // },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
