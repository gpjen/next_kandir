import { FaBuilding, FaIndustry, FaTree, FaUsers } from "react-icons/fa";

export default function Home3() {
  return (
    <div className="container items-center mt-5">
      <div className="flex flex-wrap justify-center pb-3 mx-4 md:mx-24 lg:mx-0">
        <div className="w-full p-2 lg:w-1/4 md:w-1/2 hover:cursor-default">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-green-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="flex justify-center items-center group-hover:text-gray-50">
                  <FaUsers className="text-xl" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              3589
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Kariawan</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2 hover:cursor-default">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-green-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="flex justify-center items-center group-hover:text-gray-50">
                  <FaBuilding className="text-xl" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              6
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Anak Perusahaan</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2 hover:cursor-default">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-green-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="flex justify-center items-center group-hover:text-gray-50">
                  <FaTree className="text-xl" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              12345
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Hektar Kebun</p>
            </div>
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/4 md:w-1/2 hover:cursor-default">
          <div className="flex flex-col px-6 py-10 overflow-hidden bg-white hover:bg-gradient-to-br hover:from-green-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group">
            <div className="flex flex-row justify-between items-center">
              <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
                <div className="flex justify-center items-center group-hover:text-gray-50">
                  <FaIndustry className="text-xl" />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
              10
            </h1>
            <div className="flex flex-row justify-between group-hover:text-gray-200">
              <p>Pabrik Kelapa Sawit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
