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
    <nav className="flex flex-wrap mb-16">
      {localLinks.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("mr-6 text-lg", {
              underline: pathname === link.href,
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
