import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function HeaderButton({
  children,
  faIcon,
  refURI,
}: {
  children: React.ReactNode;
  faIcon: any;
  refURI: string;
}) {
  return (
    <a
      href={refURI}
      className={clsx(
        "flex items-center border-2 border-solid border-gray-50 rounded-full p-2 hover:relative hover:bottom-1 duration-1000",
        {
          "bg-gray-50 text-gray-950": faIcon === faLinkedin,
        }
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faIcon} className="w-6 mr-1" />
      <span className="text-xl">{children}</span>
    </a>
  );
}
