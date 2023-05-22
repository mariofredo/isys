import quote from "../icon/quote.png";
import cloudbotleft from "../icon/cloudbotleft.png";
import cloudtopright from "../icon/cloudtopright.png";
import { StarIcon } from "@heroicons/react/20/solid";
export default function CardWhatOurStudent({ data }) {
  return (
    <>
      <div className="bg-white w-72 lg:w-80 sm:w-80">
        <div className="relative">
          <div className="block">
            <div className="h-80 lg:h-96"></div>
          </div>
          <img
            src={cloudbotleft}
            className="absolute bottom-0 left-0"
            alt="cloudtopright"
          />
          <img
            src={cloudtopright}
            className="absolute top-0 right-0"
            alt="cloudtopright"
          />
          <div className="absolute top-8 left-4">
            <img src={quote} alt="quote" />
            <div
              className="text-[12px] lg:text-base mt-8"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {data.message}
            </div>
          </div>
          <div className="absolute bottom-8 right-4">
            <div className="flex flex-row justify-center items-center ">
              <div className="flex flex-col items-end">
                <div className="font-bold text-xs lg:text-[18px]">
                  {data.name}
                </div>
                <div className="font-normal text-[10px] lg:text-[14px] ">
                  {data.job}
                </div>
              </div>
              <div className="ml-4">
                <img
                  src={data.pp}
                  className="h-10 lg:h-16 w-10 lg:w-16"
                  alt="studentPP"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-20 lg:w-28 ml-5 lg:ml-10  -mt-1 lg:-mt-2">
              <StarIcon className="h-3 w-3 lg:h-5 lg:w-5 text-[#FFB700]" />
              <StarIcon className="h-3 w-3 lg:h-5 lg:w-5 text-[#FFB700]" />
              <StarIcon className="h-3 w-3 lg:h-5 lg:w-5 text-[#FFB700]" />
              <StarIcon className="h-3 w-3 lg:h-5 lg:w-5 text-[#FFB700]" />
              <StarIcon className="h-3 w-3 lg:h-5 lg:w-5 text-[#FFB700]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
