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
    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2 lg:ml-32">
      <div className="lg:flex lg:flex-col">
        <div className="container-title font-semibold leading-tight lg:mt-20 clr-black">
          <div className="lg:text-left md:text-center sm:text-center">
            Get Skills
          </div>
          <div className="lg:text-left md:text-center">From Our Top</div>
          <div className="clr-orange lg:text-left md:text-center">
            Class Courses
          </div>
        </div>
        <div className="lg:mr-16 md:mr-0 mt-6 text-base">
          <div className="lg:text-left md:text-center lg:mx-0 md:mx-32">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </div>
        </div>
        <div className="lg:mr-16 md:mr-0 mt-14 ">
          <div className="lg:mx-0 md:mx-32">
            <label className="relative block ">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="h-5 w-5 flex-none text-gray-400" />
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-4 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
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
        <div className="mt-14 flex lg:flex-col md:flex-row lg:justify-normal md:justify-between lg:mx-0 md:mx-32">
          <div className="flex flex-row align-middle mb-6">
            <div className="mr-2 relative">
              <img src={Star} alt="star" className="block w-6 h-6" />
              <CheckIcon className="absolute inset-1 text-white w-4 h-4" />
            </div>
            <div>Experience mentor</div>
          </div>
          <div className="flex flex-row align-middle mb-6">
            <div className="mr-2 relative">
              <img src={Star} alt="star" className="block w-6 h-6" />
              <CheckIcon className="absolute inset-1 text-white w-4 h-4" />
            </div>
            <div>Quality video</div>
          </div>
          <div className="flex flex-row align-middle mb-6 ">
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
            <img src={Cloud} alt="cloud" className="lg:block cloud-img " />
            <img
              src={Books}
              alt="books"
              className="absolute inset-y-0 right-20"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between lg:-ml-8 md:ml-0 lg:mr-16 md:mr-0 lg:px-0 md:px-24 mt-8">
          <div>
            <img src={google} alt="google" />
          </div>
          <div className="flex flex-col justify-center">
            <img src={coursera} alt="coursera" />
          </div>
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={udemy} alt="udemy" />
          </div>
        </div>
      </div>
    </div>
  );
}
