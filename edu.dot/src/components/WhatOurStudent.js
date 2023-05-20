import "./WhatOurStudent.css";
export default function WhatOurStudent() {
  return (
    <div style={{ backgroundColor: "#F1F7F9" }}>
      <div className="mx-32">
        <div className="flex flex-row justify-between items-center">
          <div>What our students say</div>
          <div className=" rounded-full bg-orange w-36 h-10 flex justify-center">
            <button className="text-white">Discover More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
