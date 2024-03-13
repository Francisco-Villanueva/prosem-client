import React from "react";
import PageLayout from "../common/PageLayout";
import Button from "../common/Button";
import { PricingCard } from ".";
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-green"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-error"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export function PricingPage() {
  return (
    <PageLayout id="Pricing">
      <div className="flex flex-col  gap-10 w-full">
        <div className="w-full flex justify-center">
          <div className="flex flex-col gap-4 items-center w-1/3">
            <h2 className="text-3xl text-black font-bold">
              Pricin <span className="text-green"> Plans </span>
            </h2>
            <div className=" border-green border-2 w-1/12" />
            <span className="text-center text-ligth-black text-sm">
              ProSeM offers you a free tier option for 1 month, and also the
              premium version with a 10% discount if you decide to go for it for
              the first time
            </span>
          </div>
        </div>
        <div className="w-full  flex justify-around  h-[80%] ">
          <PricingCard type="free" />
          <PricingCard type="standar" />
          <PricingCard type="premium" />
        </div>
      </div>
    </PageLayout>
  );
}
