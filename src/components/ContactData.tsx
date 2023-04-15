import { MdLocationPin, MdMail } from "react-icons/md";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { IconType } from "react-icons";

type ContactProps = {
  contact: string;
  icon: IconType;
  href: string;
  info: string;
};

const contactData: ContactProps[] = [
  {
    contact: "email",
    icon: MdMail,
    href: "mailto:pongsathon149@gmail.com",
    info: "pongsathon149@gmail.com",
  },
  {
    contact: "phone",
    icon: HiPhone,
    href: "tel:+66636286372",
    info: "0636286372",
  },
  {
    contact: "address",
    icon: MdLocationPin,
    href: "https://maps.google.com/?q=Bang%20Sue,Bangkok,Thailand",
    info: "Bang Sue, Bangkok, Thailand",
  },
  {
    contact: "facebook",
    icon: BsFacebook,
    href: "https://www.facebook.com/namo.pongsathon",
    info: "Pongsathon Kuanla",
  },
  {
    contact: "github",
    icon: BsGithub,
    href: "https://github.com/galaxiaX",
    info: "galaxiaX",
  },
];

export default contactData;
