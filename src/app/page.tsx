import TopNavbar from "@/components/core/nav/TopNavbar";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function page() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <h1 className="py-5 text-center text-2xl">Content Here</h1>
      <Footer />
    </>
  );
}
