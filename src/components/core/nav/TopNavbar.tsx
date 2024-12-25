import Image from "next/image";
import Container from "../../shared/Container";
import NavSlider from "./NavSidebar";
import Link from "next/link";

const iconData = [
  { src: "/icons/nx.png", alt: "nx", link: "https://annex.bubt.edu.bd/" },
  { src: "/icons/ph.png", alt: "ph", link: "0123456789" },
  { src: "/icons/mail.png", alt: "mail", link: "info@bubt.edu.bd" },
  { src: "/icons/mc.png", alt: "mc", link: "https://cse.bubt.edu.bd/" },
  { src: "/icons/login.png", alt: "login", link: "https://cse.bubt.edu.bd/" },
  { src: "/icons/lib.png", alt: "lib", link: "https://cse.bubt.edu.bd" },
  { src: "/icons/e.png", alt: "e", link: "all-notices" },
  { src: "/icons/faq.png", alt: "faq", link: "https://cse.bubt.edu.bd/" },
];

export default function TopNavbar() {
  return (
    <div className="bg-[#F5F5DC] pt-2">
      <Container>
        <div className="flex flex-col items-center gap-5 md:justify-between lg:flex-row">
          <div className="flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/bubt_header_logo.png"
                alt="header logo"
                width={500}
                height={500}
                className="hidden h-auto max-w-full md:block"
              />
            </Link>
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center">
              <div className="flex flex-wrap justify-center gap-4">
                {iconData.map((icon, index) => (
                  <div
                    key={icon.alt}
                    className="group relative mt-3 h-5 w-5 xl:mt-0"
                  >
                    {/* Icon Link */}
                    <a
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        fill
                        className="object-cover"
                      />
                    </a>

                    {/* Tooltip */}
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? "bottom-full translate-y-2"
                          : "top-full translate-y-2"
                      } left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-800 px-2 py-1 text-xs font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100`}
                    >
                      {icon.alt}

                      {/* Tooltip Arrow */}
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "bottom-0" : "top-0"
                        } left-1/2 h-0 w-0 -translate-x-1/2 transform border-b-8 border-t-8 border-x-transparent ${
                          index % 2 === 0
                            ? "border-b-gray-800"
                            : "border-t-gray-800"
                        } transition-all delay-150 duration-200`}
                      ></div>
                    </div>
                  </div>
                ))}
                <div className="xl:hidden">
                  <NavSlider />
                </div>
              </div>
              <input
                className="mt-2 w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary md:mt-0 md:w-auto"
                placeholder="Search..."
              />
            </div>
            <div className="mt-4 text-center md:mt-2">
              <h2 className="text-[18px] font-semibold text-gray-800">
                Department of
              </h2>
              <h1 className="pb-2 text-2xl font-semibold text-primary">
                Computer Science and Engineering
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
