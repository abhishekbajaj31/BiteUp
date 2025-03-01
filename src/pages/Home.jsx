import CategoryMenu from "../components/CategoryMenu"
import FoodItems from "../components/FoodItems"
import Navbar from "../components/Navbar"
import Cart from "../components/Cart"

const Home = () => {
  return (
   <>
   <Navbar></Navbar>
   <CategoryMenu></CategoryMenu>
   <FoodItems></FoodItems>
   <Cart></Cart>

   </>
  )
}

export default Home