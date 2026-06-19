import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import type { IconType } from "react-icons";
type SocialProps = {
  href: string;
  icon: IconType
}
const socialLinks: SocialProps[] = [
  {href: "https://www.facebook.com", icon:FaFacebook},
  {href: "https://www.instagram.com", icon: FaInstagram}
];
export default socialLinks;