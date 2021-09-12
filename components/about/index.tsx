const About = () => {
  return(
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="hidden w-1/2 md:block px-4">
            <img 
              src="img/me.png"
              className="rounded-xl mx-8"
              width="400"
            />
          </div>
          <div className="px-4 md:w-1/2">
            <div className="main-title two">
            <h1 className="font-bold text-main">About Me</h1>
              <p>
                I started actively coding and learning programming languages ​​in 2017. In the same years when I was in college, I got several projects for VB, Website until I graduated in December 2018. When graduated.I decided to work in this field.
              </p>
              <p className="pt-4">
                I started working at Olsera as a frontend in August 2019. I handle the module (project). The module is an online booking feature. Feature in that module is accessing without login, access locations use google maps API, pick a time, and payments use credit card, bank transfer & pay later. Where the payment gateway using Xendit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
