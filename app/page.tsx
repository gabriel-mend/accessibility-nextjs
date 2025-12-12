import Image from "next/image";
import logoImage from "@/public/logo.svg";

export default function Home() {
  return (
    <div>
      <div className="header">
        <Image src={logoImage} alt="" />
      </div>
      <div className="nav"></div>
    </div>
  );
}
