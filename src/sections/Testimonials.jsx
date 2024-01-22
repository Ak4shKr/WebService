import React from "react";
import { clients } from "../exports";
import ClientGrid from "../components/ClientGrid";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full flex flex-col gap-5 h-fit p-4 lg:p-10"
    >
      <p className="text-center text-xl ">Testimonials</p>
      <h1 className="text-green-600 font-bold text-6xl text-center leading-[68px]">
        What Clients Says
      </h1>
      <p className="text-slate-950 text-2xl text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
        official <br /> Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex justify-center items-center flex-wrap w-full mt-5 gap-4">
        {clients.map((client) => (
          <div key={client.name} className="w-80">
            <ClientGrid {...client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
