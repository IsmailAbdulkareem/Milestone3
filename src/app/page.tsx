
import HeroSection from "./component/Navbar";
import AboutUs from "./component/AboutUs";
import FoodCategory from "./component/FoodCatagory";
import WhyChooseUs from "./component/WhyChooseUs";
import Clients from "./component/Clients";
import MenuSection from "./component/MenuSection";
import MeetOurChef from "./component/MeetOurChef";
import Testimonials from "./component/Testimonials";
import FoodProcessComponent from"./component/FoodProcessComponent";
import FoodList from "./menu/foods"

export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <AboutUs />
      <FoodList />
      <FoodCategory />
      <WhyChooseUs />
      <Clients />
      <MenuSection />
      <MeetOurChef />
      <Testimonials />
      <FoodProcessComponent />
     
    </div>
  );
}
