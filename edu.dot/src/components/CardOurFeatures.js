import { StarIcon } from "@heroicons/react/24/solid";
import { EyeIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
export default function CardOurFeatures({ data }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-4/5 lg:w-80  bg-white rounded-2xl p-4 pb-2">
          <div className="relative">
            <div className="block">
              <div className="flex flex-row justify-center">
                <img src={data.thumbnail} alt={data.title} />
              </div>
            </div>
            <div className="absolute top-0 left-0">
              <div className="ml-4 mt-3 bg-white rounded flex flex-row justify-evenly items-center w-24 h-8">
                <StarIcon className="h-5 w-5 text-[#FFB700]" />
                <div className="text-xs font-bold">{`4.7`}</div>
                <div className="text-xs ">{`(1k+)`}</div>
              </div>
            </div>
          </div>
          <div className="font-bold mt-2 ms-1">{data.title}</div>
          <div className="mt-4 mx-1 flex flex-row justify-between items-center">
            <div>
              <div className="flex flex-row ">
                <img src={data.instructorPP} className="mr-2" alt="pp" />
                <div>{data.instructor}</div>
              </div>
            </div>
            <div className="rounded-md text-white bg-black text-lg px-4 py-1">{`$ ${data.price}`}</div>
          </div>
          <div className="mt-6 mx-1 flex flex-row justify-between items-center">
            <div className=" flex flex-row justify-between items-center">
              <EyeIcon className="h-4 w-4 mr-3" />
              <div>{data.view}</div>
            </div>
            <div className="flex flex-row justify-between items-center ">
              <PlayCircleIcon className="h-4 w-4 mr-3" />
              <div>{`${data.totalLecture} Lectures`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
