import React from "react";
import { FooterLinks } from "./FooterLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] mt-[11rem] px-[100px] py-[50px]">
      <div className="flex flex-wrap justify-between">
        {FooterLinks.map((section, index) => (
          <div key={index} className="w-full md:w-auto mb-8 md:mb-0">
            <h3 className="flex text-[20px]">{section.title}</h3>
            {section.title === "Connect With Us" ? (
              <ul className="list-none space-y-2 mt-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="hover:text-gray-300 text-[#999999] text-[18px]"
                      to={link.link}
                    >
                      <div>{<link.icon className={link.style} />}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-none space-y-2 mt-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      className="hover:text-gray-300 text-[#999999] text-[18px]"
                      to={link.link}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <hr className="mt-[5rem] border-gray-700 opacity-20" />
      <div className="mt-3 flex flex-wrap justify-between">
        <div className="text-sm text-[#999999]">
          &copy; {new Date().getFullYear()} VastStreams. All Rights Reserved.
        </div>

        <ul className="flex gap-x-4 items-center">
          <li className="text-[#999999] text-sm">Terms of Use</li>
          <hr className="w-0 h-7 border border-gray-700 opacity-20" />
          <li className="text-[#999999] text-sm">Privacy Policy</li>
          <hr className="w-0 h-7 border border-gray-700 opacity-20" />
          <li className="text-[#999999] text-sm">Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
