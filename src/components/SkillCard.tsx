import { IconType } from "react-icons";

type SkillCardProps = {
  skill: string;
  icon: IconType;
  iconColor: string;
};

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  icon: Icon,
  iconColor,
}) => {
  return (
    <div
      key={skill}
      className="flex flex-col gap-2 bg-white justify-center raise -hover:scale-110 -sm:hover:scale-125 transition-all- duration-200 shadow-all text-sm font-medium rounded-lg items-center aspect-square"
    >
      <Icon size={32} color={iconColor} />
      <h3>{skill}</h3>
    </div>
  );
};

export default SkillCard;
