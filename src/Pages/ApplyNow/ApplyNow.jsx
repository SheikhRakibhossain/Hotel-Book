const ApplyNow = () => {
  return (
    <>
      <div className="flex-row justify-center items-center p-20  ">
        <div className="border-2 p-10">
          <div>
            <h1 className="text-6xl font-semibold">Get Started</h1>
            <p className="text-xl font-semibold">
              Complete the application below with some basic information to see
              which financing options you qualify for and to be paired with a
              Business Financing Advisor!
            </p>
          </div>

        </div>
          {/* form input here */}
        <form>
       <div className="grid md:grid-cols-2">
       <div className="mb-5">
           <label className="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded hover:border-black"/>
         </div>

         <div className="mb-5">
           <label className="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded hover:border-black"/>
         </div>
       </div>
        </form>

        </div>
     
    </>
  );
};

export default ApplyNow;
