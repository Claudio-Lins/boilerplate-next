import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

export default function SocialNetwork() {
  return (
    <div className="flex text-white text-2xl sm:text-xl space-x-4">
      <Link href="https://facebook.com" passHref>
        <a  target="_blank">
          <FaFacebookSquare />
        </a>
      </Link>
      <Link href="https://instagram.com" passHref>
        <a  target="_blank">
        <FaInstagramSquare />
        </a>
      </Link>
      <Link href="https://linkedin.com" passHref>
        <a  target="_blank">
        <FaLinkedin />
        </a>
      </Link>
      <Link href="https://youtube.com" passHref>
        <a  target="_blank">
        <FaYoutubeSquare />
        </a>
      </Link>
    </div>
  );
}

