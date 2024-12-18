import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from '../assets/img.png'
import Header from "../Components/PharmacyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faStore, faUserCheck, faHeartbeat, faPills,faHospital,faArrowRight   } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 

const PharmacyLandingPage = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle mouse enter and leave for the "Services" link
  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  return (
    <div>
       <Header
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isDropdownVisible={isDropdownVisible}
      />
      <main className="relative">

      <section className=""style={{ backgroundColor: "#e8fcf8"}}>
  <div className="py-16 px-4 md:px-16 lg:px-16 flex flex-col md:flex-row items-center text-center md:text-left gap-8">
    {/* Left Section */}
    <div className=" lg:pr-64">
      <h2 className="text-3xl md:text-5xl font-medium text-dark-turquoise mb-4">
        Transforming Pharmacy with Technology and AI
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        World class clinical solutions, business tools, and a support team to help
        you craft your dream pharmacy practice.
      </p>
      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
        <button
          className="border-2 border-yellow-400 text-yellow-500 font-medium bg-white px-8  py-4 rounded-full hover:bg-yellow-50 transition w-auto"
         
        >
          Talk to Pharmacy Advisor
        </button>
        <button
          className="text-gray-700 px-8 py-4 font-medium rounded-full bg-yellow-400 hover:bg-turquoise transition w-auto"
          
        >
          Sign up for Free
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-shrink-0 "style={{ width: '300px', height: '300px' }}>
  <img src={img} alt="Logo"style={{ width: '100%', height: '100%', objectFit: 'contain' }}  />
</div>

  </div>
</section>

<section
  className="text-gray-700 py-10"
  style={{ backgroundColor: "#fff8d2" }}
>
  <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
   
    <div className="md:w-64% text-center md:text-left mb-4 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-medium text-baby-pink">
        Access To Care
      </h2>
      <h2 className="text-2xl md:text-2xl font-medium text-baby-pink">
        A complete solution to transform into a pharmacist-led clinic
      </h2>
      <h2 className="text-lg md:text-l text-baby-pink">
        We've partnered with NPs and MDs to support you in assessing and
        prescribing for more conditions.
      </h2>
    </div>

 
    <div className="md:w-1/4 text-center md:text-right">
      <Link to="/services">
        <button
          className="bg-baby-pink text-white  font-bold py-3  px-4 rounded-full text-sm transition duration-300 hover:bg-blue-600"
        >
          Learn More
        </button>
      </Link>
    </div>
  </div>
</section>


<section
  className="py-16 px-8 text-gray-800">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8"style={{ color: "#f49e1e" }}>
      Pharmacy Statistics
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Statistic 1 */}
      <div className=" shadow-md p-6 rounded-lg flex flex-col items-center text-center bg-[#e8fcf8] hover:bg-baby-yellow transform transition hover:scale-105">
        <FontAwesomeIcon
          icon={faUserPlus}
          className="text-5xl  mb-4 group-hover:text-orange-600"style={{ color: "#f49e1e" }}
        />
        <h3 className="text-3xl font-extrabold text-gray-800 ">5500+</h3>
        <p className="text-dark-turquoise mt-2 font-medium">
          Online Patient Registrations / Year
        </p>
        <p className="text-sm mt-2 italic">
          Our intuitive Smart Form system uses patient-friendly language to
          maximize completion.
        </p>
      </div>

      {/* Statistic 2 */}
      <div className=" shadow-md p-6 rounded-lg flex flex-col items-center text-center bg-[#e8fcf8] hover:bg-baby-yellow transform transition hover:scale-105">
        <FontAwesomeIcon
          icon={faStore}
          className="text-5xl text-turquoise mb-4 group-hover:text-orange-600"
        />
        <h3 className="text-3xl font-extrabold text-gray-800">7000+</h3>
        <p className="text-dark-turquoise mt-2 font-medium">
          Digital Storefront Visits / Year
        </p>
        <p className="text-sm mt-2 italic">Ottawa Pharmacy #1</p>
      </div>

      {/* Statistic 3 */}
      <div className=" shadow-md p-6 rounded-lg flex flex-col items-center text-center bg-[#e8fcf8] hover:bg-baby-yellow transform transition hover:scale-105">
        <FontAwesomeIcon
          icon={faUserCheck}
          className="text-5xl text-baby-pink mb-4 group-hover:text-orange-600"
        />
        <h3 className="text-3xl font-extrabold text-gray-800">350+</h3>
        <p className="text-dark-turquoise mt-2 font-medium">
          Referral Registrations From MedEssist / Year
        </p>
        <p className="text-sm mt-2 italic">North York Pharmacy</p>
      </div>

      {/* Statistic 4 */}
      <div className=" shadow-md p-6 rounded-lg flex flex-col items-center text-center bg-[#e8fcf8] hover:bg-baby-yellow transform transition hover:scale-105">
        <FontAwesomeIcon
          icon={faHeartbeat}
          className="text-5xl mb-4 group-hover:text-orange-600"style={{ color: "#f49e1e" }}
        />
        <h3 className="text-3xl font-extrabold text-gray-800">700+</h3>
        <p className="text-dark-turquoise mt-2 font-medium">
          Registrations from New Patients / Year
        </p>
        <p className="text-sm mt-2 italic">Port Elgin Pharmacy</p>
      </div>

      {/* Statistic 5 */}
      <div className=" shadow-md p-6 rounded-lg flex flex-col items-center text-center bg-[#e8fcf8] hover:bg-baby-yellow transform transition hover:scale-105">
        <FontAwesomeIcon
          icon={faPills}
          className="text-5xl text-tur mb-4 group-hover:text-orange-600"
        />
        <h3 className="text-3xl font-extrabold text-gray-800">5500+</h3>
        <p className="text-dark-turquoise mt-2 font-medium">
          Online Patient Registrations / Year
        </p>
        <p className="text-sm mt-2 italic">Toronto Pharmacy</p>
      </div>
    </div>
  </div>
