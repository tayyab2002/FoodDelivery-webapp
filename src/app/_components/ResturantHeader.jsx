/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const ResturantHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-white p-1">
        <div className="col-span-4">
          <Link href="/resturant">
            <img
              className="w-[200px] h-20 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUHWRPan0e-T5eIlFE2jxmk_XPcykJt3ZkQ&s"
              alt="logo not fount"
            />
          </Link>
        </div>
        <div className="m-2 col-span-8">
          <ul className="flex gap-24 mt-5 float-right px-10 font-bold text-orange-600 ">
            <li className="hover:text-orange-700">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-orange-700">
              <Link href="/">Login/SignUp</Link>
            </li>
            <li className="hover:text-orange-700">
              <Link href="/">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantHeader;
