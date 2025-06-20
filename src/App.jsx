import { Route, Routes } from 'react-router-dom'

// Styling
import './App.css'

// Pages
import LandingPage from './pages/LandingPage'

// App
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App


