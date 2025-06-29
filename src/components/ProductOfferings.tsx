"use client";
import React from 'react';
import { motion } from "framer-motion";
import {
  Landmark,
  Zap,
  Sprout,
  LucideIcon,
  ShieldCheck,
  TrendingUp,
  Clock,
  Component,
  Wallet,
  BookOpen,
  Telescope,
  Bot,
  BarChart,
} from "lucide-react";

// New, more detailed data structure to match the new design
const products = [
  {
    productName: "Crypto Lending",
    description: "Earn passive income on your assets. Lend your Bitcoin, Ethereum, and other cryptocurrencies to earn competitive yields with daily compounding.",
    gradient: "from-green-100 via-green-50/50 to-transparent",
    features: [
      { Icon: TrendingUp, title: "Up to 15% APY", description: "Maximize your earnings with our market-leading interest rates, far exceeding traditional savings." },
      { Icon: Clock, title: "Daily Compounding", description: "Your interest is calculated and paid out every day, accelerating your investment growth." },
      { Icon: ShieldCheck, title: "Bank-Grade Security", description: "Your assets are protected by audited, battle-tested smart contracts and security protocols." },
    ]
  },
  {
    productName: "Flash Borrowing",
    description: "Instantly borrow against your crypto holdings. No credit checks, just collateralize your assets and get immediate access to funds.",
    gradient: "from-purple-100 via-purple-50/50 to-transparent",
    features: [
        { Icon: Component, title: "Instant Approval", description: "Automated on-chain process means you get access to liquidity in seconds, not days." },
        { Icon: Wallet, title: "Flexible Collateral", description: "Use a wide range of popular crypto assets as collateral for your loans." },
        { Icon: BookOpen, title: "Transparent Terms", description: "No hidden fees. All loan terms are clearly defined and executed by the smart contract." },
    ]
  },
  {
    productName: "Yield Farming",
    description: "Our smart contracts automatically optimize your yields across multiple DeFi protocols to maximize your returns.",
    gradient: "from-blue-100 via-blue-50/50 to-transparent",
    features: [
        { Icon: Telescope, title: "Multi-Protocol Strategies", description: "We constantly scan the DeFi landscape to find and utilize the most profitable opportunities for you." },
        { Icon: Bot, title: "Automated Rebalancing", description: "Our intelligent bots auto-compound and rebalance your positions to maximize your APY." },
        { Icon: BarChart, title: "Performance Analytics", description: "Track your earnings with a clear and detailed dashboard showing your real-time performance." },
    ]
  },
];

const ProductSection = ({ product, isFirst }: { product: typeof products[0], isFirst: boolean }) => {
  return (
    <div className={`relative ${!isFirst ? 'border-t border-slate-200' : ''}`}>
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 top-1/4 w-full h-full bg-gradient-to-tr ${product.gradient} -z-10`}
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Left Sticky Column */}
        <div className="lg:sticky top-0 flex flex-col justify-center py-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight font-space">
                    {product.productName}
                </h2>
                <p className="mt-6 text-xl text-gray-600 max-w-lg">
                    {product.description}
                </p>
            </motion.div>
        </div>
        
        {/* Right Scrolling Column */}
        <div className="space-y-16">
            {product.features.map((feature, i) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                >
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 p-3 bg-white rounded-full shadow-md border border-slate-100">
                          <feature.Icon className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                            <p className="mt-2 text-lg text-gray-500">{feature.description}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const ProductOfferings = () => {
  return (
    <section className="bg-white">
      <div className="text-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-space tracking-tight">
          Your Gateway to DeFi
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our suite of products designed for security, performance, and ease of use.
        </p>
      </div>
      {products.map((product, i) => (
        <ProductSection key={product.productName} product={product} isFirst={i === 0} />
      ))}
    </section>
  );
};
