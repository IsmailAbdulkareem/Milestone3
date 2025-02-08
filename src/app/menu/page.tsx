import Hero from "../component/Hero"
import StarterMenu from "../component/StarterMenu"
import MainCourseMenu from "../component/MainCourseMenu"
import Clients from "../component/Clients"
import DessertMenu from "../component/DessertMenu"
import Drinks from "../component/Drinks"
import PartnersAndClients from "../component/Clientsandpartner"
import ShopList from "./foods"
const MenuPage = () => {
    return (
      <div>
      <Hero />
      <ShopList/>
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
  