</section>

<section
  className="py-16 px-8 flex flex-wrap items-center justify-between"
>
  <div className="container mx-auto flex flex-wrap items-center py-16 px-16  p-4"style={{ backgroundColor: "#fff8d2" }}>
    {/* Left Content */}
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
        Pharmacies
      </h2>
      <p className="text-gray-600 text-lg mb-6">
        Maximize loyalty and growth by connecting your existing website or
        using MedEssist as your digital store front.
      </p>
      <div className="flex gap-4">
        <button
          className="text-black px-6 py-2 rounded-full bg-yellow-400 hover:bg-yellow-600 transition w-auto uppercase"
        >
          Learn More
        </button>
      </div>
      <p className="text-gray-600 text-md mb-6 mt-4 flex items-center">
       or Book a demo
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-gray-600" />
      </p>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end px-4 mb-6 lg:mb-0 pr-32">
      <FontAwesomeIcon
        icon={faHospital}
        className="text-[150px] text-gray-800 mb-6 transform lg:translate-x-12"
      />
    </div>
  </div>
</section>

<section class="bg-yellow-400 py-12 px-6 pb-16 text-center">
  <h2 class="text-3xl font-bold text-gray-800 mb-4">
    Ready to simplify your practice and meet new patients?
  </h2>
  <p class="text-lg  text-gray-800 mb-6">
    Go live with a customized digital storefront and pharmacy dashboard in less than 24 hours.
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="#"
      class="text-turquoise bg-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition"
    >
      Talk To A Pharmacy Advisor
    </a>
    <a
      href="#"
      class="bg-turquoise text-white font-bold py-3 px-6 rounded hover:bg-turquoise transition"
    >
      Get Started →
    </a>
  </div>
</section>

<section class="bg-yellow-50 py-12 px-6">
  <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
    <div class="flex-1 text-center lg:text-left">
      <h2 class="text-3xl font-bold text-gray-800 mb-4">Still unsure?</h2>
      <a
        href="#"
        class="text-teal-500 font-medium underline hover:text-teal-700"
      >
        Send us a message!
      </a>
      <p class="text-gray-600 mt-2">
        Our team is here to answer any questions you have. Support is just a
        click away!
      </p>
    </div>

    <div class="flex-1 flex flex-col items-center lg:items-end">
      <h3 class="text-lg font-medium text-gray-800 mb-4">
        Start a conversation
      </h3>
      <div class="flex items-center gap-2 mb-2">
    
      <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Avatar 1"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Avatar 2"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt="Avatar 3"
          class="w-10 h-10 rounded-full border-2 border-white shadow-md"
        />
      </div>
      <p class="text-gray-600 text-sm flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m2.25 5.25a9 9 0 11-12.375-12.375"
          />
        </svg>
        Under 2 minutes
      </p>
      <a
        href="#"
        class="mt-6 bg-yellow-400 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition"
      >
        Send us a message
      </a>
    </div>
  </div>
</section>

</main>


    <footer className="bg-teal-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">MedEssist</h2>
          </div>
          <p className="mt-4">Make every dose count.</p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-2xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-8 flex-1">
          <div>
            <h3 className="font-bold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book a Phone Call
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pharmacy Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog / Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Experience
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Find a Pharmacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-teal-400 pt-4 text-sm text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            108 College St 7th Floor, Suite W780, Toronto, ON M5G 1L6 <br />
            Brookfield Place, Suite 2700, 225 6 Ave SW, Calgary, AB T2P 1N2{" "}
            <br />
            MedEssist is not a pharmacy, online pharmacy, or telemedicine
            provider. MedEssist supplies software to pharmacies, educational
            providers, and digital health companies.
          </p>
          <p className="mt-4">Copyright © 2022 MedEssist - All Rights Reserved.</p>
        </div>
      </div>
    </footer>







    </div>
  );
};

export default PharmacyLandingPage;
