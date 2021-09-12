const Hero = (props: any) => {
  const name: string = props.name;
  const profession: string = props.profession;
  return(
    <div
      id="hero"
      className="bg-dark flex justify-center items-center">
      <div className="container">
        <div className="text-center">
          <h1 className="text-white uppercase text-7xl mb-4">
            {name}
          </h1>
          <h3 className="text-white uppercase text-3xl">
            {profession}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
