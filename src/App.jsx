import { Route, Routes } from 'react-router-dom'

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


