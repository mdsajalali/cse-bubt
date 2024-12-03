import Image from "next/image";
import React from "react";

export default function ChairmanSidebar() {
  const menuItems = [
    { text: "OBE - Outcome Based Education", image: "/gob.png" },
    { text: "AML-LAB", image: "/aml2.png" },
    { text: "Research Area", image: "/ra1.png" },
    { text: "Published Article", image: "/pa.png" },
    { text: "Capstone Projects", image: "/cp1.png" },
    { text: "CSE Office of Communication", image: "/com.png" },
  ];

  return (
    <div className="space-y-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary bg-white p-1 text-gray-700 shadow-sm duration-300 hover:bg-primary hover:text-white"
        >
          <Image src={item.image} alt={item.text} width={40} height={40} />
          <p className="text-[16px] font-medium">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
