import React from "react";
import Group from "../../../assests/Group.png";
import Group2 from "../../../assests/Group2.png";
import Group3 from "../../../assests/Group3.png";
import Group4 from "../../../assests/Group4.png";
import Image from "next/legacy/image";

export const Clients = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Box 1 */}
        <div>
          <Image src={Group} alt="Group" className="mx-auto mb-4" />
          <p className="text-white text-lg">Professional Chefs</p>
          <h1 className="text-white font-bold text-4xl">420</h1>
        </div>

        {/* Box 2 */}
        <div>
          <Image src={Group2} alt="Group2" className="mx-auto mb-4" />
          <p className="text-white text-lg">Items Of Food</p>
          <h1 className="text-white font-bold text-4xl">320</h1>
        </div>

        {/* Box 3 */}
        <div>
          <Image src={Group3} alt="Group3" className="mx-auto mb-4" />
          <p className="text-white text-lg">Years Of Experience</p>
          <h1 className="text-white font-bold text-4xl">30+</h1>
        </div>

        {/* Box 4 */}
        <div>
          <Image src={Group4} alt="Group4" className="mx-auto mb-4" />
          <p className="text-white text-lg">Happy Customers</p>
          <h1 className="text-white font-bold text-4xl">220</h1>
        </div>
      </div>
    </div>
  );
};

export default Clients;
