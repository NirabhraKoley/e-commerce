import React from "react";
import ManCetegory from "../assets/images/man.png";
import WomenCetegory from "../assets/images/woman.png";
import KidCetegory from "../assets/images/kid.png";

const categories = [
  {
    title: "Man",
    imageUrl: ManCetegory,
  },
  {
    title: "Women",
    imageUrl: WomenCetegory,
  },
  {
    title: "Kids",
    imageUrl: KidCetegory,
  },
];
export const CategotySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={category.imageUrl} alt="" className="w-full h-full object-cover rounded-lg shadow-md"/>
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-grey-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};
