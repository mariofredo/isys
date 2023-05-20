import "./AccessToEverything.css";
import openBook from "../icon/openBook.png";
import { CheckIcon } from "@heroicons/react/24/outline";
export default function AccessToEverything() {
  const advantageData = [
    "World-Class",
    "Flexible",
    "Affordable",
    "Job-relevant",
  ];
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 ">
        <div className=" flex flex-col justify-center items-center">
          <div className="w-96">
            <div
              className="font-semibold text-4xl mb-4"
              style={{ whiteSpace: "pre-wrap" }}
            >{`Access to Everything\nFor Everyone`}</div>{" "}
            <div className="text-base font-normal">
              Online learning program designed to prepare you for a career.
              Courses include recorded video lectures, auto graded
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-8">
              {advantageData.map((el, i) => {
                return (
                  <>
                    <div className="flex flex-row  items-center">
                      <div
                        className=" rounded-full p-1"
                        style={{ backgroundColor: "#06AED5" }}
                      >
                        <CheckIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="ml-2 font-semibold">{el}</div>
                    </div>
                  </>
                );
              })}
            </div>
            <div
              className="mt-10 rounded-full w-36 h-10 flex justify-center"
              style={{ backgroundColor: "#06AED5" }}
            >
              <button className="text-white">Get Started</button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={openBook} className="" alt="openBook" />
        </div>
      </div>
    </div>
  );
}
