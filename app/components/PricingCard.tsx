import Button from "../common/Button";

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
type PricingTypes = "free" | "standar" | "premium";
type TConfig = {
  title: string;
  paragraph: string;
  price: string;
  details: {
    customPage: boolean;
    privateServer: boolean;
  };
};

const Config: Record<PricingTypes, TConfig> = {
  free: {
    title: "Free Tier",
    paragraph: `Use this space to start using our software as 
      free and check if this is what you want for 
      your business`,
    price: "0",
    details: {
      customPage: false,
      privateServer: false,
    },
  },
  standar: {
    title: "Standar",
    paragraph:
      "Use this space to start using our software as a standard version and  grow your business",
    price: "7",
    details: {
      customPage: true,
      privateServer: false,
    },
  },
  premium: {
    title: "Premium",
    paragraph: `Use this space to start using our software 
    as a premium version and grow your 
    business white the most customize 
    development for it`,
    price: "15",
    details: {
      customPage: true,
      privateServer: true,
    },
  },
};

export function PricingCard({ type }: { type: PricingTypes }) {
  const { paragraph, price, title, details } = Config[type];
  return (
    <div className="aspect-square  w-1/5 rounded-2xl shadow-lg border  ">
      <div
        className={`  h-[30%] ${
          type === "standar" ? "bg-green text-white" : "bg-white text-green"
        } rounded-t-2xl  flex flex-col justify-center items-center gap-2  p-4 `}
      >
        <h2 className="text-2xl font-semibold drop-shadow-md">{title}</h2>
        <h2 className="text-3xl font-bold drop-shadow-md">${price}</h2>
        <span className="text-xs font-light drop-shadow-md">PER MONTH</span>
      </div>
      <div className=" w-full  m-auto  flex flex-col items-center justify-around p-6 gap-4 flex-grow  h-[70%]">
        <p className="text-xs text-ligth-black text-center font-light  ">
          {paragraph}
        </p>
        <section className="text-sm">
          <div className="flex gap-2 items-center">
            <CheckIcon />
            <p className="font-bold text-black">Easy customizable</p>
          </div>
          <div className="flex gap-2 items-center">
            {details.customPage ? <CheckIcon /> : <XIcon />}
            <p className="font-bold text-black">Custom Web Page</p>
          </div>
          <div className="flex gap-2 items-center">
            <CheckIcon />
            <p className="font-bold text-black">Admin Page</p>
          </div>
          <div className="flex gap-2 items-center">
            {details.privateServer ? <CheckIcon /> : <XIcon />}
            <p className="font-bold text-black">Private Server</p>
          </div>
        </section>

        <section>
          <Button>Read More</Button>
        </section>
      </div>
    </div>
  );
}
