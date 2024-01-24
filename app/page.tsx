import Image from "next/image";
import { ChatIcon } from "./icons";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-[100vh] ">
      <Image src={"/svg/Logo.svg"} alt="logo" width={600} height={100} />
      <p className="text-2xl font-semibold  text-main ">Coming soon ...</p>

      <div className="bg-main text-white p-4 rounded-full absolute bottom-4 right-4">
        <span className="relative cursor-pointer">
          <div className="">
            <ChatIcon />
          </div>
          <p className="bg-gray-400 p-2 border rounded-md absolute top-[-70px] left-[-300px] transition-all duration-200 w-[300px] opacity-85 ">
            Chat whit us to request information
          </p>
        </span>
      </div>
    </main>
  );
}
