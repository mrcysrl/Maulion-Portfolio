import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faLinkedin, faEnvelope, faFile);

export default function App() {
  const [expandedItem, setExpandedItem] = useState(null);           // Expand Function
  const [isShrinking, setIsShrinking] = useState(false);            // Expand Function
  const [showNotification, setShowNotification] = useState(false);  // Email Copy Function
  const [visibleSections, setVisibleSections] = useState({
    second: false,
    third: false,
  });                                                               // Scroll Fade Function
  const [tipFade, setTipFade] = useState(false);                    // Tip Fade Function



  // Expand Function
  const handleExpand = (item) => {
    setIsShrinking(true);
    setTimeout(() => {
      setExpandedItem(item === expandedItem ? null : item);
      setIsShrinking(false);
    }, 500);
  };



  // Email Copy Function
  const handleCopyEmail = () => {
    const email = "marcysraelmaulion@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch(err => console.error('Failed to copy email: ', err));
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

    const observerOptions = { threshold: 1 }; // Trigger
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
      <div className={`container p-8 mx-auto my-0 flex justify-center items-center sm:h-full lg:h-screen sm:w-screen
        ${expandedItem ? "sm:h-screen" : ""}`}>
        <div className={`bento__wrapper
        text-black grid 2xl:gap-[2rem] xl:gap-[1.5rem] sm:gap-[1rem]
          2xl:grid-cols-[repeat(10,_100px)] 2xl:grid-rows-[repeat(5,_100px)]
          xl:grid-cols-[repeat(8,_100px)] xl:grid-rows-[repeat(5,_100px)]
          lg:grid-cols-[repeat(6,_100px)] lg:grid-rows-[repeat(6,_100px)]
          md:grid-cols-[repeat(4,_100px)] md:grid-rows-[repeat(10,_100px)] 
          sm:grid-cols-[repeat(3,_100px)]
          ${expandedItem ? "gap-0 sm:grid-cols-[repeat(3,_100px)] sm:grid-rows-[repeat(6,_100px)] md:grid-cols-[repeat(4,_100px)] md:grid-rows-[repeat(7,_100px)] lg:grid-cols-[repeat(6,_100px)] lg:grid-rows-[repeat(6,_100px)] xl:grid-cols-[repeat(8,_100px)] xl:grid-rows-[repeat(5,_100px)] 2xl:grid-cols-[repeat(10,_100px)] 2xl:grid-rows-[repeat(5,_100px)]" : "sm:grid-rows-[repeat(9,_100px)]"}
          ${isShrinking ? "shrink" : ""}`}>
          
          {/* Bento Item 1 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item1" ? "p-[2rem] sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 xl:row-span-5 2xl:col-span-10 expanded border-dashed border-[2px] border-black flex items-center justify-center" : "sm:col-span-3 sm:row-span-2 md:col-span-4 md:row-span-2 xl:col-span-4 xl:row-span-3 2xl:col-span-5"}
            ${expandedItem && expandedItem !== "item1" ? "hidden" : ""} 
            ${expandedItem !== "item1" ? "moving-border" : ""}`}
            onClick={() => handleExpand("item1")}>

            {expandedItem === "item1" ? (
              <div className="expandedContent relative">

                <div className={`click__home absolute sm:bottom-10 md:bottom-4 left-1/2 transform -translate-x-1/2 sm: whitespace-normal xl:whitespace-nowrap text-gray-600 sm:text-[.8rem] md:text-[1rem] sm:text-justify lg:text-center w-full transition-opacity ${tipFade ? "hidden ease-[2s]" : "block"}`}>
                  Tip: Scroll down for more information, and you can always return home by clicking inside this Bento again.
                </div>


                <div className="scrollable__items sm:max-h-[640px] md:max-h-[700px] lg:max-h-[640px] xl:max-h-[550px] 2xl:max-h-[600px] w-full overflow-y-auto overflow-x-hidden scrollbar-hide">

                  <div className="scrollable__wrapper flex flex-col sm:gap-[5rem] md:gap-[3rem] lg:gap-[2rem] 2xl:gap-[3rem] py-[3rem] justify-center items-center mx-0 my-auto">

                    {/* First Scroll */}
                    <div className="first__scroll w-full grid
                    sm:grid-cols-1 xl:grid-cols-2 sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[1.5rem] xl:gap-[3rem] items-center">
                      <div className="first__title text-center">
                        <h2 className="sub sm:text-[1rem] md:text-[1.5rem]">Hello! My Name is</h2>
                        <h1 className="toyang whitespace-nowrap sm:text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] font-bold">Marc Ysrael J. Maulion</h1>
                      </div>
                      <img src={`${process.env.PUBLIC_URL}/Marc1.webp`} alt="" className="sm:w-[13rem] md:w-[15rem] xl:w-[18rem] mx-auto my-0 rounded-[1rem] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.9)]"/>
                    </div>

                    {/* Second Scroll */}
                    <div className={`second__scroll grid grid-cols-2 gap-[2rem] items-center justify-center transition-opacity duration-500 ${visibleSections.second ? "opacity-100" : "opacity-0"}`} data-section="second">
                      <div className="second__title text-center">
                        <h2 className="sub text-[1.5rem]">About Me</h2>
                        <h1 className="toyang text-[3rem] font-bold">Cybersecurity Enthusiast</h1>
                      </div>
                      <img src={`${process.env.PUBLIC_URL}/Marc2.webp`} alt="" className="w-[20rem] mx-auto my-0 rounded-[2rem] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.9)]"/>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full">
                <div className="item1__title absolute right-0 bottom-10 px-[1rem]">
                  <h1 className="text-bounce text-[2rem] text-white drop-shadow-lg font-hammersmith">
                    {"Marc Ysrael J. Maulion".split("").map((char, index) => (
                      <span key={index} className="bouncing-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </h1>
                  <p className="text-white">Computer Engineer 2023 - 2024</p>
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
          <div className={`bento__item cursor-pointer ${expandedItem === "item2" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 xl:row-span-5 2xl:col-span-10" : "sm:col-span-3 sm:row-span-1 md:col-span-4 md:row-span-1 lg:col-span-2 lg:row-span-2 xl:col-span-2 2xl:col-span-3"} 
            ${expandedItem && expandedItem !== "item2" ? "hidden" : ""}`}
            onClick={() => handleExpand("item2")}>

            {expandedItem === "item2" ? (
              <div className="expandedContent">Expanded content for Item 2</div>
            ) : (
              <div className="item2__title h-full flex justify-center items-center">
                <h1 className="text-center font-bold text-[2rem] p-[3rem] text-[#341539]">Check out my first Web Design Project!</h1>
              </div>

            )}
          </div>



          {/* Bento Item 3 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item3" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10" : "sm:col-span-2 sm:row-span-1 md:col-span-4 xl:col-span-2 xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item3" ? "hidden" : ""}`}
            onClick={() => handleExpand("item3")}>

            {expandedItem === "item3" ? (
              <div className="expandedContent">Expanded content for Item 3</div>
            ) : (
              "Item 3"
            )}
          </div>



          {/* Bento Item 4 */}
          <div className={`bento__item sm:col-span-1 sm:row-span-2 md:col-span-2 md:row-span-1 2xl:col-span-3 ${expandedItem && expandedItem !== "item4" ? "hidden" : ""}`}>
            Item 4
          </div>



          {/* Bento Item 5 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item5" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10" : "sm:col-span-2 sm:row-span-1 md:row-span-2 xl:row-span-1 2xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item5" ? "hidden" : ""}`}
            onClick={() => handleExpand("item5")}>

            {expandedItem === "item5" ? (
              <div className="expandedContent">Expanded content for Item 5</div>
            ) : (
              "Item 5"
            )}
          </div>



          {/* Bento Item 6 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item6" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10" : "sm:col-span-2 sm:row-span-1 md:col-span-2 md:row-span-2 lg:row-span-1 xl:col-span-4 2xl:col-span-2 2xl:row-span-2"} 
            ${expandedItem && expandedItem !== "item6" ? "hidden" : ""}`}
            onClick={() => handleExpand("item6")}>

            {expandedItem === "item6" ? (
              <div className="expandedContent">Expanded content for Item 6</div>
            ) : (
              "Item 6"
            )}
          </div>



          {/* Bento Item 7 */}
          <div className={`bento__item sm:col-span-1 sm:row-span-1 md:col-span-2 xl:col-span-2 xl:row-span-1 ${expandedItem && expandedItem !== "item7" ? "hidden" : ""}`}>
            Item 7
          </div>



          {/* Bento Item 8 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item8" ? "sm:col-span-3 sm:row-span-6 md:col-span-4 md:row-span-7 lg:col-span-6 lg:row-span-6 xl:col-span-8 2xl:col-span-10" : "sm:col-span-3 sm:row-span-1 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-1 xl:col-span-2 xl:row-span-2 2xl:col-span-3"} 
            ${expandedItem && expandedItem !== "item8" ? "hidden" : ""}`}
            onClick={() => handleExpand("item8")}>

            {expandedItem === "item8" ? (
              <div className="expandedContent">Expanded content for Item 8</div>
            ) : (
              <div className="item8__title h-full grid grid-cols-[2fr, 1fr] gap-[1rem] items-center p-[2rem]">
                <div className="flex">
                <h1 className="text-justify font-bold text-[1.5rem] text-[#341539]">Check out my first Web Design Project!</h1>
                </div>
              </div>
            )}
          </div>



          {/* Bento Item 9 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item9" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-red-600 rounded-full relative`}>
            <button onClick={handleCopyEmail} className="flex justify-center items-center w-full h-full">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-white" />
            </button>
            {/* Notification bubble */}
            {showNotification && (
              <div className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-green-500 sm:text-[.75rem] lg:text-[.8rem] xl:text-base text-white sm:px-[1rem] xl:px-[1.5rem] py-[1rem] rounded-[1rem] text-sm shadow-lg text-center max-w-[40rem] whitespace-nowrap">
                Email Address Copied
              </div>
            )}
          </div>



          {/* Bento Item 10 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-[#4267B2] rounded-full`}>
              <a href="https://www.facebook.com/marcjimenez.maulion" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faFacebook} size="3x" className="text-white" />
              </a>
          </div>



          {/* Bento Item 11 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-full h-full bg-[#0077b5] rounded-full`}>
              <a href="https://www.linkedin.com/in/marc-ysrael-maulion-914402279" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-white" />
              </a>
          </div>



          {/* Bento Item 12 */}
          <div className={`bento__item col-span-3 row-span-1  flex justify-center items-center bg-[#282c34] rounded-lg shadow-md p-4 ${expandedItem === null ? "" : "hidden"}`}>
            <div className="w-[60%] mx-auto my-0">
            <h3 className="text-[1.2rem] font-bold text-white text-justify ">Made with ReactJS & Tailwind CSS</h3>
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
