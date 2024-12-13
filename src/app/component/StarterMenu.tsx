import Image from "next/image";
import menuImage from "../../../assests/menuImage.png"; // Update the path as needed

const StarterMenu: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="flex shadow-lg rounded-lg overflow-hidden bg-white"
        style={{
          width: "1320px",
          height: "628px",
        }}
      >
        {/* Image Section */}
        <div className="w-1/2 h-full">
          <Image
            src={menuImage}
            alt="Starter Menu"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Menu Details Section */}
        <div className="w-1/2 h-full p-8">
          <div className="bg-white h-full rounded-lg border border-gray-200 p-6">
            <h2 className="text-4xl font-bold mb-6 text-orange-500">
              Starter Menu
            </h2>

            {/* Menu Items */}
            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    Alder Grilled Chinook Salmon
                  </h3>
                  <p className="text-gray-500">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="text-gray-500 mt-1">560 CAL</p>
                </div>
                <span className="text-orange-500 text-2xl font-bold">32$</span>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-orange-500">
                    Berries and creme tart
                  </h3>
                  <p className="text-gray-500">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="text-gray-500 mt-1">700 CAL</p>
                </div>
                <span className="text-orange-500 text-2xl font-bold">43$</span>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    Tormentoso Bush Pizza Pintoage
                  </h3>
                  <p className="text-gray-500">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="text-gray-500 mt-1">1000 CAL</p>
                </div>
                <span className="text-orange-500 text-2xl font-bold">14$</span>
              </div>

              {/* Item 4 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    Spicy Vegan Potato Curry
                  </h3>
                  <p className="text-gray-500">
                    Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <p className="text-gray-500 mt-1">560 CAL</p>
                </div>
                <span className="text-orange-500 text-2xl font-bold">35$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
