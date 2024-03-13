import React from "react";
import FeatureCards from "./FeatureCards";
import PageLayout from "../common/PageLayout";

export function FeaturesPage() {
  return (
    <PageLayout id="Features">
      <FeatureCards />
      <aside className="flex flex-col  justify-center gap-10  w-[40%]">
        <div className=" h-[80%] flex flex-col  px-10 gap-10 ">
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-bold text-3xl">
              Enjoy our powerfull
            </h2>
            <h2 className="text-green font-bold text-xl">features</h2>
            <div className="border  w-1/12 border-green" />
          </div>
          <div className="flex flex-col gap-4 w-1/2  font-semibold text-ligth-black">
            <span>
              ProSeM is an innovative company that develops management software
              focused on hair salons and, potentially, other beauty and wellness
              services.{" "}
            </span>
            <span>
              Its software offers comprehensive solutions for managing
              employees, schedules, appointments and finances, facilitating
              efficient and professional salon operations.
            </span>
          </div>
        </div>
      </aside>
    </PageLayout>
  );
}
