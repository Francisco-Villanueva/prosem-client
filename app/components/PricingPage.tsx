import React from "react";
import PageLayout from "../common/PageLayout";
import { PricingCard } from ".";

export function PricingPage() {
  return (
    <PageLayout id="Pricing">
      <div className="flex flex-col  gap-10 w-full ">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 items-center w-1/3">
            <h2 className="text-3xl text-black font-bold">
              Pricin <span className="text-green"> Plans </span>
            </h2>
            <div className=" border-green border-2 w-1/12" />
            <span className="text-center text-ligth-black text-md">
              ProSeM offers you a{" "}
              <strong> free tier option for 1 month </strong>, and also the
              premium version with a 10% discount if you decide to go for it for
              the first time
            </span>
          </div>
        </div>
        <div className="w-full  flex justify-around  h-[90%] ">
          <PricingCard type="free" />
          <PricingCard type="standar" />
          <PricingCard type="premium" />
        </div>
      </div>
    </PageLayout>
  );
}
