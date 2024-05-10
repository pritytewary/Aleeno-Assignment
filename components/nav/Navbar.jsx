import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex justify-between items-center h-24  px-16  bg-gradient-to-br from-gray-900 to-gray-950">
      <div>
        <Image
          src={"/logo1.jpg"}
          width={100}
          height={100}
          className="w-14 h-14 rounded-full"
        />
      </div>

      <div className="flex gap-6 items-center justify-center">
        <div className="sm:flex items-center gap-2 hidden">
          <input
            placeholder="Search..."
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-white"
          />
          <Link
            href={""}
            className="flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-green-600 py-2 px-2 text-white"
          >
            <IoSearchOutline className="w-4 h-4" />
          </Link>
        </div>
        <Link href={"/"}>
          <button className=" hover:text-green-600 text-white text-xl font-semibold ">
            Courses
          </button>
        </Link>
        <Link href={"/dashboard"}>
          <button className=" hover:text-green-600 text-white text-xl font-semibold ">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
