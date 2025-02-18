import { FaInstagram, FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-3 md:px-14">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Socials & Contact */}
          <div className="flex flex-col items-center md:items-center justify-center">
            <Image
              src="/addis_reversed_logo.png"
              width={200}
              height={200}
              alt="addis neger eske fasika"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-center text-sm md:text-left">123 Main Street, Anytown, CA 12345</p>
          </div>
          {/* Right Section - Links & Second Logo */}
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-10 text-center md:text-left">
              <div>
                <h3 className="font-bold">Product</h3>
                <ul className="space-y-2 mt-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold">Company</h3>
                <ul className="space-y-2 mt-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookF className="text-lg hover:text-white cursor-pointer" />
            <FaInstagram className="text-lg hover:text-white cursor-pointer" />
            <FaGithub className="text-lg hover:text-white cursor-pointer" />
            <FaYoutube className="text-lg hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
