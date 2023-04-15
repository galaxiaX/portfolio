import { IconType } from "react-icons";

type ContactProps = {
  contact: string;
  icon: IconType;
  href: string;
  info: string;
};

const ContactInfo: React.FC<ContactProps> = ({
  contact,
  icon: Icon,
  href,
  info,
}) => {
  return (
    <>
      <a
        key={contact}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white flex gap-2 mb-4 duration-200 hover:text-blue-600 hover:underline"
      >
        <Icon size={24} />
        <div>{info}</div>
      </a>
    </>
  );
};

export default ContactInfo;
