import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <section className="max-w-6xl min-h-screen mx-auto">
      <div className="flex justify-center items-center h-full">
        {/* FIX LATER */}
        <div className="mt-[20vh]">
          <h1 className="text-[100px] text-mainBlue font-bold">Oops!</h1>
          <p className="text-mainDark pb-[10vh]">
            Deze pagina heeft pootjes gekregen
          </p>
          <Button to={"/"} label={"Ga terug"} primary={true} />
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
