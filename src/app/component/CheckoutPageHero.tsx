import Image from "next/legacy/image";
import menuapple from "../../../assests/menuapple.png"; // Adjust path accordingly

const CheckoutPageHero: React.FC = () => {
  return (
    <div className="relative h-96 flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src={menuapple} // Use the imported variable
        alt="Apple Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* Text */}
      <div className="relative z-20">
        <h1 className="text-4xl font-bold">CheckOut Page</h1>
        <p className="mt-4 text-lg">
          <a href="/" className="text-orange-500 hover:underline">
            Home
          </a>{" "}
          &gt; CheckOut Page
        </p>
      </div>
    </div>
  );
};

export default CheckoutPageHero;
