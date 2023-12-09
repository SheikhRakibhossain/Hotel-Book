import { GiCheckMark } from "react-icons/gi";
import logoImage from "../../images/siteseal-positive-ssl.png";
import Image1 from "../../images/1.png";
import Image2 from "../../images/2.png";
import Image3 from "../../images/3.png";
import Image4 from "../../images/4.png";
import BusinessReview from "./BusinessReview";
import Qualify from "./Qualify";
import Consult from "./Consult";
import Faq from "./Faq";

const SmallBusinessLoans = () => {
  return (
    <>
      {/* 1st section */}
      <section>
        <div className=" grid grid-cols-6 gap-4 p-6">
          <div className="col-span-6 md:col-span-4">
            <div className="pt-16">
              <div className="ps-16 pt-8 space-y-4">
                {" "}
                <h2 className="text-6xl">Small Business Loans</h2>
                <h2 className="text-4xl">Small Business Loans</h2>
              </div>
              <div className="sm:grid-cols-2 grid md:grid-cols-2">
                <div>
                  <div className="space-y-4 pt-6">
                    <p className="flex font-light justify-center items-center gap-4 text-2xl">
                      <GiCheckMark /> <span>Same Day Funding...</span>
                    </p>
                    <p className="flex font-light justify-center items-center gap-4 text-2xl">
                      <GiCheckMark /> <span>Same Day Funding...</span>
                    </p>
                    <p className="flex font-light justify-center items-center gap-4 text-2xl ">
                      <GiCheckMark /> <span>Same Day Funding...</span>
                    </p>
                  </div>
                  {/* logo part */}
                  <div className="flex justify-center items-center pt-11 ">
                    <img
                      src={logoImage}
                      alt="Logo image"
                      className="w-[100px]"
                    />
                    <img
                      src={logoImage}
                      alt="Logo image"
                      className="w-[100px]"
                    />
                    <img
                      src={logoImage}
                      alt="Logo image"
                      className="w-[100px]"
                    />
                  </div>
                </div>

                <div>
                  <img
                    src="https://img.freepik.com/free-photo/closeup-portrait-happy-businessman-shows-thumbs-up-isolated-white_186202-3236.jpg?w=826&t=st=1702033191~exp=1702033791~hmac=5e576d1c2bd571d7920e42641d7d5a43a4d24116fd4bff79a97037320b1d81ab"
                    alt="image extra"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* form section with 1st section */}
          <div className="col-span-6 md:col-span-2">
            <div className="flex-row justify-center items-center  ">
              <p className="text-xl font-semibold pb-5 text-center">
                Get Started Today & Speak With An Advisor
              </p>
              <div className="border border-zinc-700 p-4">
                {/* form input here */}
                <form>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="First Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Business Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="tel"
                        id="name"
                        name="name"
                        placeholder="Business Phone *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <input
                        type="tel"
                        id="name"
                        name="name"
                        placeholder="Mobile Phone *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black"
                        required
                      />
                    </div>

                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <select
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black block"
                        required
                      >
                        <option selected>Industry *</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <select
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black block"
                        required
                      >
                        <option selected>Your Credit Score</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <select
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last Name *"
                        className="border border-gray-300 shadow p-3 w-full rounded-full hover:border-black block"
                        required
                      >
                        <option selected>Time In Business</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block mb-2 font-bold text-gray-600"></label>
                      <select
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Last Name *"
                        className="border border-gray-300 shadow p-3 px-6 w-full rounded-full hover:border-black block placeholder:text-gray-600"
                        required
                      >
                        <option selected>Annul Sales</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="pb-10">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="I agree"
                    />
                    <label>
                      {" "}
                      By checking this checkbox I agree to the terms of use,
                      privacy policy as well as receiving SMS, email and phone
                      communication.
                    </label>
                  </div>
                  {/* recaptcha for robot check--- form google account you have to create a captcha account and from there just put here client site key */}
                  <input
                    type="submit"
                    value="Apply Now"
                    className="bg-red-600 px-8 py-3 rounded-full cursor-pointer text-red-100 shadow:bg-red-100 hover:bg-red-500 transition duration-300"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="grid sm:grid-cols md:grid-cols-4  gap-2">
        <div className="card bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={Image1} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={Image4} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={Image2} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={Image3} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </section>
      {/* review section */}
      <section className="grid grid-cols-8">
        <div className="col-span-2"></div>
        <div className="col-span-6">
          <BusinessReview />
        </div>
      </section>
      {/* Qualify section */}
      <Qualify />
      <Consult />
      <Faq/>
    </>
  );
};

export default SmallBusinessLoans;
