import CardWhatOurStudent from "./CardWhatOurStudent";
import "./WhatOurStudent.css";
import stdntPict from "../icon/Ellipse78.png";
export default function WhatOurStudent() {
  const studentData = [
    {
      name: "Jennifer Williams",
      pp: stdntPict,
      message:
        "I enjoy working in he poster my\nwall editor because the site is\nuser friendly and makes\ndesigning simple.",
      job: "Corporate Founder",
    },
    {
      name: "Jennifer Williams",
      pp: stdntPict,
      message:
        "I enjoy working in he poster my\nwall editor because the site is\nuser friendly and makes\ndesigning simple.",
      job: "Corporate Founder",
    },
    {
      name: "Jennifer Williams",
      pp: stdntPict,
      message:
        "I enjoy working in he poster my\nwall editor because the site is\nuser friendly and makes\ndesigning simple.",
      job: "Corporate Founder",
    },
  ];

  return (
    <>
      <div className="pt-12" style={{ backgroundColor: "#F1F7F9" }}>
        <div className="mx-8 lg:mx-32">
          <div className="flex flex-row justify-between items-center ">
            <div className="text-4xl font-bold">What our students say</div>
            <div className=" rounded-full bg-orange w-40 lg:w-36 h-14 lg:h-10 flex justify-center">
              <button className="text-white">Discover More</button>
            </div>
          </div>
          <div className="mt-12  flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {studentData.map((el, i) => {
                return (
                  <>
                    <CardWhatOurStudent data={el} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row justify-center"
        style={{ backgroundColor: "#F1F7F9" }}
      >
        <div>
          <div className="relative top-[67px] lg:top-[134px]">
            <div className="rounded-3xl h-[134px] w-[338px] lg:h-[266px] lg:w-[916px] bg-[#06AED5]">
              <div className="text-2xl lg:text-4xl font-bold text-white text-center ">
                <div className="pt-4 lg:pt-8">It’s Time to Start Investing</div>
                <div>in Yourself in Learning</div>
              </div>
              <div className="flex flex-row justify-center mt-3 lg:mt-12">
                <button
                  className="text-white rounded-sm text-base px-4 lg:px-8 py-1 lg:py-2.5 font-bold"
                  style={{ backgroundColor: "#E64936" }}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
