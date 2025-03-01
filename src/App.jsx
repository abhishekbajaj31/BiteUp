/*eslint-disable no-unused-vars */
import { React } from "react"
import { Route,BrowserRouter,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import { Error } from "./pages/Error"
import ProtectedRoute from "./components/ProtectedRoute"
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/success" element={<ProtectedRoute element={<Success/>}/>}> </Route>
    <Route path="/*" element={<Error/>}></Route>
  </Routes>
    </BrowserRouter>
  )
}

export default App