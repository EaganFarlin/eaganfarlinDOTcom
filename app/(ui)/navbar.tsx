"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const localLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap mb-14">
      {localLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("mr-6 text-lg duration-1000", {
              "text-gray-50": pathname === link.href,
              "text-gray-500 hover:text-gray-50": pathname !== link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
