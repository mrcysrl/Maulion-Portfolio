import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss, faFacebook, faFigma, faHtml5, faJava, faJs, faLinkedin, faMicrosoft, faNodeJs, faPhp, faPython, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faFileArrowDown, faPhone, faBrain, faStar, faPlus, faHashtag, faDatabase, faWind, faVideo, faImage, faVirus, faServer, faMicrochip, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { ReactTyped as Typed } from "react-typed";

library.add(faFacebook, faLinkedin, faEnvelope, faFile, faFileArrowDown, faLightbulb, faPhone, faBrain, faStar, faHtml5);

export default function App() {
  const [expandedItem, setExpandedItem] = useState(null);           // Expand Function
  const [isShrinking, setIsShrinking] = useState(false);            // Expand Function
  const [activeNotification, setActiveNotification] = useState(null);  // Email Copy Function
  const [visibleSections, setVisibleSections] = useState({
    second: false,
    third: false,
    fourth: false,
  });                                                               // Scroll Fade Function
  const [tipFade, setTipFade] = useState(false);                    // Tip Fade Function



  // Expand Function
  const handleExpand = (item, event) => {
      if (event?.target.closest(".contacts__wrapper li, .project__text a")) {
      return;
    }
  
    setIsShrinking(true);
    setTimeout(() => {
      setExpandedItem(item === expandedItem ? null : item);
      setIsShrinking(false);
    }, 300);
  };
  


// Email Copy Function
const handleCopyEmail = () => {
  const email = "marcysraelmaulion@gmail.com";
  navigator.clipboard.writeText(email)
    .then(() => {
      setActiveNotification("email");
      setTimeout(() => setActiveNotification(null), 3000);
    })
    .catch(err => console.error('Failed to Copy Email: ', err));
};


// Phone Number Copy Function
const handleCopyNumber = () => {
  const number = "+63 956 250 0441";
  navigator.clipboard.writeText(number)
    .then(() => {
      setActiveNotification("phone");
      setTimeout(() => setActiveNotification(null), 3000);
    })
    .catch(err => console.error('Failed to Copy Number: ', err));
};



  // Scroll Fade Function
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-section");
        // Viewport Tracker
        if (entry.isIntersecting) {
          // Fade In
          setVisibleSections((prev) => ({ ...prev, [id]: true }));
        } else {
          // Fade Out
          setVisibleSections((prev) => ({ ...prev, [id]: false }));
        }
      });
    };

    const observerOptions = { threshold: .55 }; // Trigger
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    // Reset
    return () => observer.disconnect();
  }, [expandedItem]);



  // Tip Fade Function
  useEffect(() => {
    const scrollableContainer = document.querySelector(".scrollable__items");
    const handleScroll = () => {
      console.log("Scroll detected");
      
      if (scrollableContainer && scrollableContainer.scrollTop > 100 && !tipFade) {
        setTipFade(true);
      }
    };

    if (scrollableContainer) {
      scrollableContainer.addEventListener("scroll", handleScroll);
    }

    // Reset
    return () => {
      if (scrollableContainer) {
        scrollableContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [expandedItem, tipFade]);



  return (
    <section className={`bento bg-white flex
    ${expandedItem ? "": ""}`}>
      <div className={`container p-8 mx-auto my-0 flex justify-center items-center sm:h-full lg:h-screen
        ${expandedItem ? "h-screen" : ""}`}>
        <div className={`bento__wrapper
        text-black grid sm:gap-[1rem] xl:gap-[1.5rem] 2xl:gap-[2rem]
          2xl:grid-cols-[repeat(10,_100px)] 
          xl:grid-cols-[repeat(8,_100px)] 
          lg:grid-cols-[repeat(6,_100px)] 
          md:grid-cols-[repeat(4,_100px)]  
          sm:grid-cols-[repeat(3,_100px)]
          ${expandedItem ? "sm:grid-cols-[repeat(3,_100px)] sm:grid-rows-[repeat(6,_100px)] md:grid-cols-[repeat(4,_100px)] lg:grid-cols-[repeat(6,_100px)] xl:grid-cols-[repeat(8,_100px)] xl:grid-rows-[repeat(5,_100px)] 2xl:grid-cols-[repeat(10,_100px)] 2xl:grid-rows-[repeat(5,_100px)]" : "sm:grid-rows-[repeat(9,_100px)] md:grid-rows-[repeat(10,_100px)] lg:grid-rows-[repeat(6,_100px)] xl:grid-rows-[repeat(5,_100px)] 2xl:grid-rows-[repeat(5,_100px)]"}
          ${isShrinking ? "shrink" : ""}`}>
          


          {/* Bento Item 1 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item1" ? "border-solid border-[2px] border-black sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 xl:row-span-5 2xl:col-span-10 expanded" : "sm:col-span-3 sm:row-span-2 md:col-span-4 md:row-span-2 xl:col-span-4 xl:row-span-3 2xl:col-span-5"}
            ${expandedItem && expandedItem !== "item1" ? "hidden" : ""} 
            ${expandedItem !== "item1" ? "moving-border" : ""}`}
            onClick={() => handleExpand("item1")}>

            {expandedItem === "item1" ? (
              <div className="expandedContent relative h-full animate-fade-in-3">

                <div className={`click__home absolute px-[2rem] bottom-6 left-1/2 transform -translate-x-1/2 sm: whitespace-normal xl:whitespace-nowrap text-gray-600 sm:text-[.8rem] md:text-[1rem] sm:text-justify lg:text-center w-full transition-opacity ${tipFade ? "hidden ease-[2s]" : "block"}`}>
                Tip: Some bento boxes can be scrolled down for more information, and you can always return home by clicking inside this bento again.
                </div>


                <div className="scrollable__items sm:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide">

                  <div className="scrollable__wrapper flex flex-col w-full sm:py-[5rem]  xl:py-[3rem]">
                    <div className="scroll__container grid sm:gap-[5rem] lg:gap-[10rem] mb-[3rem]">

                    {/* First Scroll */}
                    <div className="first__scroll w-full flex sm:flex-col xl:flex-row items-center justify-evenly sm:gap-[2rem] xl:gap-0 sm:mb-[6rem] md:mb-[10rem] lg:mb-0">
                      <div className="first__title text-center">
                        <h2 className="sub sm:text-[1rem] md:text-[1.5rem] xl:text-[2rem]">Hello! My Name is</h2>
                        <h1 className="toyang whitespace-nowrap sm:text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-bold">Marc Ysrael J. Maulion</h1>
                      </div>
                      <img src={`${process.env.PUBLIC_URL}/Marc1.webp`} alt="" className="sm:w-[13rem] md:w-[15rem] xl:w-[18rem] 2xl:w-[20rem] rounded-[1rem] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.9)]"/>
                    </div>

                    {/* Second Scroll */}
                    <div className={`second__scroll w-full flex 
                      items-center justify-center transition-opacity duration-500 ${visibleSections.second ? "opacity-100" : "opacity-0"}`} data-section="second">
                      <div className="second__title text-center">
                        <h2 className="sm:text-[.75rem] md:text-[1rem] xl:text-[1.5rem] sm:text-justify lg:text-center max-w-[80%] mx-auto my-0 sm:pb-[0.5rem] lg:pb-0">I recently graduated from <strong>De La Salle Lipa (2024)</strong> with a bachelor's degree in Computer Engineering, and I'd like to think of myself as a:</h2>
                        <Typed strings = {[
                                "Passionate Developer",
                                "Meticulous Designer",
                                "Tech Enthusiast",
                              ]}
                            typeSpeed={40}
                            backSpeed={30}
                            backDelay={2000}
                            loop
                            className="typewrite whitespace-nowrap text-center sm:text-[1.75rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[7rem] font-bold italic"/>
                      </div>
                    </div>

                    {/* Third Scroll */}
                    <div className={`second__scroll w-full flex 
                      items-center justify-center transition-opacity duration-500 ${visibleSections.third ? "opacity-100" : "opacity-0"}`} data-section="third">
                      <div className="third__title text-center">
                      <p className="sm:text-[.75rem] md:text-[1rem] xl:text-[1.5rem] text-justify max-w-[80%] mx-auto my-0 text-white bg-black sm:px-[2rem] lg:px-[4rem] sm:py-[2rem] lg:py-[4rem] rounded-tr-[3rem] rounded-bl-[3rem] shadow-[0px_4px_8px_rgba(0,_0,_0,_0.9)] font-montserrat">
                      <span className="font-bold text-center sm:py-[1rem] lg:py-[2rem]">Welcome to my portfolio, built with ReactJS and TailwindCSS!</span>
                      
                      <span className="sm:indent-[1rem] lg:indent-[2rem]">Hello! My name is <strong><em>Marc Ysrael J. Maulion</em></strong>. I have a good foundation in cybersecurity, with expertise in networking through the CISCO Academy and malware analysis, along with a deep understanding of both hardware and software. My hands-on experience in PC hardware includes providing services such as RAM upgrades, laptop monitor replacements, and custom PC builds.</span>
                      
                      <span className="sm:indent-[1rem] lg:indent-[2rem]">During my On-the-Job Training at Frontline Business Solutions, I developed practical skills in web development. Afterward, I took on freelance projects, including creating a website for a videography and photography business in the Netherlands, which helped me further refine my web development expertise.</span>

                      <span className="sm:indent-[1rem] lg:indent-[2rem]">I’m passionate about combining my technical knowledge and creativity to deliver impactful solutions in web development, hardware troubleshooting, and cybersecurity.</span></p>
                      </div>
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full">
                <div className="item1__title absolute right-0 sm:bottom-10 md:bottom-2 xl:bottom-[5rem] 2xl:bottom-10 px-[1rem]">
                  <h1 className="text-bounce sm:text-[1rem] md:text-[1.4rem] xl:text-[1.5rem] 2xl:text-[2.1rem] text-white drop-shadow-lg font-hammersmith">
                    {"Marc Ysrael J. Maulion".split("").map((char, index) => (
                      <span key={index} className="bouncing-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </h1>
                  <p className="text-white sm:text-[.6rem] md:text-[.8rem] xl:text-[1rem]">Computer Engineer 2019 - 2024</p>
                </div>
                <div className="item__image h-full">
                  <img
                    className="w-full h-full object-cover object-[50%_30%] rounded-[1rem]"
                    src={`${process.env.PUBLIC_URL}/Marc.webp`}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>



          {/* Bento Item 2 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item2" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 xl:row-span-5 2xl:col-span-10 expanded" : "sm:col-span-3 sm:row-span-1 md:col-span-4 md:row-span-1 lg:col-span-2 lg:row-span-2 xl:col-span-2 2xl:col-span-3"} 
            ${expandedItem && expandedItem !== "item2" ? "hidden" : ""}`}
            onClick={() => handleExpand("item2")}>

            {expandedItem === "item2" ? (
              <div className="expandedContent relative flex items-center justify-center h-full animate-fade-in-3">
                <div className="scrollable__items sm:max-h-[675px] md:max-h-[791px] lg:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide">

                  <div className="project__wrapper sm:grid xl:grid-cols-[2fr_2.5fr] gap-[2rem] p-[2rem]">

                    <div className="project__text flex flex-col gap-[1rem] items-center justify-center max-w-[90%] mx-auto sm:order-2 xl:order-none">

                      <h1 className="sm:text-[1.5rem] xl:text-[2rem] 2xl:text-[2.5rem] font-montserrat font-bold text-center">Gomez Production</h1>

                      <p className="sm:text-[.9rem] md:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] font-montserrat text-justify ">I designed a simple and responsive website for an international client from the Netherlands, specializing in videography and photography services. </p>

                      <a href="https://gmznl.github.io/GomezProductionNL/" target="_blank" rel="noopener noreferrer" className="sm:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] px-[2rem] py-[1rem] border-solid border-[2px] border-black rounded-[2rem] my-[1.5rem]" onClick={(e) => { e.stopPropagation(); }}>Check it out.<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-[1rem]"/></a>
                    </div>

                    <div className="project__images grid  sm:gap-[0.5rem] xl:gap-[1rem] border-solid border-[2px] border-black rounded-[2rem]  mx-auto my-0
                    2xl:grid-cols-[repeat(2,_minmax(0,20rem))] 2xl:grid-rows-[repeat(2,_15rem)]
                    xl:grid-cols-[repeat(2,_minmax(0,15rem))] xl:grid-rows-[repeat(2,_10rem)]
                    md:grid-cols-[repeat(2,_minmax(0,12rem))] md:grid-rows-[repeat(2,_9.5rem)]
                    sm:grid-cols-[repeat(2,_minmax(0,10rem))] sm:grid-rows-[repeat(2,_6rem)]
                    max-w-[40rem]">
                      <img src={`${process.env.PUBLIC_URL}/Project1.png`} alt="" className="col-span-2 rounded-tl-[2rem] rounded-tr-[2rem]"/>
                      <img src={`${process.env.PUBLIC_URL}/Project2.png`} alt="" className="col-span-1 rounded-bl-[2rem]"/>
                      <img src={`${process.env.PUBLIC_URL}/Project3.png`} alt="" className="col-span-1 rounded-br-[2rem]"/>
                    </div>
                  </div>
                </div>
              </div>
              
            ) : (
              
              <div className="item__title w-full h-full flex justify-center items-center">
                <h1 className="text-center font-bold sm:text-[1.5rem] xl:text-[1.4rem] sm:p-[2rem] xl:p-[1rem] 2xl:text-[2rem] 2xl:p-[3rem] text-black">Check Out My First Web Design Creation!</h1>
              </div>
              

            )}
          </div>



          {/* Bento Item 3 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item3" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10 expanded" : "sm:col-span-2 sm:row-span-1 md:col-span-4 xl:col-span-2 xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item3" ? "hidden" : ""}`}
            onClick={() => handleExpand("item3")}>

            {expandedItem === "item3" ? (
              <div className="expandedContent relative h-full">
              <div className="scrollable__items sm:max-h-[675px] md:max-h-[791px] lg:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide">

                <div className="scrollable__wrapper flex flex-col w-full sm:py-[5rem] xl:py-[3rem]">
                  <div className="scroll__container grid sm:gap-[3rem] xl:gap-[4rem]">

                    <div className="bento__tools px-[2rem]">
                      <h1 className="text-white text-center font-bold sm:px-0 lg:px-[4rem] xl:p-0 sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] animate-fade-in-1">My Toolkit: Languages, Frameworks & IDEs</h1>
                    </div>

                    <div className="bento__tools flex flex-row flex-wrap justify-center items-center sm:max-w-full md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[80%] px-[2rem] mx-auto my-0 sm:gap-[1rem] md:gap-[1.5rem] lg:gap-[2rem] animate-fade-in-2">

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faHtml5} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">html</h1>
                      </div>
                      
                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faCss} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">css</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faJs} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">javascript</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faPlus} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">C++</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faHashtag} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">C#</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faPython} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">python</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faJava} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">java</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faPhp} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">php</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faMicrosoft} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">mssql</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faDatabase} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">mysql</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faWind} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">tailwind</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faReact} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">reactjs</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faSass} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">sass</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faNodeJs} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">nodejs</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faWordpress} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">wordpress</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faFigma} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">figma</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faVideo} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">video edit</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faImage} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">photoshop</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faVirus} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">cybersecurity</h1>
                      </div>
                      
                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faServer} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">networking</h1>
                      </div>

                      <div className="bento__tools__boxes flex flex-col items items-center justify-center mx-auto my-0 gap-[0.5rem] sm:w-[4rem] sm:h-[4rem] lg:w-[5rem] lg:h-[5rem] xl:w-[6rem] xl:h-[6rem]">
                        <FontAwesomeIcon icon={faMicrochip} className="text-white sm:text-[2rem] lg:text-[3rem] xl:text-[4rem]" />
                        <h1 className="sm:text-[.8rem] lg:text-[1rem] xl:text-[1.2rem] text-white">hardware</h1>
                      </div>
                    
                    </div>
                    <div className="bento__tools__disclosure flex items-center justify-center sm:p-[2rem] 2xl:p-[1rem] mx-auto my-0 sm:max-w-full lg:max-w-[80%] 2xl:max-w-[60%] animate-fade-in-3">
                      <h1 className="text-white text-justify sm:text-[.8rem] lg:text-[1rem]">Full Disclosure: The listed technologies range from those I have strong expertise in to those I’ve only encountered briefly. However, I’m always eager to learn and improve in areas where I have less experience.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div className="item__title flex sm:p-[1rem] md:p-[2rem] sm:flex-row xl:flex-col sm:gap-[1rem] md:gap-[2rem] xl:gap-[1rem] justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faLightbulb} className="icon sm:text-[2.5rem] md:text-[3.5rem] 2xl:text-[4rem] text-white"/>
                <h1 className="text-white sm:text-justify xl:text-center sm:text-[1rem] md:text-[1.2rem]">Tool Knowledge, and Technologies</h1>
              </div>
            )}
          </div>



          {/* Bento Item 4 */}
          <div className={`bento__item cursor-pointer sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-1 2xl:col-span-3 ${expandedItem && expandedItem !== "item4" ? "hidden" : ""}`}>
            <a href={`${process.env.PUBLIC_URL}/Marc Ysrael Maulion_CV`} download="Marc Ysrael Maulion_CV.pdf" className="item__title flex sm:flex-col md:flex-row justify-center items-center p-[2rem] sm:gap-[1rem] md:gap-[2rem] 2xl:gap-[1rem] w-full h-full">
            <h1 className="font-bold sm:hidden 2xl:block text-[1.3rem]">get my CV – let's make things happen!</h1>
            <h1 className="font-bold sm:block 2xl:hidden sm:order-1 md:order-none sm:text-[3rem] md:text-[4rem]">CV</h1>
                <FontAwesomeIcon icon={faFileArrowDown} className="icon text-black text-[3.5rem]"/>
            </a>
          </div>



          {/* Bento Item 5 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item5" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10 expanded" : "sm:col-span-2 sm:row-span-1 md:row-span-2 xl:row-span-1 2xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item5" ? "hidden" : ""}`}
            onClick={(event) => handleExpand("item5", event)}>

            {expandedItem === "item5" ? (
              <div className="expandedContent flex items-center justify-center w-full h-full">
                <div className="scrollable__items sm:max-h-[675px] md:max-h-[791px] lg:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide w-full">
                
                  <div className="contacts__wrapper sm:grid xl:grid-cols-2 sm:gap-[4rem] xl:gap-[2rem] sm:px-[1.5rem] md:px-[2rem] sm:my-[4rem] ">

                    <div className="contacts__main grid gap-[2rem] items-center justify-center">
                      <div className="main__title grid gap-[.5rem]">
                        <h1 className="font-bold sm:text-[2rem] md:text-[3rem] font-montserrat text-center">Contacts</h1>
                        <p className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat mx-auto my-0 text-center">Reach me directly for opportunities or inquiries.</p>
                      </div>
                      <ul className="grid gap-[1rem]">

                        <li className="flex items-center text-justify border-[3px] border-black sm:border-solid xl:border-dashed rounded-[1rem] py-[1rem] sm:px-[1rem] md:px-[2rem] sm:gap-[1rem] md:gap-[2rem] sm:h-[5rem] md:h-[6rem] xl:h-[7rem] sm:w-[17rem] md:w-[24rem] xl:w-[27rem] 2xl:w-[32rem]" onClick={handleCopyNumber}>
                          {activeNotification === "phone" ? (
                            <div className="animate-fade-in-1 text-center w-full">
                              <p className="md:text-[1.5rem] 2xl:text-[2rem] font-montserrat">Phone Number Copied</p>
                            </div>
                          ) : (
                            <>
                              <h2 className="sm:text-[1.5rem] md:text-[2rem] animate-fade-in-fast"><FontAwesomeIcon icon={faPhone} className="" /></h2>
                            <div className="">
                              <h1 className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat animate-fade-in-fast">phone</h1>
                              <p className="sm:text-[.8rem] md:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] font-bold italic animate-fade-in-fast">+971 50 331 6743</p>
                            </div>
                            </>
                          )}
                        </li>

                        <li className="flex items-center text-justify border-[3px] border-black sm:border-solid xl:border-dashed rounded-[1rem] py-[1rem] sm:px-[1rem] md:px-[2rem] sm:gap-[1rem] md:gap-[2rem] sm:h-[5rem] md:h-[6rem] xl:h-[7rem] sm:w-[17rem] md:w-[24rem] xl:w-[27rem] 2xl:w-[32rem]" onClick={handleCopyEmail}>
                          {activeNotification === "email" ? (
                            <div className="animate-fade-in-1 text-center w-full">
                              <p className="sm:text-[1rem] md:text-[1.5rem] 2xl:text-[2rem] font-montserrat">Email Address Copied</p>
                            </div>
                          ) : (
                            <>
                              <h2 className="sm:text-[1.5rem] md:text-[2rem] animate-fade-in-fast"><FontAwesomeIcon icon={faEnvelope} className="" /></h2>
                            <div className="">
                              <h1 className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat animate-fade-in-fast">email</h1>
                              <p className="sm:text-[.8rem] md:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] font-bold italic animate-fade-in-fast">marcysraelmaulion@gmail.com</p>
                            </div>
                            </>
                          )}
                        </li>

                      </ul>
                    </div>


                    <div className="socials__main grid gap-[2rem] items-center justify-center">
                      <div className="main__title grid gap-[.5rem]">
                        <h1 className="font-bold sm:text-[2rem] md:text-[3rem] font-montserrat text-center">Socials</h1>
                        <p className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat mx-auto my-0 text-center">Connect with me and stay updated.</p>
                      </div>
                      <ul className="flex flex-col gap-[1rem]">

                      <a href="https://www.facebook.com/marcjimenez.maulion" target="_blank" rel="noopener noreferrer">
                        <li className="flex items-center text-justify border-[3px] border-black sm:border-solid xl:border-dashed rounded-[1rem] py-[1rem] sm:px-[1rem] md:px-[2rem] sm:gap-[1rem] md:gap-[2rem] sm:h-[5rem] md:h-[6rem] xl:h-[7rem] sm:w-[17rem] md:w-[24rem] xl:w-[27rem] 2xl:w-[32rem]">
                          <h2 className="text-[2rem] animate-fade-in-fast"><FontAwesomeIcon icon={faFacebook} className=""/></h2>
                          <div className="">
                          <h1 className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat animate-fade-in-fast">Facebook</h1>
                          <p className="sm:text-[.8rem] md:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] font-bold italic animate-fade-in-fast">Marc Jimenez Maulion</p>
                          </div>
                        </li>
                      </a>

                      <a href="https://www.linkedin.com/in/marc-ysrael-maulion-914402279" target="_blank" rel="noopener noreferrer">
                        <li className="flex items-center text-justify border-[3px] border-black sm:border-solid xl:border-dashed rounded-[1rem] py-[1rem] sm:px-[1rem] md:px-[2rem] sm:gap-[1rem] md:gap-[2rem] sm:h-[5rem] md:h-[6rem] xl:h-[7rem] sm:w-[17rem] md:w-[24rem] xl:w-[27rem] 2xl:w-[32rem]">
                          <h2 className="text-[2rem] animate-fade-in-fast"><FontAwesomeIcon icon={faLinkedin} className=""/></h2>
                          <div className="">
                          <h1 className="sm:text-[.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-montserrat animate-fade-in-fast">Linkedin</h1>
                          <p className="sm:text-[.8rem] md:text-[1rem] xl:text-[1.25rem] 2xl:text-[1.5rem] font-bold italic animate-fade-in-fast">Marc Ysrael Maulion</p>
                          </div>
                        </li>
                      </a>
                      </ul>
                    </div>

                    
                   
                  </div>
                </div>
              </div>
            ) : (
              <div className="item__title flex sm:p-[1rem] md:p-[2rem] sm:flex-row md:flex-col xl:flex-row 2xl:flex-col gap-[1rem] justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faPhone} className="icon sm:text-[1.75rem] md:text-[3.5rem] xl:text-[2.5rem] 2xl:text-[4rem] text-black"/>
                <h1 className="whitespace-nowrap  sm:text-justify md:text-center xl:text-justify 2xl:text-center font-bold sm:text-[1.4rem] md:text-[1.5rem] xl:text-[1.3rem] 2xl:text-[1.7rem]">Get in Touch</h1>
              </div>
            )}
          </div>



          {/* Bento Item 6 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item6" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10 expanded" : "sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2 lg:row-span-1 xl:col-span-4 2xl:col-span-2 2xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item6" ? "hidden" : ""}`}
            onClick={() => handleExpand("item6")}>

            {expandedItem === "item6" ? (
              <div className="expandedContent flex items-center justify-center w-full h-full">
                
                <div className="scrollable__items sm:max-h-[675px] md:max-h-[791px] lg:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide">

                  <div className="education__wrapper sm:grid lg:grid lg:grid-cols-2 lg:grid-rows-2 sm:gap-[2rem] lg:gap-[1.5rem] 2xl:gap-[2rem] w-full h-full text-white leading-1 sm:px-[1.5rem] md:px-[2rem] sm:my-[3rem] lg:my-[1rem]">
                
                <div className="education__tertiary sm:animate-fade-in-4 lg:animate-fade-in-3 sm:order-4 lg:order-3">
                  <div className="education__title">
                    <h2 className="sm:text-[1rem] md:text[1.25] xl:text-[1rem] 2xl:text-[1.25rem]"><FontAwesomeIcon icon={faArrowRight}/> tertiary</h2>
                    <div className="education__context grid sm:gap-0 md:gap-[0.5rem] lg:gap-0 sm:pl-[1rem] 2xl:pl-[2rem]">
                    <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[1.5rem] 2xl:text-[2.25rem] italic font-bold">De La Salle Lipa</h1>
                    <h3 className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] font-montserrat">Bachelor of Science in Computer Engineering</h3>
                    <h4 className="sm:text-[1rem] md:text-[1.25rem] lg:text-[1rem] 2xl:text-[1.25rem]">Major in Cybersecurity</h4>
                    <p className="text-[.8rem] sm:my-[0.5rem] lg:my-[1rem] xl:my-[0.5rem] sm:leading-1 2xl:leading-2 text-justify sm:max-w-full xl:max-w-[90%]">Graduated with a cumulative GPA of 3.3047 under the De La Salle Lipa grading system, a "Very Good" rating, equivalent to 91.47%.</p>
                    </div>
                  </div>
                </div>

                <div className="education__tertiary sm:animate-fade-in-3 lg:animate-fade-in-1 sm:order-3 lg:order-1">
                  <div className="education__title ">
                    <h2 className="sm:text-[1rem] md:text[1.25] xl:text-[1rem] 2xl:text-[1.25rem]"><FontAwesomeIcon icon={faArrowRight}/> internship</h2>
                    <div className="education__context grid sm:gap-0 md:gap-[0.5rem] lg:gap-0 sm:pl-[1rem] 2xl:pl-[2rem]">
                    <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[1.5rem] 2xl:text-[2.25rem] italic font-bold">Frontline Business Solutions, Inc.</h1>
                    <h3 className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] font-montserrat">Web Developer / Designer</h3>
                    <h4 className="sm:text-[1rem] md:text-[1.25rem] lg:text-[1rem] 2xl:text-[1.25rem]">Rendered 240 hours</h4>
                    <p className="text-[.8rem] sm:my-[0.5rem] lg:my-[1rem] xl:my-[0.5rem] sm:leading-1 2xl:leading-2 text-justify sm:max-w-full xl:max-w-[90%]">I designed web layouts in Figma and converted them into functional websites. I optimized HTML and CSS using SASS and Tailwind for better maintainability and scalability. Additionally, I integrated WordPress (PHP) for dynamic content management.</p>
                    </div>
                  </div>
                </div>

                <div className="education__tertiary sm:animate-fade-in-2 sm:order-2">
                  <div className="education__title ">
                    <h2 className="sm:text-[1rem] md:text[1.25] xl:text-[1rem] 2xl:text-[1.25rem]"><FontAwesomeIcon icon={faArrowRight}/> secondary</h2>
                    <div className="education__context grid sm:gap-0 md:gap-[0.5rem] lg:gap-0 sm:pl-[1rem] 2xl:pl-[2rem]">
                    <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[1.5rem] 2xl:text-[2.25rem] italic font-bold">Joseph Marello Institute</h1>
                    <h3 className="sm:text-[1rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.5rem] font-montserrat">STEM Graduate</h3>
                    <h4 className="sm:text-[1rem] md:text-[1.25rem] lg:text-[1rem] 2xl:text-[1.25rem]">Enrolled for both Junior and Senior High</h4>
                    </div>
                  </div>
                </div>

                <div className="education__tertiary sm:animate-fade-in-1 lg:animate-fade-in-4 sm:order-1 lg:order-4">
                  <div className="education__title ">
                    <h2 className="sm:text-[1rem] md:text[1.25] xl:text-[1rem] 2xl:text-[1.25rem]"><FontAwesomeIcon icon={faArrowRight}/> primary</h2>
                    <div className="education__context grid sm:gap-0 md:gap-[0.5rem] lg:gap-0 sm:pl-[1rem] 2xl:pl-[2rem]">
                    <h1 className="sm:text-[1.5rem] md:text-[2rem] lg:text-[1.5rem] 2xl:text-[2.25rem] italic font-bold">Talahiban 1.0 Elementary School</h1>
                    <p className="text-[.8rem] sm:my-[0.5rem] lg:my-[1rem] xl:my-[0.5rem] sm:leading-1 2xl:leading-2 text-justify sm:max-w-full xl:max-w-[90%]">Not sure if this counts, but I was a 5th Honor pupil. ( ͡° ͜ʖ ͡°) </p>
                    </div>
                  </div>
                </div>


            </div>
              </div>
            </div>
            ) : (
              <div className="item__title flex sm:p-[1rem] md:p-[2rem] sm:flex-row md:flex-col lg:flex-row 2xl:flex-col sm:gap-[1rem] md:gap-[2rem] lg:gap-[1rem] xl:gap-[2rem] sm:justify-center xl:justify-center 2xl:justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faBrain} className="icon sm:text-[2rem] md:text-[3.5rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[4rem] text-white"/>
                <h1 className="text-white sm:text-justify md:text-center lg:text-justify 2xl:text-center sm:text-[1.3rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.3rem]">Education & Experience</h1>
              </div>
            )}
          </div>



          {/* Bento Item 7 */}
          <div className={`bento__item sm:col-span-1 sm:row-span-1 md:col-span-2 xl:col-span-2 xl:row-span-1 ${expandedItem && expandedItem !== "item7" ? "hidden" : ""}`}>
          <a href="https://github.com/mrcysrl/Maulion-Portfolio" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center p-[1rem] gap-[1rem] w-full h-full">
            <h3 className="sm:hidden md:block font-bold md:text-[1.3rem] lg:text-[1.2rem] 2xl:text-[1.5rem] text-justify ">Bento-Style</h3>
            <div className="sm:w-[5rem] md:w-[3rem]">
              <img src= {`${process.env.PUBLIC_URL}/bento.png`} alt=""/>
            </div>
          </a>
          </div>



          {/* Bento Item 8 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item8" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10 expanded" : "sm:col-span-3 sm:row-span-1 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-1 xl:col-span-2 xl:row-span-2 2xl:col-span-3"} 
            ${expandedItem && expandedItem !== "item8" ? "hidden" : ""}`}
            onClick={() => handleExpand("item8")}>

            {expandedItem === "item8" ? (
              <div className="expandedContent flex items-center justify-center w-full h-full">
                <div className="scrollable__items sm:max-h-[675px] md:max-h-[791px] lg:max-h-[675px] xl:max-h-[591px] 2xl:max-h-[623px] overflow-y-auto overflow-x-hidden scrollbar-hide">
                  <div className="skills__wrappper flex flex-row flex-wrap p-[2rem] gap-[2rem] font-montserrat justify-evenly">
                    <div className="skill__first sm:max-w-full xl:max-w-[45%] ">
                      <h1 className="md:text-[1.3rem] lg:text-[1.2rem] 2xl:text-[1.5rem] font-bold sm:pb-[1rem] xl:pb-0">Cybersecurity Skills</h1>
                      <ul className="skills list-disc pl-[2rem] sm:text-[1rem] md:text-[1.1rem] text-justify">
                        <li>Proficient in sandboxing tools like Oracle VM VirtualBox with Windows XP, Windows 7, and Windows 10 environments</li>
                        <li>Skilled in malware analysis tools, including Bintext, Detect-It-Easy, HIEW, OLLYDBG, PEiD, Process Hacker, Process Monitor, and Resource Hacker</li>
                        <li>Good knowledge of network monitoring tool like WireShark</li>
                        <li>Currently studying workarounds with SIEM solutions like Splunk</li>
                      </ul>
                    </div>

                    <div className="skill__second sm:max-w-full xl:max-w-[45%]">
                      <h1 className="md:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.2rem] 2xl:text-[1.5rem] font-bold sm:pb-[1rem] xl:pb-0">Front-End and Back-End Development</h1>
                      <ul className="skills list-disc pl-[2rem] sm:text-[1rem] md:text-[1.1rem] text-justify">
                        <li>Good grasp of programming languages including C++, Java, C#, Python, and
                        PHP</li>
                        <li>Experienced with SQL (MySQL & MSSQL)</li>
                        <li>Experienced in building and managing content using WordPress</li>
                        <li>Skilled in creating responsive and interactive web interfaces using HTML, CSS, and JavaScript</li>
                        <li>Experienced with modern frameworks and libraries such as Tailwind Framework</li>
                      </ul>
                    </div>

                    <div className="skill__third sm:max-w-full xl:max-w-[45%] ">
                      <h1 className="md:text-[1.3rem] lg:text-[1.2rem] 2xl:text-[1.5rem] font-bold sm:pb-[1rem] xl:pb-0">Additional Technical Skills</h1>
                      <ul className="skills list-disc pl-[2rem] sm:text-[1rem] md:text-[1.1rem] text-justify">
                        <li>Good knowledge of PC hardware, both desktop and laptop</li>
                        <li>Experienced with multimedia tools, including video editing software and graphic design</li>
                        <li>Proficient in Windows operating systems</li>
                        <li>Proficient in Microsoft Office 365 applications</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <div className="item__title w-full h-full flex justify-center items-center">
                <h1 className="text-center font-bold sm:text-[1.5rem] md:text-[3rem] xl:text-[2rem] p-[2rem] 2xl:text-[3.5rem] text-black">skills <FontAwesomeIcon icon={faStar}/></h1>
              </div>
            )}
          </div>



          {/* Bento Item 9 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item9" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-[#ffffff] rounded-full border-solid border-black border-[2px] relative`}>
            <button onClick={handleCopyEmail} className="flex justify-center items-center w-full h-full">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-black" />
            </button>

            {/* Notification bubble */}
            <div className={`absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-[#000000] sm:text-[.75rem] lg:text-[.8rem] 2xl:text-[1rem] text-white p-[1rem] rounded-[1rem] text-sm shadow-lg text-center max-w-[40rem] whitespace-nowrap sm:border-black xl:border-t-2 xl:border-r-2 xl:border-white 2xl:border-black  ${activeNotification === "email" ? "opacity-100" : "opacity-0 translate-y-0"} transition-opacity duration-500 ease-in-out`}>
              Email Address Copied
            </div>
          </div>



          {/* Bento Item 10 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-[#ffffff] border-solid border-[2px] border-black rounded-full`}>
              <a href="https://www.facebook.com/marcjimenez.maulion" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faFacebook} size="3x" className="text-black" />
              </a>
          </div>



          {/* Bento Item 11 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-[#ffffff] border-solid border-[2px] border-black rounded-full`}>
              <a href="https://www.linkedin.com/in/marc-ysrael-maulion-914402279" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-black" />
              </a>
          </div>



          {/* Bento Item 12 */}
          <div className={`bento__item col-span-3 row-span-1  flex justify-center items-center bg-[#000000] rounded-lg shadow-md p-4 ${expandedItem === null ? "" : "hidden"}`}>
            <div className="w-[60%] mx-auto my-0">
            <h3 className="text-[1.2rem] text-white text-justify ">Made with ReactJS & Tailwind CSS</h3>
            </div>
            <div className="w-[5rem]">
              <img src= {`${process.env.PUBLIC_URL}/logo192.png`} alt="" className="logo-spin" />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
