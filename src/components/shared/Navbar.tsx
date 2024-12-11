"use client";

import Link from "next/link";
import NavItemsDropdown from "../core/nav/NavItemsDropdown";
import Container from "./Container";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    title: "About CSE",
    submenu: [
      { label: "Vision of CSE", link: "/vision" },
      { label: "Mission of CSE", link: "/mission" },
      { label: "Message from the Chairman", link: "/message" },
      { label: "Industry Advisory Panel", link: "/advisory" },
      { label: "Achievement", link: "/achievement" },
      { label: "Why CSE at BUBT?", link: "/why-cse" },
    ],
  },
  {
    title: "Program",
    submenu: [
      { label: "graduate", link: "/vision" },
      { label: "undergraduate", link: "/mission" },
    ],
  },
  {
    title: "Admission",
    submenu: [
      { label: "admission information", link: "/vision" },
      { label: "tuition fee & waiver", link: "/mission" },
      { label: "admission requirements", link: "/message" },
      { label: "apply online", link: "/advisory" },
    ],
  },
  {
    title: "People",
    submenu: [
      { label: "Faculty members", link: "/vision" },
      { label: "lab assistants", link: "/mission" },
      { label: "it officers", link: "/message" },
      { label: "administrative staffs", link: "/advisory" },
    ],
  },
  {
    title: "Students",
    submenu: [
      { label: "class routine", link: "/vision" },
      { label: "exam routine", link: "/mission" },
      { label: "study tour", link: "/message" },
      { label: "industry visit", link: "/advisory" },
    ],
  },
  {
    title: "Research",
    submenu: [
      { label: "research field", link: "/vision" },
      { label: "research laboratories", link: "/mission" },
      { label: "published articles", link: "/message" },
      { label: "capstone projects", link: "/advisory" },
      { label: "projects", link: "/achievement" },
      { label: "activities & collaboration", link: "/why-cse" },
    ],
  },
  {
    title: "Resources & Facilities",
    submenu: [
      { label: "our labs", link: "/vision" },
      { label: "student community forum", link: "/mission" },
      { label: "it service for students", link: "/message" },
      { label: "career opportunities", link: "/advisory" },
      { label: "career guidance", link: "/achievement" },
      { label: "cse office of communications", link: "/why-cse" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 hidden bg-primary py-4 text-white shadow-lg xl:block">
      <Container>
        <div className="flex items-center justify-between gap-5 xl:gap-7">
          <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
            Home
          </span>
          {navItems.map((item, idx) => (
            <NavItemsDropdown
              key={idx}
              item={item}
              trigger={
                <div className="flex gap-1">
                  <span className="leading-12 text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
                    {item.title}
                  </span>
                  <div className="relative flex size-5 items-center">
                    <ChevronDown size={15} />
                  </div>
                </div>
              }
            />
          ))}
          <Link href="/alumni">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Alumni
            </span>
          </Link>
          <Link href="/gallery">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Gallery
            </span>
          </Link>
          <Link href="/contact">
            <span className="leading-12 cursor-pointer text-[11px] font-medium uppercase hover:opacity-85 2xl:text-xs">
              Contact
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
