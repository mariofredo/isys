import "./OurFeatures.css";
import OFOne from "../icon/OFOne.png";
import OFTwo from "../icon/OFTwo.png";
import OFThree from "../icon/OFThree.png";
import ellipsePP from "../icon/ellipsePp.png";
import { StarIcon } from "@heroicons/react/24/solid";
import { EyeIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
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
        <div className="text-center font-semibold text-4xl py-12">
          Our Features
        </div>
        <div className="flex flex-row justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {featuresData.map((el, i) => {
              return (
                <>
                  <div className="w-96  bg-white rounded-2xl p-4 pb-2">
                    <div className="relative">
                      <div className="block">
                        <div className="flex flex-row justify-center">
                          <img src={el.thumbnail} alt={el.title} />
                        </div>
                      </div>
                      <div className="absolute top-0 left-0">
                        <div className="ml-4 mt-3 bg-white rounded flex flex-row justify-evenly items-center w-24 h-8">
                          <StarIcon className="h-5 w-5 text-yellow-300" />
                          <div className="text-xs font-semibold">{`4.7`}</div>
                          <div className="text-xs ">{`(1k+)`}</div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold mt-2 ms-1">{el.title}</div>
                    <div className="mt-4 mx-1 flex flex-row justify-between items-center">
                      <div>
                        <div className="flex flex-row ">
                          <img
                            src={el.instructorPP}
                            className="mr-2"
                            alt="pp"
                          />
                          <div>{el.instructor}</div>
                        </div>
                      </div>
                      <div className="rounded-md text-white bg-black text-lg px-4 py-1">{`$ ${el.price}`}</div>
                    </div>
                    <div className="mt-6 mx-1 flex flex-row justify-between items-center">
                      <div className=" flex flex-row justify-between items-center">
                        <EyeIcon className="h-4 w-4 mr-3" />
                        <div>{el.view}</div>
                      </div>
                      <div className="flex flex-row justify-between items-center ">
                        <PlayCircleIcon className="h-4 w-4 mr-3" />
                        <div>{`${el.totalLecture} Lectures`}</div>
                      </div>
                    </div>
                  </div>
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
        className="flex flex-row justify-evenly"
        style={{ backgroundColor: "#27424D" }}
      >
        {countData.map((el, i) => {
          return (
            <div className="text-white my-14 flex flex-col justify-start">
              <div className="mb-6 text-6xl font-semibold">{el.count}+</div>
              <div className="text-2xl font-normal">{el.category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
