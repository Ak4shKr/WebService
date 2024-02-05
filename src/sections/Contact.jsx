import React from "react";
import { call, fb, insta, map, sms, twitter, yt } from "../assets/icons";
// import { cube } from "../assets/images/cube.png";
import cube from "../assets/images/cube.png";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center"
      >
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 gap-z-20">
          <div className="flex flex-col justify-center items-start gap-4 w-full">
            <h1 className="text-green-600 font-bold text-[35px] ">
              Contact Info
            </h1>
            <div
              id="phone"
              className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="bg-green-400 p-3 rounded-full ">
                <img src={call} alt="call" width={22} height={22} />
              </span>
              +91 7667008758
            </div>
            <div
              id="mail"
              className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="bg-green-400 p-3 rounded-full ">
                <img src={sms} alt="call" width={22} height={22} />
              </span>
              akashsahabanaul@gmail.com
            </div>
            <div
              id="address"
              className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600"
            >
              <span className="bg-green-400 p-3 rounded-full ">
                <img src={map} alt="call" width={22} height={22} />
              </span>
              sec-10, Faridabad, Haryana
            </div>
            <div
              id="logos"
              className="flex justify-center items-center gap-4 mt-10"
            >
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 ">
                <img src={fb} alt="facebook" width={25} height={25} />
              </span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 ">
                <img src={insta} alt="insta" width={25} height={25} />
              </span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 ">
                <img src={yt} alt="youtube" width={25} height={25} />
              </span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600 ">
                <img src={twitter} alt="twitter" width={25} height={25} />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-4 py-4  w-full border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
            />
            <input
              type="email"
              placeholder="Enter Your email"
              className="px-4 py-4 w-full  border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
            />
            <textarea
              className="px-4 py-4 w-full  border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600"
              name=""
              id=""
              rows="5"
            ></textarea>
            <button className="bg-green-700 text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* <img
        src={cube}
        alt=""
        className="w-full h-72 absolute top-[3550px] hidden xl:block"
      /> */}
    </>
  );
};

export default Contact;
