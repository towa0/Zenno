import Button from "../components/Button";
import landingPageImage from "../assets/ZennoLanding.png";
import BackgroundCircles from "../components/BackgroundCircles";

const landingPage = () => {
  return (
    <section className="max-w-6xl min-h-screen mx-auto">
      <BackgroundCircles
        circles={[
          { top: "34vh", left: "25vw", size: 150, color: "bg-blue-400" },
          { top: "65vh", left: "35vw", size: 150, color: "bg-indigo-400" },
          { top: "55vh", left: "20vw", size: 170, color: "bg-purple-400" },
        ]}
      />

      <div className="mt-[15vh]">
        <div className="sm:hidden w-full mb-8">
          <img
            src={landingPageImage}
            alt="ZennoLandingPage"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-screen-xl flex sm:ml-[4vw] items-center mb-16">
          <div className="text-center sm:text-left sm:pr-20">
            <h1 className="text-5xl font-bold text-mainDark">
              Welkom bij Zen<span className="text-mainBlue">no.</span>
            </h1>
            <p className="text-md my-8 text-gray-500 sm:w-[25vw]">
              Bij Zenno geloven we dat de juiste software jouw{" "}
              <strong>bedrijfsvoering kan transformeren.</strong> Ontdek ons
              uitgebreide assortiment softwareproducten, ontworpen om jouw{" "}
              <strong>productiviteit te verhogen</strong> en{" "}
              <strong>bedrijfsprocessen te stroomlijnen.</strong>
            </p>
            <Button to="/apps" label="Bekijk software" primary={true} />
          </div>
          <div className="hidden sm:flex">
            <img
              src={landingPageImage}
              alt="Aannemersbedrijf Header"
              className="landing-image w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default landingPage;
