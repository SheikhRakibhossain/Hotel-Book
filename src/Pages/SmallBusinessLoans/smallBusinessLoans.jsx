import { GiCheckMark } from "react-icons/gi";
import logoImage from "../../images/siteseal-positive-ssl.png";

const SmallBusinessLoans = () => {
  return (
    <>
      {/* 1st section */}
      <section>
        <div className="ps-16 pt-8">
          {" "}
          <h2 className="text-6xl">Small Business Loans</h2>
        </div>
        <div className=" grid grid-cols-6 gap-4 p-6">
          <div className="col-span-6 md:col-span-4">
            <div className="sm:grid-cols-2 grid md:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <p className="flex justify-center items-center gap-4 text-2xl">
                    <GiCheckMark /> <span>Same Day Funding...</span>
                  </p>
                  <p className="flex justify-center items-center gap-4 text-2xl">
                    <GiCheckMark /> <span>Same Day Funding...</span>
                  </p>
                  <p className="flex justify-center items-center gap-4 text-2xl ">
                    <GiCheckMark /> <span>Same Day Funding...</span>
                  </p>
                </div>
                {/* logo part */}
                <div className="flex justify-center items-center pt-11 ">
                  <img src={logoImage} alt="Logo image" className="w-[100px]" />
                  <img src={logoImage} alt="Logo image" className="w-[100px]" />
                  <img src={logoImage} alt="Logo image" className="w-[100px]" />
                </div>
              </div>

              <div>
                <img
                  src="https://img.freepik.com/free-photo/smiling-young-man-with-crossed-arms-outdoors_1140-255.jpg?size=626&ext=jpg&ga=GA1.1.2097783395.1699976822&semt=ais"
                  alt=""
                />
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
    </>
  );
};

export default SmallBusinessLoans;
