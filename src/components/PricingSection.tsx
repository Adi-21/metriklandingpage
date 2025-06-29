"use client";
import NumberFlow from "@number-flow/react";
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const InteractivePricingCard = () => {
  const [active, setActive] = React.useState(1); // Default to 'Pro' plan
  const [period, setPeriod] = React.useState(0); // 0 for Monthly, 1 for Yearly

  const starterMonth = 49;
  const starterAnnual = 490; // Billed annually
  const proMonth = 99;
  const proAnnual = 990; // Billed annually

  const [starterPrice, setStarterPrice] = React.useState(starterMonth);
  const [proPrice, setProPrice] = React.useState(proMonth);

  const plans = [
    { name: "Hobbyist", price: 0 },
    { name: "Pro", price: period === 0 ? starterPrice : starterAnnual / 12 },
    { name: "Enterprise", price: period === 0 ? proPrice : proAnnual / 12 },
  ];

  const handleChangePeriod = (index: number) => {
    setPeriod(index);
    if (index === 0) {
      setStarterPrice(starterMonth);
      setProPrice(proMonth);
    } else {
      setStarterPrice(starterAnnual);
      setProPrice(proAnnual);
    }
  };
  
  return (
    <div className="border-2 rounded-[32px] p-3 shadow-lg max-w-sm w-full flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm">
      {/* Monthly/Yearly Toggle */}
      <div className="rounded-full relative w-full bg-slate-100 p-1.5 flex items-center">
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20 transition-colors"
          onClick={() => handleChangePeriod(0)}
        >
          Monthly
        </button>
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20 transition-colors"
          onClick={() => handleChangePeriod(1)}
        >
          Yearly
        </button>
        <div
          className="p-1.5 flex items-center justify-center absolute inset-0 w-1/2 z-10"
          style={{
            transform: `translateX(${period * 100}%)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="bg-white shadow-md rounded-full w-full h-full"></div>
        </div>
      </div>

      {/* Plan Selection */}
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        {/* Active Plan Border */}
        <div
            className={`w-full h-[88px] absolute top-0 border-[3px] border-purple-600 rounded-2xl transition-transform duration-300 ease-out`}
            style={{
              transform: `translateY(${active * (88 + 12)}px)`,
            }}
        ></div>

        {/* Hobbyist Plan */}
        <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(0)}
        >
            <div className="flex flex-col items-start">
                <p className="font-semibold text-lg text-gray-900">Hobbyist</p>
                <p className="text-slate-500 text-sm">
                    <span className="text-black font-medium">$0.00</span>/month
                </p>
            </div>
             <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 0 ? 'bg-purple-600' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>
        
        {/* Pro Plan */}
         <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(1)}
        >
            <div className="flex flex-col items-start">
                 <p className="font-semibold text-lg flex items-center gap-2 text-gray-900">
                    Pro
                    <span className="py-0.5 px-2.5 block rounded-lg bg-purple-100 text-purple-700 text-xs font-medium">
                        Popular
                    </span>
                </p>
                <p className="text-slate-500 text-sm flex">
                    <span className="text-black font-medium flex items-center">
                        ${period === 0 ? <NumberFlow value={starterPrice} /> : <NumberFlow value={starterAnnual / 12} />}
                    </span>
                    /month
                </p>
            </div>
            <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 1 ? 'bg-purple-600' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>

        {/* Enterprise Plan */}
         <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(2)}
        >
            <div className="flex flex-col items-start">
                <p className="font-semibold text-lg text-gray-900">Enterprise</p>
                <p className="text-slate-500 text-sm flex">
                     <span className="text-black font-medium flex items-center">
                        ${period === 0 ? <NumberFlow value={proPrice} /> : <NumberFlow value={proAnnual / 12} />}
                    </span>
                    /month
                </p>
            </div>
            <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 2 ? 'bg-purple-600' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>

      </div>

      <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-lg text-white w-full p-3 active:scale-95 transition-transform duration-300">
        Get Started
      </Button>
    </div>
  );
};

export const PricingSection = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12 lg:mb-0"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space tracking-tight">
                            Fair pricing, unbeatable value
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Choose the plan that's right for you. All plans come with our core features, transparent rates, and the freedom to withdraw anytime. No hidden fees, ever.
                        </p>
                         <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">No hidden fees</span>
                            </div>
                             <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">Transparent, real-time rates</span>
                            </div>
                             <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">Withdraw your assets anytime</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Card */}
                    <motion.div
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                         viewport={{ once: true }}
                         className="flex justify-center lg:justify-end"
                    >
                        <InteractivePricingCard />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
