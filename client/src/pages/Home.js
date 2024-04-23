import BiographyToHeader from "../components/biographyToHeader";
import ParticlesBackground from "../components/particlesBackground";
import TimelineComponent from "../components/timelineComponent";
import odysea from "../images/Odysea.sg.png";
import swe_project from "../images/SC2006 Demo Video.mp4";

function Home() {
  return (
    <div
      id="particles-js"
      className=" flex flex-col justify-center items-center"
    >
      <ParticlesBackground />
      <header className=" flex justify-center items-center w-full h-[75vh]">
        <BiographyToHeader />
      </header>
      <body className=" flex flex-col w-full gap-20">
        <section className=" flex flex-col gap-10 justify-center items-center w-full">
          <h3 className=" text-white text-4xl">Projects</h3>
          <div className=" flex w-3/4 justify-evenly items-center gap-10">
            <div
              className=" flex flex-col w-1/2 text-white p-5 rounded-md gap-3 cursor-pointer shadow-md"
              onClick={() => window.open("https://odysea.sg", "_blank")}
            >
              <img src={odysea} alt="odysea" />
              <p>
                Built using Next.js with codebase and algorithm written in
                TypeScript.
              </p>
            </div>
            <div className=" flex w-1/2 text-white p-5 rounded-md gap-3 shadow-md">
              <video autoPlay loop muted className=" w-1/2">
                <source src={swe_project} type="video/mp4" />
              </video>
              <p>
                Developed a mobile application using React Native to offer users
                an intuitive platform for shopping mall navigation.
              </p>
            </div>
          </div>
        </section>
        <section className=" flex flex-col justify-center items-center w-full gap-5">
          <h3 className=" text-white text-4xl">Experience</h3>
          <TimelineComponent />
        </section>
      </body>
    </div>
  );
}

export default Home;
