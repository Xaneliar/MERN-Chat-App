import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LogInPage from "./pages/LogInPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"

import { Routes, Route } from "react-router-dom"
const App = () => {

  return (
    <div>

    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>

    </div>
  )
}

export default App