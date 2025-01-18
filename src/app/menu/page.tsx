import Hero from "../component/Hero"
import StarterMenu from "../component/StarterMenu"
import MainCourseMenu from "../component/MainCourseMenu"
import Clients from "../component/Clients"
import DessertMenu from "../component/DessertMenu"
import Drinks from "../component/Drinks"
import PartnersAndClients from "../component/Clientsandpartner"
import FoodList from "./foods"
const MenuPage = () => {
    return (
      <div>
      <Hero />
      <FoodList/>
      <StarterMenu />
      <MainCourseMenu />
      <Clients />
      <DessertMenu />
      <Drinks />
      <PartnersAndClients />
      </div>
    );
  };
  
  export default MenuPage;
  