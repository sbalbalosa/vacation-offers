import React from "react";

export default function PhotoCard(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 bg-white pb-4 shadow-lg rounded-md">
      <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black">
        <p className="text-sm font-medium text-white">Villa</p>
        <h2 className="text-xl font-semibold text-white">
          Klimatisierte Villa mit Meerblick, Infinity Pool, Whirlpool,
          Fitness-Dachterrasse und WLAN
        </h2>
      </div>
      <div className="col-start-1 row-start-2 px-4">
        <div className="flex justify-between mt-4">
          <div className="flex-1">
            <svg
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            8
            <div className="flex items-center text-sm font-medium my-5 text-blue-600">
              <svg
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Calvià, Serra de Tramuntana</div>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm">4 Nights</span>
            <span className="font-semibold text-xl">268 EUR</span>
            <span className="text-sm">67 EUR / night</span>
          </div>
        </div>

        <hr className="w-16 border-gray-300 mb-4" />
      </div>
      <div className="col-start-1 row-start-3 space-y-3 px-4">
        <p className="flex items-center text-black text-sm font-medium">
          <img
            src="https://api.holidu.com/img/provider/logos/BOOKIPLY.png"
            alt="test"
            className="w-6 h-6 rounded  mr-2 object-contain bg-gray-100"
          />
          Provided by Bookiply GmbH
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-green-300 text-green-700 text-base font-semibold px-6 py-2 rounded-lg"
          >
            More info
          </button>
          <div className="flex justify-items-center items-center">
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="text-yellow-300"
            >
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <span className="font-semibold">
              <span className="text-black">4.94</span>
              <span>(128)</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-start-1 row-start-1 flex">
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <div className="relative col-span-3 row-span-2">
            <img
              src="https://img.holidu.com/images/c8a4e692-68ac-4573-9c28-4460bf01c46a/t.jpg"
              alt="test"
              className="absolute inset-0 w-full h-full object-cover bg-gray-100 rounded-lg"
            />
          </div>
          {/* <div className="relative hidden">
            <img
              src="https://img.holidu.com/images/c8a4e692-68ac-4573-9c28-4460bf01c46a/t.jpg"
              alt="alt"
              className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
            />
          </div>
          <div className="relative hidden">
            <img
              src="https://img.holidu.com/images/c8a4e692-68ac-4573-9c28-4460bf01c46a/t.jpg"
              alt="alt"
              className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
