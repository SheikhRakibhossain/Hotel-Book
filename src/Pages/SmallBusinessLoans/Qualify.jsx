import { MdOutlineSpeed } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Qualify = () => {
  return (
    <>
      <div
        className="hero min-h-screen z-10"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url(https://img.freepik.com/free-photo/medium-shot-woman-cleaning-indoors_23-2150454551.jpg?w=1380&t=st=1702046831~exp=1702047431~hmac=4c143843533e5108ff99be7f76d012881fc369e60e0547838627dbb6bf210ebc)",
        }}
      >
        <div className="hero-overlay bg-opacity-30 z-10 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xxl px-10">
            <h1 className="mb-5 text-5xl font-bold">
              What Do You Need To Qualify?
            </h1>
            <div className="divider divider-warning "></div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h2 className="text-3xl font-light py-3">
                  Lorem ipsum dolor sit amet .
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                consectetur asperiores ipsum quo cumque praesentium voluptatibus
                autem perspiciatis, rem at harum modi soluta pariatur quam
                corrupti dolore beatae ducimus eligendi?
              </div>

              <div>
                <h2 className="text-3xl font-light py-3">
                  Lorem ipsum dolor sit amet Rakib hossain who know.
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                consectetur asperiores ipsum quo cumque praesentium voluptatibus
                autem perspiciatis, rem at harum modi soluta pariatur quam
                corrupti dolore beatae ducimus eligendi?
              </div>

              <div>
                <h2 className="text-3xl font-light py-3">
                  Lorem ipsum dolor sit amet .
                </h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                consectetur asperiores ipsum quo cumque praesentium voluptatibus
                autem perspiciatis, rem at harum modi soluta pariatur quam
                corrupti dolore beatae ducimus eligendi?
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* over section */}
      <div className="-mt-20 bg-white sm:w-[90%] md:w-[80%] p-10  mx-auto z-50 shadow-md">
        <div className="md:flex md:justify-center md:items-center gap-4 z-100 ">
          <div className="flex justify-center items-center gap-4">
            <MdOutlineSpeed className="text-6xl" />
            <p className="text-xl font-bold text-yellow-500">Fintech Speed</p>
          </div>
          <div>
            <p>
              Easy 15-second application to get options in just minutes and
              funding in hours!
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <FaRegArrowAltCircleRight className="text-2xl sm:hidden md:visible" />
            <button className="btn btn-accent">Join Now</button>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <h3 className="pt-5">
          The question of How do small business loans work is the natural
          question when deciding on growth possibilities or starting a small
          business. Small business loans allow existing or startup companies to
          borrow money from various lenders. Various loan types exist to help
          entrepreneurs meet different goals. The way each loan works depends on
          the type of loan. Maybe you have come up with that product that has
          the market beat. Or, maybe you need a piece of equipment that would
          tip your business growth over the top. Or, maybe outstanding invoices
          have you in need of funds for operating costs. Whatever it may be, it
          may be time for a loan.
        </h3>
      </div>
    </>
  );
};

export default Qualify;
