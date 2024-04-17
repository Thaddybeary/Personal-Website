import React, { useState, useEffect } from "react";
import profile_picture from "../images/profile_picture.jpg";

function BiographyToHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 350;
      setIsSticky(window.scrollY > stickyPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div
        className={
          isSticky
            ? "sticky top-0 left-0 w-full bg-white flex items-center gap-5 p-2 shadow-md z-50 transition-all duration-300 ease-in-out"
            : "flex items-center justify-center gap-3 w-3/4 bg-white shadow-2xl rounded-md transition-all duration-300 ease-in-out"
        }
      >
        <img
          className={
            isSticky ? "w-12 h-12 rounded-full" : "w-1/3 rounded-l-md"
          }
          src={profile_picture}
          alt="Profile"
        />
        {isSticky ? (
          <p className="text-sm">Thaddeus Chong - Full Stack Developer</p>
        ) : (
          <p className="text-lg p-3">
            Hi, I'm Thaddeus Chong. I'm an aspiring Full Stack Developer
            currently pursuing a Bachelor of Engineering (Computer Science) at
            Nanyang Technological University, Singapore. My journey so far has
            been a blend of academic rigor and practical adventures. I’m
            particularly interested in roles that challenge me to grow and make
            a tangible impact on the community or industry.
          </p>
        )}
        <div>
          
        </div>
      </div>
  );
}

export default BiographyToHeader;
