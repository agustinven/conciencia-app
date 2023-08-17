import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto mb-12 grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#BE09FF] font-['Inter']">
            CONCIENCIA ACADEMY
          </h1>
          <p className="py-4 text-white font-['Source_Sans_3']">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare size={30} className="text-white" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaInstagram size={30} className="text-white" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaTwitterSquare size={30} className="text-white" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaGithubSquare size={30} className="text-white" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaDribbbleSquare size={30} className="text-white" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-3 flex justify-between text-white mt-6 font-['Source_Sans_3']">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Commerce</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
