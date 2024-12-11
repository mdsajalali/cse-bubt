"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Menu } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const navItems = [
  {
    name: "about cse",
    items: [
      { name: "Vision of CSE", link: "/mobile-phones" },
      { name: "Mission of CSE", link: "/tablets" },
      { name: "Message from the Chairman", link: "/laptops" },
      { name: "Industry Advisory Panel", link: "/laptops" },
      { name: "Achievement", link: "/laptops" },
      { name: "Why CSE at BUBT?", link: "/laptops" },
    ],
  },
  {
    name: "program",
    items: [
      { name: "graduate", link: "/mobile-phones" },
      { name: "undergraduate", link: "/tablets" },
    ],
  },
  {
    name: "admission",
    items: [
      { name: "admission information", link: "/mobile-phones" },
      { name: "tuition fee & waiver", link: "/tablets" },
      { name: "admission requirements", link: "/laptops" },
      { name: "apply online", link: "/laptops" },
    ],
  },
  {
    name: "people",
    items: [
      { name: "Faculty members", link: "/mobile-phones" },
      { name: "lab assistants", link: "/tablets" },
      { name: "it officers", link: "/laptops" },
      { name: "administrative staffs", link: "/laptops" },
    ],
  },
  {
    name: "students",
    items: [
      { name: "class routine", link: "/mobile-phones" },
      { name: "exam routine", link: "/tablets" },
      { name: "study tour", link: "/laptops" },
      { name: "industry visit", link: "/laptops" },
    ],
  },
  {
    name: "research",
    items: [
      { name: "research field", link: "/mobile-phones" },
      { name: "research laboratories", link: "/tablets" },
      { name: "published articles", link: "/laptops" },
      { name: "capstone projects", link: "/laptops" },
      { name: "projects", link: "/laptops" },
      { name: "activities & collaboration", link: "/laptops" },
    ],
  },
  {
    name: "resources & facilities",
    items: [
      { name: "our labs", link: "/mobile-phones" },
      { name: "student community forum", link: "/tablets" },
      { name: "it service for students", link: "/laptops" },
      { name: "career opportunities", link: "/laptops" },
      { name: "career guidance", link: "/laptops" },
      { name: "cse office of communications", link: "/laptops" },
    ],
  },
];

export default function NavSlider() {
  return (
    <Sheet>
      <SheetTrigger className="flex-center-center size-[38px] rounded-md border border-primary bg-white px-2 text-black">
        <Menu className="size-[18px] md:size-5" />
      </SheetTrigger>

      <SheetContent
        className="max-h-screen overflow-y-auto bg-white"
        id="custom-scrollbar"
        side="left"
      >
        <Link href="/" className="relative mb-8 block h-7 w-28 lg:h-7 lg:w-36">
          <Image
            fill
            src="/bubt_header_logo.png"
            alt="brand logo"
            className="size-full"
          />
        </Link>
        <Accordion type="single" collapsible>
          <span className="leading-12 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
            Home
          </span>
          {navItems.map((navItem, index) => (
            <div key={index}>
              <AccordionItem
                className="border-none"
                key={index}
                value={navItem.name}
              >
                <AccordionTrigger className="border-none">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase">
                      {navItem.name}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="w-full">
                    {navItem.items.map((item, index) => (
                      <li key={index} className="my-3 w-full px-3">
                        <a
                          className="block w-full text-xs hover:font-medium hover:text-black"
                          href={item.link}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}

          <div className="mt-2 flex flex-col gap-5">
            <Link href="/alumni">
              <span className="leading-12 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
                Alumni
              </span>
            </Link>
            <Link href="/gallery">
              <span className="leading-12 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
                gallery
              </span>
            </Link>
            <Link href="/contact">
              <span className="leading-12 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
                contact
              </span>
            </Link>
          </div>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
