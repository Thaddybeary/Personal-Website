import React, { useState, useEffect } from "react";
import LogInModal from "./logInModal";
import UpdateProfilePictureModal from "./updateProfilePictureModal";
import useBiographyData from "../hooks/biographyData";
import { useAuth } from "../contexts/authContext";
import profile_picture from "../images/profile_picture.jpg";

function BiographyToHeader() {
  const [isSticky, setIsSticky] = useState(false);

  const { isAuthenticated } = useAuth();

  const { data, updateBiography, updateProfilePicture } = useBiographyData();

  const [openLogInModal, setOpenLogInModal] = React.useState(false);
  const handleOpenLogInModal = () => setOpenLogInModal(true);
  const handleCloseLogInModal = () => setOpenLogInModal(false);

  const [openEditBioModal, setOpenEditBioModal] = React.useState(false);
  const handleOpenEditBioModal = () => setOpenEditBioModal(true);
  const handleCloseEditBioModal = () => setOpenEditBioModal(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 350;
      setIsSticky(window.scrollY > stickyPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        isSticky
          ? "fixed top-0 left-0 w-full text-white text-sm flex items-center gap-10 py-6 px-12 z-50 transition-all duration-300 ease-in-out"
          : "flex items-center justify-center gap-3 w-3/4 text-white text-4xl shadow-2xl rounded-md transition-all duration-300 ease-in-out"
      }
    >
      <img
        className={[
          isSticky ? "w-12 h-12 rounded-full" : "w-1/3 rounded-md",
          isAuthenticated && "cursor-pointer",
        ]
          .filter(Boolean)
          .join(" ")}
        src={profile_picture}
        alt="Profile"
        onClick={isAuthenticated ? handleOpenEditBioModal : undefined}
      />
      <UpdateProfilePictureModal open={openEditBioModal} handleClose={handleCloseEditBioModal} updateProfilePicture={updateProfilePicture} />
      {isSticky ? (
        <p>Thaddeus Chong - Aspiring Full Stack Developer</p>
      ) : (
        <p className="p-3">
          Hi! I'm Thaddeus Chong, an aspiring Full Stack Developer currently
          pursuing a Computer Science at Nanyang Technological University,
          Singapore.
          <br />
          <br />
          My journey so far has been a blend of academic rigor and practical
          adventures.
        </p>
      )}
      {isSticky && (
        <div className=" flex ml-auto">
          {/* <div>github/linkedin links</div> */}
          <button onClick={handleOpenLogInModal}>Log In</button>
          <LogInModal
            open={openLogInModal}
            handleClose={handleCloseLogInModal}
          />
        </div>
      )}
    </header>
  );
}

export default BiographyToHeader;
