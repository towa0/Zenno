import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import landingPageImage from "../assets/ZennoLanding.png";

const landingPage = () => {
  return (
    <section className="max-w-6xl min-h-screen mx-auto ">
      <Navbar />
      <div className="mt-[15vh]">
        <div className="sm:hidden w-full mb-8">
          <img
            src={landingPageImage}
            alt="ZennoLandingPage"
            className="landing-image w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-screen-xl flex ml-[4vw] items-center mb-16">
          <div className="text-center sm:text-left pr-20">
            <h1 className="text-3xl font-bold text-mainDark">
              Welkom bij Zen<span className="text-mainBlue">no.</span> - Jouw
              Premier Bestemming voor Software!
            </h1>
            <p className="text-md my-8 text-gray-500 sm:w-[25vw] ">
              Bij Zenno geloven we dat de juiste software jouw bedrijfsvoering
              kan transformeren. Verken ons uitgebreide assortiment aan
              softwareproducten, ontworpen om jouw productiviteit te verhogen,
              bedrijfsprocessen te stroomlijnen en je creativiteit te
              stimuleren.
            </p>
            <Button to="/log-in" label="Bekijk software" primary={true} />
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
