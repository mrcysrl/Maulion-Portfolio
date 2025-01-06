import React, { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faFacebook, faLinkedin, faEnvelope);

export default function App() {
  const [expandedItem, setExpandedItem] = useState(null);  // tracker
  const [isShrinking, setIsShrinking] = useState(false);   // shrink trigger
  const [showNotification, setShowNotification] = useState(false); // Notification state

  // Email Copy function
  const handleCopyEmail = () => {
    const email = "marcysraelmaulion@gmail.com"; // email addd
    navigator.clipboard.writeText(email) // copy to clipboard
      .then(() => {
        // Show notification
        setShowNotification(true);
        // Hide notification after 3 seconds
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      })
      .catch(err => console.error('Failed to copy email: ', err));
  };

  // Item expansion and transition handle function
  const handleExpand = (item) => {
    setIsShrinking(true); // shrink wrapper

    // Expansion delay complete animation
    setTimeout(() => {
      // Toggle expansion
      setExpandedItem(item === expandedItem ? null : item);
      setIsShrinking(false); // End shrink effect
    }, 500); // Duration of the shrink effect
  };

  

  return (
    <section className="bento bg-white h-screen flex justify-center items-center">
      <div className="container max-w-screen-7xl p-8 mx-auto my-0 flex justify-center items-center">
        {}
        <div className={`bento__wrapper text-black grid grid-cols-[repeat(10,_100px)] grid-rows-[repeat(5,_100px)] gap-[2rem] ${isShrinking ? "shrink" : ""}`}>



          {/* Bento Item 1 */}
          <div
            className={`bento__item cursor-pointer ${expandedItem === "item1" ? "col-span-10 row-span-5 expanded" : "col-span-5 row-span-3"}
              ${expandedItem && expandedItem !== "item1" ? "hidden" : ""} 
              ${expandedItem !== "item1" ? "moving-border" : ""}`}
            onClick={() => handleExpand("item1")}
          >
            {expandedItem === "item1" ? (
              <div className="expandedContent">Expanded content for Item 1</div>
            ) : (
              <div className="relative h-full">
                <div className="item__title absolute inset-x-0 bottom-0 text-[3rem] font-200 text-center pb-[1rem] text-white drop-shadow-lg font-hammersmith">
                  <h1 className="text-bounce">
                    {"Computer Engineer".split("").map((char, index) => (
                      <span key={index} className="bouncing-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="item__image h-full">
                  <img className="w-full h-full object-cover object-[50%_20%] rounded-[1rem]" src="./Marc.png" alt=""/>
                </div>
              </div>
            )}
          </div>




          {/* Bento Item 2 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item2" ? "col-span-10 row-span-5 expanded" : "col-span-3 row-span-2"} 
            ${expandedItem && expandedItem !== "item2" ? "hidden" : ""}`}
            onClick={() => handleExpand("item2")}>

            {expandedItem === "item2" ? (
              <div className="expandedContent">Expanded content for Item 2</div>
            ) : (
              "Item 2"
            )}
          </div>



          {/* Bento Item 3 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item3" ? "col-span-10 row-span-5 expanded" : "col-span-2 row-span-2"} 
            ${expandedItem && expandedItem !== "item3" ? "hidden" : ""}`}
            onClick={() => handleExpand("item3")}>

            {expandedItem === "item3" ? (
              <div className="expandedContent">Expanded content for Item 3</div>
            ) : (
              "Item 3"
            )}
          </div>



          {/* Bento Item 4 */}
          <div className={`bento__item col-span-3 row-span-1 flex items-center justify-center items-center bg-[#282c34] rounded-lg shadow-md p-2 gap-[1rem] ${
              expandedItem === null ? "" : "hidden"}`}>
            <h3 className="text-[1.5rem] font-bold text-white">Made with ReactJS</h3>
            <div className="w-16 h-16">
              <img src="./logo192.png" alt="" className="logo-spin" />
            </div>
          </div>




          {/* Bento Item 5 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item5" ? "col-span-10 row-span-5 expanded" : "col-span-2 row-span-2"} 
            ${expandedItem && expandedItem !== "item5" ? "hidden" : ""}`}
            onClick={() => handleExpand("item5")}>

            {expandedItem === "item5" ? (
              <div className="expandedContent">Expanded content for Item 5</div>
            ) : (
              "Item 5"
            )}
          </div>



          {/* Bento Item 6 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item6" ? "col-span-10 row-span-5 expanded" : "col-span-2 row-span-2"} 
            ${expandedItem && expandedItem !== "item6" ? "hidden" : ""}`}
            onClick={() => handleExpand("item6")}>

            {expandedItem === "item6" ? (
              <div className="expandedContent">Expanded content for Item 6</div>
            ) : (
              "Item 6"
            )}
          </div>



          {/* Bento Item 7 */}
          <div className={`bento__item col-span-2 row-span-1 ${expandedItem && expandedItem !== "item7" ? "hidden" : ""}`}>
            Item 7
          </div>



          {/* Bento Item 8 */}
          <div className={`bento__item cursor-pointer ${expandedItem === "item8" ? "col-span-10 row-span-5 expanded" : "col-span-3 row-span-2"} 
            ${expandedItem && expandedItem !== "item8" ? "hidden" : ""}`}
            onClick={() => handleExpand("item8")}>

            {expandedItem === "item8" ? (
              <div className="expandedContent">Expanded content for Item 8</div>
            ) : (
              "Item 8"
            )}
          </div>



          {/* Bento Item 9 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item9" ? "hidden" : ""} flex justify-center items-center w-24 h-24 bg-red-600 rounded-full relative`}>
            <button onClick={handleCopyEmail} className="flex justify-center items-center w-full h-full">
              <FontAwesomeIcon icon={faEnvelope} size="3x" className="text-white" />
            </button>
            {/* Notification bubble */}
            {showNotification && (
              <div className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-[2rem] py-[1rem] rounded-[1rem] text-sm shadow-lg text-center max-w-[40rem] whitespace-nowrap">
                Email Address Copied
              </div>
            )}
          </div>



          {/* Bento Item 10 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-24 h-24 bg-[#4267B2] rounded-full`}>
              <a href="https://www.facebook.com/marcjimenez.maulion" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faFacebook} size="3x" className="text-white" />
              </a>
          </div>




          {/* Bento Item 11 */}
          <div className={`bento__item ${expandedItem && expandedItem !== "item10" ? "hidden" : ""} flex justify-center items-center w-24 h-24 bg-[#0077b5] rounded-full`}>
              <a href="https://www.linkedin.com/in/marc-ysrael-maulion-914402279" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center w-full h-full">
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="text-white" />
              </a>
          </div>



          {/* Bento Item 12 */}
          <div className={`bento__item col-span-3 ${expandedItem && expandedItem !== "item12" ? "hidden" : ""}`}>
            Item 12
          </div>

          
        </div>
      </div>
    </section>
  );
}