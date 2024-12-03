import Hero from "@/components/core/Hero";
import TopNavbar from "@/components/core/nav/TopNavbar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function page() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
