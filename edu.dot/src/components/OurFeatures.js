import "./OurFeatures.css";
import OFOne from "../icon/OFOne.png";
import OFTwo from "../icon/OFTwo.png";
import OFThree from "../icon/OFThree.png";
import ellipsePP from "../icon/ellipsePp.png";
import CardOurFeatures from "./CardOurFeatures";

export default function OurFeatures() {
  const featuresData = [
    {
      title: "UI UX Design",
      price: 59,
      instructorPP: ellipsePP,
      instructor: "Mitchal John",
      view: "29.500",
      totalLecture: 36,
      thumbnail: OFOne,
    },
    {
      title: "Digital Marketing",
      price: 79,
      instructorPP: ellipsePP,
      instructor: "Mitchal John",
      view: "29.500",
      totalLecture: 36,
      thumbnail: OFTwo,
    },
    {
      title: "Visual Design",
      price: 99,
      instructorPP: ellipsePP,
      instructor: "Mitchal John",
      view: "29.500",
      totalLecture: 36,
      thumbnail: OFThree,
    },
  ];
  const countData = [
    {
      count: 1400,
      category: "Students",
    },
    {
      count: 200,
      category: "Courses",
    },
    {
      count: 150,
      category: "Instructor",
    },
  ];
  return (
    <div>
      <div style={{ backgroundColor: "#F1F7F9" }}>
        <div className="text-center font-bold text-4xl py-12">Our Features</div>
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {featuresData.map((el, i) => {
              return (
                <>
                  <CardOurFeatures data={el} />
                </>
              );
            })}
          </div>
        </div>
        <div className=" mt-12 pb-24 flex flex-row justify-center">
          <button className="rounded-full bg-orange text-white py-2 px-4">
            View All
          </button>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row justify-evenly"
        style={{ backgroundColor: "#27424D" }}
      >
        {countData.map((el, i) => {
          return (
            <div className="text-white my-6 lg:my-14 flex flex-col justify-center lg:justify-start items-center lg:items-start">
              <div className="mb-6 text-6xl font-bold">{el.count}+</div>
              <div className="text-2xl font-normal">{el.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
