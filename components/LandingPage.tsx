import { ChatIcon } from "@/app/icons";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <Image src={"/logo/logo.png"} alt="logo" width={600} height={100} />
      <p className="text-3xl font-semibold  text-main ">ProSeM Enterprise</p>

      <div className="bg-main text-white p-4 rounded-full absolute bottom-4 right-4">
        <span className="relative cursor-pointer">
          <div className="">
            <ChatIcon />
          </div>
        </span>
      </div>
    </div>
  );
}
