import './App.css'
import ReactGA from 'react-ga';
import { Route, Routes } from "react-router-dom";
import Register from './pages/Register'
import TermsConditions from './pages/TermsConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

ReactGA.initialize('G-EVDP6RWK28');

function App() {
  return (
    <Routes>
      <Route exact path='/' Component={Register} />
      <Route path='/privacy_policy' Component={PrivacyPolicy} />
      <Route path='/terms_conditions' Component={TermsConditions} />
    </Routes>
  )
}

export default App
