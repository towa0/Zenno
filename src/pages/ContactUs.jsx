import BackgroundCircles from "../components/BackgroundCircles";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form submitted");
    // todo
  };

  return (
    <section className="w-full flex items-center justify-center px-4 py-8 mt-[10vh]">
      <BackgroundCircles
        circles={[
          { top: "34vh", left: "10vw", size: 150, color: "bg-blue-400" },
          { top: "65vh", left: "-26vw", size: 150, color: "bg-indigo-400" },
          { top: "55vh", left: "17vw", size: 170, color: "bg-purple-400" },
        ]}
      />
      <form
        className="w-full max-w-lg p-8 rounded-lg shadow-lg border-2 bg-background/50 backdrop-blur-lg border-gray-300"
        onSubmit={handleSubmit}
      >
        <div className="flex pt-2 pb-5">
          <h1 className="text-3xl font-bold text-mainDark mx-auto">Contact</h1>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block font-medium text-mainDark text-sm mb-2"
              htmlFor="name"
            >
              Naam
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
              id="name"
              type="text"
              required
              placeholder="Uw naam"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block font-medium text-mainDark text-sm mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
              id="email"
              type="email"
              required
              placeholder="iemand@voorbeeld.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block font-medium text-mainDark text-sm mb-2"
              htmlFor="message"
            >
              Bericht
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-mainBlue focus:border-mainBlue"
              id="message"
              required
              placeholder="Uw bericht"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button
              type="submit"
              className="w-full border-2 rounded-lg duration-200 py-2 border-mainBlue bg-mainBlue text-white hover:bg-mainBlue/80"
            >
              Verzend
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
