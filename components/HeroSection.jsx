const HeroSection = () => {
    return (
      <section className="grid grid-cols-1 lg:grid-cols-2 py-12 px-6 lg:px-24 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          <h1 className="text-4xl lg:text-7xl font-bold text-center">
            Welcome to{" "}
            <span className="bg-gradient-to-r bg-clip-text from-primary via-accent to-primarybtn text-transparent">
              Todo
            </span>
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl lg:max-w-lg">
            Not much to say really, you can create and share Todo lists. I'm way too lazy to continue this page and just want to work on other stuff. Click the button below to sign up, the other button doesn't do anything, as the site's pretty self-explanatory.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primarybtn text-white px-6 py-3 rounded-md lg:w-auto hover:-translate-y-1 hover:bg-primarybtn-hover transition duration-200">
              Get Started
            </button>
            <button className="bg-secondarybtn text-accent px-6 py-3 rounded-md lg:w-auto hover:-translate-y-1 hover:bg-primarybtn-hover transition duration-200">
              How It Works
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img src="/images/Checklist.jpg" alt="Hero Image" className="w-full border rounded-xl" />
        </div>
      </section>
    );
  };
  
  export default HeroSection;