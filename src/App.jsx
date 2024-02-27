import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import ReactGA from 'react-ga';
import {
createBrowserRouter,
Route,
Routes,
} from "react-router-dom";
import TermsConditions from './pages/Terms&Conditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import NavBar from './pages/components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  ReactGA.initialize('G-EVDP6RWK28');
  useEffect(() => {
    ReactGA.initialize('G-EVDP6RWK28');

  }, [])



  return (
    <>
    <Routes>

      <Route exact path='/' Component={Register} />
      <Route path='/privacy_policy'Component={PrivacyPolicy} />
      <Route path='/terms_conditions' Component={TermsConditions} />
    </Routes>
    </>
    // <RouterProvider router={router} />
  )
}

export default App
