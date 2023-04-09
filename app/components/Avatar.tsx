"use client";
import Image from "next/image";

interface AvatarProps {
  source?: string|null|undefined;
}
const Avatar:React.FC<AvatarProps> = ({source}) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={source || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
