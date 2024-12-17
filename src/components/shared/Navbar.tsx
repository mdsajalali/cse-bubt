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
      {
        label: "chairman-message from the Chairman",
        link: "/chairman-message",
      },
      { label: "Industry Advisory Panel", link: "/industry-advisory-panel" },
      { label: "Achievement", link: "/achievement" },
      { label: "Why CSE at BUBT?", link: "/why-cse-at-bubt" },
    ],
  },
  {
    title: "Program",
    submenu: [
      { label: "graduate", link: "/graduate-program" },
      { label: "undergraduate", link: "/undergraduate-program" },
    ],
  },
  {
    title: "Admission",
    submenu: [
      { label: "admission information", link: "/admission-information" },
      { label: "tuition fee & waiver", link: "/tuition-fee&waiver" },
      { label: "admission requirements", link: "/admission-requirement" },
      { label: "apply online", link: "https://admission.bubt.edu.bd" },
    ],
  },
  {
    title: "People",
    submenu: [
      { label: "Faculty members", link: "/vision" },
      { label: "lab assistants", link: "/mission" },
      { label: "it officers", link: "/chairman-message" },
      { label: "administrative staffs", link: "/industry-advisory-panel" },
    ],
  },
  {
    title: "Students",
    submenu: [
      { label: "class routine", link: "/class-routine" },
      { label: "exam routine", link: "/exam-routine" },
      { label: "study tour", link: "/study-tour" },
      { label: "industry visit", link: "/industry-visit" },
    ],
  },
  {
    title: "Research",
    submenu: [
      { label: "research field", link: "/vision" },
      { label: "research laboratories", link: "/research-laboratories" },
      { label: "published articles", link: "/published-articles" },
      { label: "capstone projects", link: "/industry-advisory-panel" },
      { label: "projects", link: "/research-projects" },
      { label: "activities & collaboration", link: "/why-cse-at-bubt" },
    ],
  },
  {
    title: "Resources & Facilities",
    submenu: [
      { label: "our labs", link: "/vision" },
      { label: "student community forum", link: "https://test.bubt.edu.bd" },
      { label: "it service for students", link: "/itservice-for-student" },
      {
        label: "career opportunities",
        link: "https://www.bubt.edu.bd/Home/page_details/Career_Guidance_Office",
      },
      { label: "career guidance", link: "/achievement" },
      { label: "cse office of communications", link: "/why-cse-at-bubt" },
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
