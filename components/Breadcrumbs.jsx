import Link from "next/link";
import { FaHome } from "react-icons/fa"

export default function Breadcrumbs() {
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
      <Link href="/" className="text-gray-600 dark:text-gray-200">
        <FaHome className="w-5 h-5"/>
      </Link>

      <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

      <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
        Account
      </a>

      <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

      <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
        Profile
      </a>

      <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
        Settings
      </a>
    </div>
  );
}
