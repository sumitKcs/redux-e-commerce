import Link from "next/link";

function NavBar() {
  return (
    <nav className=" flex justify-center items-center gap-5 py-5 border border-gray-300">
      <Link href="/" className="hover:text-blue-700">
        Home
      </Link>
      <Link href="/cart" className="hover:text-blue-700">
        cart
      </Link>
    </nav>
  );
}

export default NavBar;
