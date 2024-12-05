import AdmissionCallback from "@/components/core/AdmissionCallback";
import BubtCseReason from "@/components/core/BubtCseReason";
import Chairman from "@/components/core/chairman/Chairman";
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
      <Chairman />
      <BubtCseReason />
      <AdmissionCallback />
      <Footer />
    </>
  );
}
