import React from "react";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { BenefitCard } from "../components/BenefitCard";
import { comp } from "../Data/Components";
import img_comp from "../resource/compare_list.png";
import { BusinessBook } from "../components/BusinessBook";

function Product() {

  const services = [
    { title: 'Ocean Transport Services', description: 'Efficient sea freight solutions across all major ports.' },
    { title: 'Project Cargo', description: 'Handling large and complex shipments with precision and care.' },
    { title: 'Air Freight Services', description: 'Quick and reliable air transport for urgent shipments.' },
    { title: 'Land Shipping Services', description: 'Safe and timely delivery of goods by road.' },
  ];
  const testimonials = [
    { name: 'Kathreen Smith', feedback: 'Excellent service and timely delivery!' },
    { name: 'Steve Martin', feedback: 'Professional team and reliable logistics solutions.' },
  ];
  return (
   <div className="w-full overflow-x-hidden">
      {/* first page */}
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-blue-300 to-blue-700 ">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold absolute top-20 md:top-40 lg:top-32 font-serif" style={{ fontFamily: 'Anybody' }}>
        Experience the power of future...
      </h1>
      
      <div
        className="uppercase font-extrabold text-transparent text-6xl md:text-9xl lg:text-[12rem] tracking-widest bg-clip-text bg-gradient-to-r from-[#56e422c4] via-[#56e422c4] to-[#56e422c4] text_properties"
        style={{
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeWidth: '2px',
          WebkitTextStrokeColor: 'green',
        }}
      >
        ENERGY
      </div>
    </div>




    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Company Overview</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Delivering Excellence in Transportation and Logistics
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We provide comprehensive logistics solutions for a variety of industries. Our commitment to reliability and customer satisfaction ensures that your cargo is in good hands.
        </p>
        <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded">Learn More</button>
      </div>
    </div>









    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Safe & Reliable Cargo Solutions</h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <dt>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>




    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What Our Customer Say</h2>
        </div>
        <div className="mt-10 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-lg">
              <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
              <p className="mt-4 text-gray-500">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


 <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">What Our Customer Say</h2>
        </div>
        <div className="mt-10 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-lg">
              <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
              <p className="mt-4 text-gray-500">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


      {/* second component */}

      <div className="w-full h-screen flex flex-col justify-center items-center relative z-10">
      <img
        src={wave}
        className="w-full h-full absolute blur-[1px] top-0 -z-10 object-cover"
        loading="lazy"
        alt="Background Wave"
      />
      <div className="flex flex-col justify-center items-center rounded-lg h-auto p-8 w-11/12 max-w-4xl bg-white bg-opacity-50 backdrop-transparent-md gap-y-5">
        <div className="text-2xl md:text-4xl font-bold text-center">
          PRODUCT
        </div>
        <div className="text-center max-w-full md:max-w-2xl text-base md:text-2xl">
          We at KGV, are developing a product that is customer oriented and
          manufactured with a vision of solving the problem of high
          transportation cost by converting currently available conventional
          two-wheeler into a plug-in hybrid EV. We want to expose our product
          to the international market and the ASEAN summit is the perfect
          platform to showcase our product to the world.
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <Book />
          <Button2 />
        </div>
      </div>
    </div>
      {/* <div className="w-full h-screen flex flex-col    justify-center relative items-center   z-10 ">
        <img
          src={wave}
          className="w-full absolute h-full blur-[1px] top-0 -z-10"
          loading="lazy"
        />
        <div className="flex flex-col  justify-center rounded-lg h-[70%]  p-8   w-[80%] min-w-[300px] items-center  gap-y-5    ">
          <div className="text-4xl font-bold text-center    ">PRODUCT </div>
          <div className="text-center max-w-[50%] text-2xl ">
            We at KGV, are developing a product that is customer oriented and
            manufactured with a vision of solving the problem of high
            transportation cost by converting currently available conventional
            two-wheeler into a plug in hybrid EV. We want to expose our product
            to the international market and the ASEAN summit is the perfect
            platform to showcase our product to the world
          </div>
          <div className="flex  justify-center items-center gap-2">
            <Book />
            
            <Button2 />
          </div>
        </div>
      </div> */}
        
         {/* third component */}
      <div className="w-full h-screen bg-[#55ff17db] relative z-10 p-5  ">
        <img
          src={goldenwave}
          className="w-full h-full  absolute scale-110 -z-10"
          loading="lazy"
        />
        <div className="font-extrabold text-5xl mb-10 text-black text-center ">
          Components
        </div>
        <div className="grid grid-rows-2 h-[80%] pb-5    grid-flow-col gap-10  mx-auto max-w-[1204px] w-11/12       ">
          {comp.map((benefits, index) => {
            return <BenefitCard key={index} passed={benefits} />;
          })}
        </div>
      </div>
      
      {/* fourth components */}
    

      <div className="w-11/12 mx-auto max-w-[1204px] border-2 border-black  flex flex-col justify-center items-center gap-8 pt-7 mt-7 mb-7 pb-7 rounded-lg  ">
        <div className="uppercase font-bold text-3xl ">
          {" "}
          Comparison of motorcyles{" "}
        </div>
        <div>
          <img src={img_comp} loading="lazy" />
        </div>
      </div>

      {/* fifth component  */}
      <div className="w-full h-screen bg-black relative z-10  pt-3 flex justify-center items-center ">
        <img
          src={goldenwave}
          className="w-full blur-[4px] h-full scale-110   absolute -z-10"
          loading="lazy"
        />
        <div className="w-11/12 flex flex-col items-center  max-w-[1204px] mx-auto pb-8  text-white  bg-white bg-opacity-25  rounded-lg   ">
          <div className="uppercase text-3xl font-bold mt-8">working</div>
          <div className="text-xl  w-[80%] pt-6 ">
            After the successful installation of the KGV Plug-in hybrid Electric
            kit. The rider is ready to go. The rider will simply input the key
            into the keyhole designated for the electric mode and can simply
            apply the throttle without engaging any gears.For switching back to
            the petrol mode, the rider just simply needs to remove the key from
            KGV-designed electric keyhole and insert into the keyhole provided
            by the respective OEM ,folloing which the rider can run the
            motorcyle in petrol mode The working mechanism of electric vehicles
            involves a driver’s input through the throttle, which is controlled
            by the controller for determining the need of power used by motors.
            The **Lithium iron phosphate (LFP) battery gives the power in form
            of electrical energy to the wheel hub motor that converts the
            electrical energy into mechanical power, for the driver to control
            the vehicle's speed and direction by the controller. Furthermore,
            the DC/DC converter regulates the voltage level for the distribution
            of electricity to the lighting system. This integrated system will
            allow the electric vehicles to move forward or in reverse direction,
            responding to the driver inputs.Distribution of weight was taken
            care by giving battery on back side and fixing the hub motor in
            front wheel to balance the weight and ensure a smooth drive.
          </div>
        </div>
      </div>

      <BusinessBook />
    </div>
  )
}

export default Product
