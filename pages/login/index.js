import Link from "next/link";

export default function Login() {
  return (
    <div className="bg-gray-400/50 w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="md:flex md:items-center my-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200"
                id="email"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-200"
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-green-600 hover:bg-green-700 w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Masuk
              </button>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link href="/forgotPassword">
                  <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                    Lupa password
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
