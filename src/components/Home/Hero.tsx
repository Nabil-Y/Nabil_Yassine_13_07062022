/**
 * Hero function
 * @returns the home hero component
 */
const Hero = () => {
  return (
    <div
      className=" relative h-[300px] bg-heroImg bg-cover bg-heroPosition bg-no-repeat 
                  home:h-[400px] home:bg-heroPositionBig"
    >
      <section
        className=" relative top-8 mx-auto w-[200px] bg-white p-8 text-left leading-5 
                    home:absolute home:top-[50px] home:right-[50px] home:m-8 home:w-[300px] home:leading-7"
      >
        <h2 className="sr-only">Promoted Content</h2>
        <p className="m-0 font-bold home:text-[1.5rem]">No fees.</p>
        <p className="m-0 font-bold home:text-[1.5rem]">No minimum deposit.</p>
        <p className="m-0 font-bold home:text-[1.5rem]">High interest rates.</p>
        <p className="mt-3 text-[0.9rem] home:mt-5 home:text-[1.2rem]">
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  );
};

export default Hero;
