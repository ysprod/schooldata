import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-1 flex justify-center w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="max-w-screen-xl p-0 mx-auto md:flex">
        <span className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <p className="p-4 m-4 text-center">
            <Link href="/" className="hover:underline">
              © 2024  Ecole + par YAYA SIDIBE
            </Link>
          </p>
        </span>
      </div>
    </footer>
  );
}
