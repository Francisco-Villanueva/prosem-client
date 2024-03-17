import React from "react";
import { SecureIcon } from "../icons";
import Button from "../common/Button";
import Image from "next/image";
import PageLayout from "../common/PageLayout";

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-14 text-green "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
};
export function WhyUs() {
  return (
    <PageLayout id="WhyUs">
      <aside className="flex flex-col  justify-center gap-10  w-1/2  py-10 ">
        <div className=" h-full flex flex-col ml-32   px-10 gap-10 w-2/3  ">
          <section className="flex flex-col gap-10">
            <h2 className="text-black font-bold text-3xl w-[80%]">
              Why <span className="text-green"> choose ProSeM</span> software
              for yor company
            </h2>
            <div className="  border-2 w-1/12 border-green" />
          </section>
          <section className="flex flex-col gap-4 w-full  font-semibold text-ligth-black">
            <span className="flex gap-4 items-start">
              <Icon />
              <div className="flex flex-col gap-4">
                <h2 className="text-black font-bold text-md">
                  Best Performance
                </h2>
                <span className="text-ligth-black font-semibold text-sm">
                  We work to improve and give our best software performance
                </span>
              </div>
            </span>
            <span className="flex gap-4 items-start">
              <Icon />
              <div className="flex flex-col gap-4">
                <h2 className="text-black font-bold text-md">Easy Settings</h2>
                <span className="text-ligth-black font-semibold text-sm">
                  We work to improve and give our best software performance
                </span>
              </div>
            </span>
            <span className="flex gap-4 items-start">
              <Icon />
              <div className="flex flex-col gap-4">
                <h2 className="text-black font-bold text-md">
                  Best Performance
                </h2>
                <span className="text-ligth-black font-semibold text-sm">
                  We work to improve and give our best software performance
                </span>
              </div>
            </span>
          </section>
          <div>
            <Button>Get Started</Button>
          </div>
        </div>
      </aside>
      <section className=" w-1/2 h-full  relative ">
        <div className="w-full h-full  absolute right-[-150px]">
          <div className="w-full h-full relative ">
            <Image
              src={"/dashboard.png"}
              alt="Prosem software performance"
              fill
              objectFit="contain"
              className="rounded-l-[500px] "
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
