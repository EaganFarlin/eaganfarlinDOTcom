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
            className={clsx("mr-6 text-lg underline hover:no-underline", {
              "text-blue-500": pathname === link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
      <p className="mr-6">|</p>
      <a
        className="mr-6 text-lg underline hover:no-underline"
        href="https://github.com/EaganFarlin"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github &#x2197;
      </a>
      <a
        className="mr-6 text-lg underline hover:no-underline"
        href="mailto:farlineagan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email &#x2197;
      </a>
    </nav>
  );
};

export default Navbar;
