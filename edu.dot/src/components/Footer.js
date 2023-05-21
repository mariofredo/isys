import "./Footer.css";
import fbSmall from "../icon/facebook-small.png";
import twitter from "../icon/twitter.png";
import instagram from "../icon/instagram.png";
export default function Footer() {
  const footerData = [
    {
      title: "E Learn",
      children: [
        "About",
        "What The Leaner",
        "Leadership",
        "Careers",
        "Catalog",
        "For Inspiration",
      ],
    },
    {
      title: "Courses",
      children: [
        "Classroom Courses",
        "Virtual Classroom Courses",
        "E-learning Courses",
        "Video Courses",
        "Online Courses",
      ],
    },
    {
      title: "Community",
      children: [
        "Learners",
        "Partners",
        "Competitor",
        "Transaction",
        "Blog",
        "Teaching Center",
      ],
    },
    {
      title: "Quick Links",
      children: [
        "Home",
        "Professional Education",
        "Courses",
        "Admissions",
        "Testimonial",
        "Programs",
      ],
    },
    {
      title: "More",
      children: ["Process", "Impression", "Team", "Privacy", "Help", "Contact"],
    },
  ];
  return (
    <>
      <div
        className=" pt-36 lg:pt-60 pb-20"
        style={{ backgroundColor: "#FFF8DD" }}
      >
        <div className="flex flex-row justify-center mx-16 lg:mx-32">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 ">
            {footerData.map((el, i) => {
              return (
                <div className="flex flex-col items-center">
                  <div className="flex flex-col justify-start container">
                    <div className="text-lg font-bold">
                      <div className="">{el.title}</div>
                    </div>
                    <ul>
                      {el.children.map((el) => {
                        return (
                          <li className="text-base my-3">
                            <a href="#">{el}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className="px-8 lg:px-32 sm:px-16 py-8 lg:py-14"
        style={{ backgroundColor: "#27424D" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-white text-2xl font-bold">Edu.dot</div>
          <div className="text-white text-sm my-4">
            @2023 Learning All Rights Reserved
          </div>
          <div className="text-white flex flex-row ">
            <img src={twitter} className="h-5 w-5" alt="twitter" />
            <img src={fbSmall} className="h-5 w-5 mx-6" alt="fbSmall" />
            <img src={instagram} className="h-5 w-5" alt="instagram" />
          </div>
        </div>
      </div>
    </>
  );
}
