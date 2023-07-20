import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = ({ onSearch, searchEnabled }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputEnable, setInputEnable] = useState(searchEnabled);
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const socials = [
    {
      icon: faTwitter,
      url: "https://twitter.com/WaxifAlee",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/waxif.alee",
    },
    {
      icon: faGithub,
      url: "https://github.com/WaxifAlee",
    },
    {
      icon: faMedium,
      url: "https://medium.com/@waxif.alee1",
    },
  ];

  return (
    <motion.nav
      className="bg-white py-4 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-auto mb-0 ">
          <Link
            href="/"
            className="text-gray-900 font-dancingScript font-semibold text-2xl"
          >
            Wordy Wasif
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full md:w-auto flex md:items-center md:space-x-4">
          {/* Social Media Icons */}
          <div className=" space-x-4 md:flex hidden">
            {socials.map((social, index) => (
              <a
                href={social.url}
                target="_blank"
                className="text-gray-900 hover:text-green-600 transition duration-300"
                key={index}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div
            style={inputEnable ? { display: "block" } : { display: "none" }}
            className="border  border-gray-400 px-4 
            rounded-md focus:outline-none focus:border-green-500 "
          >
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="search"
              placeholder="Search..."
              className="px-2 py-1 outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
