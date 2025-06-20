import { Route, Routes } from 'react-router-dom'

// Styling
import './App.css'

// Components
// NavBat, etc

// Pages
import Landing from './pages/Landing'

// App
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App


