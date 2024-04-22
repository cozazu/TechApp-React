function About(): React.ReactElement {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
              About Us T-INSHOP
            </h2>
            <p className="mt-2 text-center text-lg text-black">
              We are a leading technology company with over 10 years of experience in the industry.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <p className="text-center text-lg text-black">
              Our application is a technology e-commerce platform that offers a wide variety of products. We have worked diligently to provide a seamless and user-friendly experience.
            </p>
            <p className="text-center text-lg text-black">
              Users can create an account to track their orders and save their favorite products. Our goal is to make technology shopping accessible and straightforward for everyone.
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default About
