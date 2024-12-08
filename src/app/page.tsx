import Image from "next/image";
import HeroSection from "./component/Hero";
import AboutUs from "./component/AboutUs";
import FoodCategory from "./component/FoodCatagory";
import WhyChooseUs from "./component/WhyChooseUs";
import Clients from "./component/Clients";
import Footer from "./component/Footer";
import MenuSection from "./component/MenuSection";
import MeetOurChef from "./component/MeetOurChef";
import Testimonials from "./component/Testimonials";
import FoodProcessComponent from"./component/FoodProcessComponent";
export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <Clients />
      <MenuSection />
      <MeetOurChef />
      <Testimonials />
      <FoodProcessComponent />
      <Footer />
    </div>
  );
}
