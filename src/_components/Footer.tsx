import { FaInstagram, FaFacebookF, FaTelegram } from 'react-icons/fa';
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
              style={{ width: 'auto', height: 'auto' }}
            />
            {/* <p className="text-center text-sm md:text-left">Bole, Mega Building 3rd floor</p> */}
          </div>
          {/* Right Section - Links & Second Logo */}
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start mt-8 md:mt-0">
            <div className="grid grid-cols-2 gap-10 text-center md:text-left">
              <div>
                <h3 className="font-bold">Product</h3>
                <ul className="space-y-2 mt-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
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
          <p className="text-sm">© 2025 Tamesol Communications, Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/Addisnegerexpo?mibextid=ZbWKwL" target="_blank">
              <FaFacebookF className="text-lg hover:text-white cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=1hjxbc2rhp4g5&utm_content=tc4haq7"
              target="_blank"
            >
              <FaInstagram className="text-lg hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.telegram.me/cometabayneh" target="_blank">
              <FaTelegram className="text-lg hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
