import "./MainContent.css";
import { MagnifyingGlassIcon, CheckIcon } from "@heroicons/react/24/outline";
import Star from "../icon/Star.png";
import Cloud from "../icon/Cloud.png";
import Books from "../icon/Books.png";
import google from "../icon/google.png";
import coursera from "../icon/coursera.png";
import facebook from "../icon/facebook.png";
import udemy from "../icon/udemy.png";

export default function MainContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1  gap-2 lg:ml-32">
      <div className="flex flex-col">
        <div className="container-title font-bold leading-tight lg:mt-20 clr-black">
          <div className="text-center lg:text-left sm:text-center">
            Get Skills
          </div>
          <div className="text-center lg:text-left sm:text-center">
            From Our Top
          </div>
          <div className="text-center clr-orange lg:text-left sm:text-center">
            Class Courses
          </div>
        </div>
        <div className="mr-0 lg:mr-16 sm:mr-0 mt-6 text-base">
          <div className="text-center lg:text-left sm:text-center mx-8 lg:mx-0 sm:mx-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </div>
        </div>
        <div className="mr-0 lg:mr-16 sm:mr-0 mt-14 ">
          <div className="mx-8 lg:mx-0 sm:mx-32">
            <label className="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="h-5 w-5 flex-none text-gray-400" />
              </span>
              <input
                className="placeholder:italic placeholder:text-ellipsis placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-9 pr-28  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search your favorite courses"
                type="text"
                name="search"
              />
              <span className="absolute inset-y-0 right-0 flex justify-center items-center my-2 mr-2 bg-orange rounded-full">
                <div className="mx-4">
                  <button className="text-white">Search</button>
                </div>
              </span>
            </label>
          </div>
        </div>
        <div className="mt-14 flex flex-col lg:flex-col sm:flex-row justify-between lg:justify-normal sm:justify-between  lg:mx-0 sm:mx-32  mx-auto ">
          <div className="flex flex-row items-center mb-6 ">
            <div className="mr-2 relative">
              <img src={Star} alt="star" className="block w-6 h-6" />
              <CheckIcon className="absolute inset-1 text-white w-4 h-4" />
            </div>
            <div>Experience mentor</div>
          </div>
          <div className="flex flex-row items-center mb-6">
            <div className="mr-2 relative">
              <img src={Star} alt="star" className="block w-6 h-6" />
              <CheckIcon className="absolute inset-1 text-white w-4 h-4" />
            </div>
            <div>Quality video</div>
          </div>
          <div className="flex flex-row items-center mb-6 ">
            <div className="mr-2 relative">
              <img src={Star} alt="star" className="block w-6 h-6" />
              <CheckIcon className="absolute inset-1 text-white w-4 h-4" />
            </div>
            <div>Affordable prices</div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-end">
          <div className="relative mt-9">
            <img
              src={Cloud}
              alt="cloud"
              className="lg:block w-[480px] h-[460] lg:w-[647px] lg:h-[633px] sm:w-[647px] sm:h-[633px]"
            />
            <img
              src={Books}
              alt="books"
              className="absolute inset-y-0 right-12 lg:right-20"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row sm:flex-row justify-between items-center ml-0 lg:-ml-8 sm:ml-0 mr-0 lg:mr-16 sm:mr-0 px-8 lg:px-0 sm:px-24 mt-8">
          <div className="my-2">
            <img src={google} className="w-32 lg:w-20" alt="google" />
          </div>
          <div className="flex flex-col justify-center my-2">
            <img src={coursera} className="w-32 lg:w-20" alt="coursera" />
          </div>
          <div className="my-2">
            <img src={facebook} className="w-32 lg:w-20 " alt="facebook" />
          </div>
          <div className="my-2">
            <img src={udemy} className="w-32 lg:w-20" alt="udemy" />
          </div>
        </div>
      </div>
    </div>
  );
}
