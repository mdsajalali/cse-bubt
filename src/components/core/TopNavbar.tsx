import Image from "next/image";
import Container from "../shared/Container";

const iconData = [
  { src: "/icons/nx.png", alt: "nx" },
  { src: "/icons/ph.png", alt: "ph" },
  { src: "/icons/mail.png", alt: "mail" },
  { src: "/icons/mc.png", alt: "mc" },
  { src: "/icons/login.png", alt: "login" },
  { src: "/icons/lib.png", alt: "lib" },
  { src: "/icons/e.png", alt: "e" },
  { src: "/icons/faq.png", alt: "faq" },
];

export default function TopNavbar() {
  return (
    <div className="bg-[#F5F5DC] pt-2">
      <Container>
        <div className="flex flex-col items-center gap-5 md:justify-between lg:flex-row">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/bubt_header_logo.png"
              alt="header logo"
              width={500}
              height={500}
              className="h-auto max-w-full"
            />
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center">
              <div className="flex flex-wrap justify-center gap-4">
                {iconData.map(({ src, alt }) => (
                  <Image key={alt} src={src} alt={alt} width={20} height={20} />
                ))}
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
