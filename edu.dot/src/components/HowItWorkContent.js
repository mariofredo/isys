import "./HowItWorkContent.css";
import book from "../icon/Book.png";
import plan from "../icon/plan.png";
import ribbon from "../icon/ribbon.png";
import find from "../icon/find.png";
import personAndCloud from "../icon/personAndCloud.png";

export default function HowItWorkContent() {
  const dataHowItWork = [
    {
      icon: plan,
      title: "Set Your Plan",
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      colorContainer: "#27424d",
      colorBgIcon: "#06aed5",
    },
    {
      icon: find,
      title: "Find Your Course",
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      colorContainer: "#1F968E",
      colorBgIcon: "#FF5000",
    },
    {
      icon: book,
      title: "Book Your Seat",
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      colorContainer: "#9B7200",
      colorBgIcon: "#B900D7",
    },
    {
      icon: ribbon,
      title: "Get Certificate",
      text: "Lorem Ipsum has been the industry's standard dummy text ever",
      colorContainer: "#A93D33",
      colorBgIcon: "#00C508",
    },
  ];

  return (
    <div className="mt-10 lg:mt-28">
      <div className="text-center text-4xl font-bold mb-12">How It Work</div>
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {dataHowItWork.map((el, i) => {
            return (
              <>
                <div
                  className="flex flex-col  items-center w-64 h-64"
                  style={{ backgroundColor: el.colorContainer }}
                >
                  <div className="rounded-full flex flex-row justify-center ">
                    <div
                      className="w-16 h-16 bg-blue-300 rounded-full flex flex-col justify-center  border-2 border-white mt-6"
                      style={{ backgroundColor: el.colorBgIcon }}
                    >
                      <img
                        src={el.icon}
                        className="w-6 h-6 mx-auto"
                        alt="plan"
                      />
                    </div>
                  </div>
                  <div className="text-center text-white mt-6">{el.title}</div>
                  <div className="text-center text-white mx-4 mt-4">
                    {el.text}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 my-24">
        <div className="">
          <img src={personAndCloud} alt="personAndCloud" />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="w-4/5 lg:w-96 mt-6 lg:mt-0">
            <div
              className="font-bold text-2xl lg:text-4xl mb-4"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {"Our Process is Build\nAround Quality &\nMake it Perfect"}
            </div>
            <div className="text-base font-normal">
              Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum
              enim justo integer actor imeer congue magna and purus pretlium
              insuss igula nurtrum luctue unrice.
            </div>
            <div className="text-base font-normal mt-4">
              Anenim Njilam tempor sapier gravida done porta and b adrdit ipsum
              enim justo integer actor imeer congue magna
            </div>
            <div className="mt-10 rounded-full bg-orange w-36 h-10 flex justify-center">
              <button className="text-white">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
