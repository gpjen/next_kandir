import bg from "../../public/palm--oil.webp";
import Link from "next/link";

export default function Register() {
  return (
    <div className="bg-gray-400/50 py-5 min-h-screen w-screen flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center items-center px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-md">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url(${bg.src})` }}
            ></div>
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center text-gray-700 font-bold">
                Buat Akun Baru!
              </h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="nama"
                  >
                    Nama
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="nama"
                    type="text"
                    placeholder="Nama"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="********"
                      pattern="[a-z0-9]{1,15}"
                      title="Password should be digits (0 to 9) or alphabets (a to z)."
                    />
                  </div>
                  <div className="md:ml-2 w-full">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="c_password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_password"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white shadow bg-green-600 hover:bg-green-700 rounded-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Daftar
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link href="/forgotPassword">
                    <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Lupa password?
                    </p>
                  </Link>
                </div>
                <div className="text-center">
                  <Link href="/login">
                    <p className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                      Sudah punya akun? Masuk
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
