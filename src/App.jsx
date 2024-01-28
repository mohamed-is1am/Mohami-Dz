import HomePage from '../src/Pages/HomePage/HomePage'
import SignIn from './Pages/SignIn/SignIn'
import Recharche from '../src/Pages/Recharche/Recharche'
import ProfileAvocat from './Pages/ProfileAvocat/ProfileAvocat'
import SignUp from './Pages/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info_global from './info_global'
import Layout from './layout'
import SignUp_admin from './Pages/SignUp/SignUp_admin'
import SignUp_client from './Pages/SignUp/SignUp_client'
import Rendez_vous from './Rendez_vous'
import Direction from './direction'
function App() {
  return (
      <BrowserRouter>
      <Info_global>
          <Routes>
        <Route path="/" element={<Layout />}>
              <Route path='home' element={<HomePage />}/>
              <Route path='Profile/' element={<ProfileAvocat/>}/>
              <Route path='Cabinets' element={<Recharche />}/>
              <Route path='Rendez_vous' element={<Rendez_vous />}/>
              <Route path='SignIn' element={<SignIn />}/>
              <Route path='SignUp/avocat' element={<SignUp />}/>
              <Route path='SignUp/client' element={<SignUp_client />}/>
              <Route path='SignUp/admin' element={<SignUp_admin />}/>
              <Route path='direction' element={<Direction />}/>

        </Route>

          </Routes>
      </Info_global>

      </BrowserRouter>
  )
}

export default App