import { Routes, Route, Router } from 'react-router-dom'
import { Dashboard } from './Profile_dashboard/Dashboard'
import { Profile } from './Profile_dashboard/profile'
import { Login } from './login/login'
import { Trainer } from './Trainer_Dashboard/Trainer'
import { Settings } from './Trainer_Dashboard/settings'

export function App() {
  return <div>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile" element={<Profile />} />
      </Route >
      <Route path="/Trainer_dashboard" element={<Trainer/>} >
      <Route path="Settings" element={<Settings/>} />
      </Route>
    </Routes>
  </div>

}