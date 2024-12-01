// components/Footer.tsx
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-teal-900 py-10 text-white">
      {/* Top Section */}

      <div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/bubt-footer-logo.png"
            alt="footer logo"
            width={100}
            height={100}
          />
          <h1>BUBT</h1>
          <h1>Bangladesh University of Business and Technology</h1>
          <div className="grid pt-5 grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex gap-1">
              <MapPin />
              <p>Rupnagar, Mirpur-2, Dhaka-1216</p>
            </div>
            <div className="flex gap-1">
              <Mail />
              <p>info@bubt.edu.bd</p>
            </div>
            <div className="flex gap-1">
              <Phone />
              <p>+8801680050630</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-teal-700" />

        <div className="container mx-auto grid grid-cols-1 gap-10 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <h1>Student Corner</h1>
            <ul>
              <li>
                <a href="#">Student Portal</a>
              </li>
              <li>
                <a href="#">Alumni</a>
              </li>
              <li>
                <a href="#">Convocation</a>
              </li>
              <li>
                <a href="#">Semester Policy</a>
              </li>
              <li>
                <a href="#">Download Center</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Quick Links</h1>
            <ul>
              <li>
                <a href="#">Admission</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Requirements & Procedures</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-center">CLubs</h1>
            <div className="flex gap-2">
              <ul>
                <li>
                  <a href="#">Annex</a>
                </li>
                <li>
                  <a href="#">AML Club</a>
                </li>
                <li>
                  <a href="#">Rover Scout</a>
                </li>
                <li>
                  <a href="#">Cultural Club</a>
                </li>
                <li>
                  <a href="#">Programming Club</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Annex</a>
                </li>
                <li>
                  <a href="#">AML Club</a>
                </li>
                <li>
                  <a href="#">Rover Scout</a>
                </li>
                <li>
                  <a href="#">Cultural Club</a>
                </li>
                <li>
                  <a href="#">Programming Club</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>Academic</h1>
            <ul>
              <li>
                <a href="#">Notice</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Results</a>
              </li>
              <li>
                <a href="#">Class Routine</a>
              </li>
              <li>
                <a href="#">Exam Routine</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Important Links</h1>
            <ul>
              <li>
                <a href="#">UGC</a>
              </li>
              <li>
                <a href="#">ICT Division</a>
              </li>
              <li>
                <a href="#">Prime Minister Office</a>
              </li>
              <li>
                <a href="#">Ministry of Education</a>
              </li>
              <li>
                <a href="#">List of All Universities</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-teal-700" />

      {/* Bottom Section */}
      <div className="container mx-auto mt-6 flex flex-col items-center justify-between space-y-4 px-4 lg:flex-row lg:space-y-0">
        {/* Copyright */}
        <p className="text-center text-sm lg:text-left">
          &copy; 2024 BUBT-CSE All Rights Reserved. Total Page Views: 1,978,249
          <br />
          Intake: 30/1 (Eve) Creation.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Facebook className="cursor-pointer hover:text-gray-300" size={24} />
          <Twitter className="cursor-pointer hover:text-gray-300" size={24} />
          <Linkedin className="cursor-pointer hover:text-gray-300" size={24} />
          <Youtube className="cursor-pointer hover:text-gray-300" size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
