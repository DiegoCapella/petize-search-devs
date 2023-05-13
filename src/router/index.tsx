import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/404'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/perfil/:username" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
