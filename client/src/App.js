import React from "react"
import BiographyToHeader from "./components/biographyToHeader";
import particlesJS from 'particles.js';
import odysea from "./images/Odysea.sg.png";
import swe_project from "./images/SC2006 Demo Video.mp4";
import particlesConfig from "./config/particlesConfig";

function App() {
  React.useEffect(() => {
    particlesJS("particles-js", particlesConfig);
  }, []);

  return (
    <div id="particles-js" className=" flex flex-col justify-center items-center bg-black">
      <header className=" flex justify-center items-center w-full h-screen">
        <BiographyToHeader />
      </header>
      <body className=" flex flex-col w-full gap-20">
        <section className=" flex flex-col gap-10 justify-center items-center w-full">
          <h3 className=" text-white text-4xl">Projects</h3>
          <div className=" flex w-3/4 justify-evenly items-center gap-10">
            <div
              className=" flex flex-col w-1/2 bg-white p-5 rounded-md gap-3 cursor-pointer"
              onClick={() => window.open("https://odysea.sg", "_blank")}
            >
              <img src={odysea} alt="odysea" />
              <p>
                Built using Next.js with codebase and algorithm written in
                TypeScript.
                <br />
                <br />
                Optimized website leveraging Tailwind CSS for seamless user
                experience on both mobile and larger screens.
                <br />
                <br />
                Leveraged Firebase for efficient, real-time data analysis and
                storage, ensuring smooth data flow and user experience.
                <br />
                <br />
                Deployed and push website hosted on Vercel to production and
                linked to custom domain, odysea.sg.
              </p>
            </div>
            <div className=" flex w-1/2 bg-white p-5 rounded-md gap-3">
              <video autoPlay loop muted className=" w-1/2">
                <source src={swe_project} type="video/mp4" />
              </video>
              <p>
                Developed a mobile application using React Native to offer users
                an intuitive platform for shopping mall navigation.
                <br />
                <br />
                Integrated Google Maps to pinpoint shop locations, enhancing
                user navigation experience within malls. <br />
                <br />
                Implemented a robust authentication and automation system
                leveraging Firebase, ensuring secure user sign-in.
                <br />
                <br />
                Managed real-time data storage and retrieval using Firebase's
                Firestore, enabling dynamic updates to shop listings and user
                preferences.
              </p>
            </div>
          </div>
        </section>
        <section className=" flex flex-col justify-center items-center w-full">
          <h3 className=" text-white text-4xl">Experience</h3>
          <div>

          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
