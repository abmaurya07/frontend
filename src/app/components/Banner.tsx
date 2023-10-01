import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import mario1 from '@assets/images/mario1.png';
import mario3 from '@assets/images/mario3.png' 
type Props = {};

const Banner = (props: Props) => {
  return (

      <div className="flex flex-col items-center justify-center p-32">
        {/* h2, p and div are aligned vertically */}
        <div className="p-8">
        <p className="text-center text-6xl font-semibold mb-4">Find the perfect Mario Toys and Figurines</p>
        </div>
        <div className="flex">
          {/* input and button are aligned horizontally */}
          <input 
          className="px-2 py-1 mx-2 border-0 focus:outline-none rounded-lg bg-gray-700" 
          type="text" 
          placeholder="Search for mario product"
          />
          <Button>
            Search
          </Button>
        </div>
      </div>
  );
};

export default Banner;