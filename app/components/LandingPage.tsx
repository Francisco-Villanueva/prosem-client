import Image from "next/image";
import { Navbar } from ".";
function Background() {
  return (
    <div className="w-full h-full flex absolute top-0 z-0 ">
      <section className="w-1/2 h-full bg-green rounded-b-[350px]"></section>
      <section className="w-1/2 h-[90%] bg-green rounded-br-[800px]"></section>
    </div>
  );
}
export default function LandingPage() {
  return (
    <div id="Home" className="bg-white h-full w-full relative flex flex-col">
      <Background />
      <Navbar />
      <div className="h-full  z-10 pt-[10vh]">
        <div className=" h-[100%]  p-10   flex flex-col justify-center items-center gap-10 ">
          <div className=" flex flex-col items-center text-center text-white  w-1/2">
            <h2 className="text-[3rem] font-bold w-full ">
              Your living room, our technology
            </h2>
            <span className="text-xl">
              Our mission is to redefine the management experience in the beauty
              industry through technological innovation.
            </span>
          </div>
          <div className=" bg-white rounded-[50px] h-full aspect-video relative ">
            <Image
              src="/homeDashboard.png"
              fill
              alt="prosem"
              className="rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
