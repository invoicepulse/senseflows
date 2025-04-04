"use client";
import CheckIcon from "@/assets/check.svg";
import AuthButton from "@/components/AuthButton";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Jesse's Starter",
    monthlyPrice: 0,
    buttonText: "Yeah, Science!",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 lab assistants",
      "Unlimited tasks and formulas",
      "2GB crystal storage",
      "Basic territory protection",
      "Street-level support",
    ],
  },
  {
    title: "Heisenberg Special",
    monthlyPrice: 9.99,
    buttonText: "Let's Cook!",
    popular: true,
    inverse: true,
    features: [
      "Up to 10 lab assistants",
      "Unlimited tasks and formulas",
      "50GB crystal storage",
      "Advanced territory protection",
      "No half-measures support",
      "99.1% Purity guarantee",
      "Export capabilities",
    ],
  },
  {
    title: "Gus Fring Enterprise",
    monthlyPrice: 19.99,
    buttonText: "Build Your Empire",
    popular: false,
    inverse: false,
    features: [
      "Up to 20 associates",
      "Unlimited tasks and formulas",
      "200GB crystal storage",
      "Advanced territory protection",
      "Dedicated Los Pollos manager",
      "Custom distribution fields",
      "Advanced territory analytics",
      "Export capabilities",
      "Full API access",
      "DEA-proof security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Empire Pricing</h2>
          <p className="section-des mt-5">
            Jesse-level access forever free. Upgrade for the full Heisenberg experience with unlimited formulas, better security, and exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, features, inverse }) => (
            <div
              key={title}
              className={twMerge(
                "p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse && "text-white/60")}>
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      99.1% Pure
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <a
                href="/auth"
                className={twMerge("btn btn-primary w-full mt-[30px]", inverse && "bg-white text-black")}
              >
                {buttonText}
              </a>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
