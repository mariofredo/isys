export default function CardHowItWork({ data }) {
  return (
    <>
      <div
        className="flex flex-col  items-center w-64 h-64"
        style={{ backgroundColor: data.colorContainer }}
      >
        <div className="rounded-full flex flex-row justify-center ">
          <div
            className="w-16 h-16 bg-blue-300 rounded-full flex flex-col justify-center  border-2 border-white mt-6"
            style={{ backgroundColor: data.colorBgIcon }}
          >
            <img src={data.icon} className="w-6 h-6 mx-auto" alt="plan" />
          </div>
        </div>
        <div className="text-center text-white mt-6">{data.title}</div>
        <div className="text-center text-white mx-4 mt-4">{data.text}</div>
      </div>
    </>
  );
}
