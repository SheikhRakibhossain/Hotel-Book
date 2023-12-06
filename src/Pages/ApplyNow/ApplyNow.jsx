const ApplyNow = () => {
  return (
    <>
      <div className="flex-row justify-center items-center p-20  ">
        <div className="border-2 p-10">
          <div className="py-6">
            <h1 className="text-6xl font-semibold">Get Started</h1>
            <p className="text-xl font-semibold py-5">
              Complete the application below with some basic information to see
              which financing options you qualify for and to be paired with a
              Business Financing Advisor!
            </p>
          </div>

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
            <div className="pb-10"><input type="checkbox" id="terms" name="terms" value="I agree"/>
            <label> By checking this checkbox I agree to the terms of use, privacy policy as well as receiving SMS, email and phone communication.</label>

            </div>
            <input type="submit" value="Apply Now" className="bg-red-600 px-8 py-3 rounded-full cursor-pointer text-red-100 shadow:bg-red-100 hover:bg-red-500 transition duration-300" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyNow;
