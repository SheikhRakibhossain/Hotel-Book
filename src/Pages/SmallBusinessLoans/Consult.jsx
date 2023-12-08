import { Link } from "react-router-dom";
import { SlCallOut } from "react-icons/sl";
import { FaRegMoneyBillAlt } from "react-icons/fa";



const Consult = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-14">
        <div className="ps-16 space-y-4 ">
          <h2 className="text-6xl font-bold">Have Questions?</h2>
          <h3 className="text-4xl font-light">
            Speak with a ROK Business Financing Advisor today!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui
            tempore minus ut id voluptatibus porro tenetur. Rem tenetur ullam,
            maiores repellat, corporis explicabo soluta dolorum unde ea, aliquid
            vero?
          </p>
          <button className="btn btn-outline btn-accent"> <p><SlCallOut /></p><p>Give Us a Call:01637503636</p></button><br/>
          <Link to="/" className="text-accent">or... Get Started on Your Application</Link>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/business-meeting-office_1268-21517.jpg?w=1480&t=st=1702057504~exp=1702058104~hmac=881a5ccff391394ffcc1ab3ab294f56dde7477544ca85f41e35b1866b238e030"
            alt="consulting image"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 py-14">
      <div>
          <img
            src="https://img.freepik.com/free-photo/happy-coffee-shop-owner-holding-open-sign-while-reopening-after-coronavirus-pandemic_637285-6310.jpg?w=1380&t=st=1702058970~exp=1702059570~hmac=f2b37719d25a38bde7cc18333d372144b463036426c996ba24f2319551fb06ae"
            alt="consulting image"
          />
        </div>
        <div className="ps-16 space-y-4 ">
          <h2 className="text-6xl font-bold">Let{"'"}s consult</h2>
          <h3 className="text-4xl font-light">
          Simple 15-Second Business Loan Application
          </h3>
          <p>
          After completing this simple application, we{"'"}ll pair your with a dedicated Business Financing Advisor to choose the best financing options for your business!          </p>
          <button className="btn btn-outline btn-accent"> <p><FaRegMoneyBillAlt /></p><p>Give Us a Call:01637503636</p></button><br/>
          <Link to="/" className="text-accent">or... Get Started on Your Application</Link>
        </div>
        
      </div>
    </>
  );
};

export default Consult;
