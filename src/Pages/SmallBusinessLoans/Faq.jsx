const Faq = () => {
  return (
    <>
      <section className="p-14">
        <h2 className=" pb-6 text-6xl    ">
          Resources & Frequently Asked Questions
        </h2>
        <div className="collapse collapse-plus rounded-none cursor-pointer" style={{borderBottom:"1px solid black"}}>
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus  ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
