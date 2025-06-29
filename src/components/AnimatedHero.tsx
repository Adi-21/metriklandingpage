'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GooeyText } from './ui/gooey-text-morphing';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp,
  Zap,
  Layers,
  ShieldCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const floatingIcons = [
    { side: 'left', top: '15vh', position: '8vw', content: '💸', speed: -180, size: 'text-5xl' },
    { side: 'left', top: '45vh', position: '5vw', content: '📈', speed: -130, size: 'text-6xl' },
    { side: 'left', top: '75vh', position: '10vw', content: '💰', speed: -220, size: 'text-4xl' },
    { side: 'right', top: '20vh', position: '7vw', content: '🤑', speed: 160, size: 'text-6xl' },
    { side: 'right', top: '55vh', position: '9vw', content: '💎', speed: 140, size: 'text-5xl' },
    { side: 'right', top: '80vh', position: '6vw', content: '💳', speed: 200, size: 'text-4xl' },
    { side: 'right', top: '5vh', position: '25vw', content: '🔗', speed: 150, size: 'text-3xl' },
    { side: 'left', top: '8vh', position: '20vw', content: '💲', speed: -150, size: 'text-4xl' },
];

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);

  return (
    <motion.section
      style={{ scale, rotate, opacity }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className="text-center max-w-6xl mx-auto px-4">
        <h1 className='text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold font-space text-gray-900 leading-tight tracking-tight'>
          Earn More Than
        </h1>
        <GooeyText
          texts={["Traditional Banks", "Low Yields", "Slow Transactions", "Old Finance"]}
          morphTime={2}
          cooldownTime={0.4}
          className="block h-[6rem] w-full mb-1 mt-16"
          textClassName="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold font-space"
        />
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-10 leading-relaxed font-inter">
            Lend your crypto assets and earn up to{" "}
            <span className="font-bold text-green-600">15% APY</span> - 
            significantly higher returns than traditional banking.
            Start earning passive income today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-10 py-5 text-xl font-inter font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto">
              Start Lending Now
            </Button>
        </div>
        <p className="font-semibold text-xl animate-bounce mt-16">Scroll Down 👇</p>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, 1]);
  const clipPath = useTransform(scrollYProgress, [0, 0.75], ["inset(45% 45% 45% 45% round 100vmax)", "inset(0% 0% 0% 0% round 0vmax)"]);

  return (
    <div className='relative h-screen flex items-center justify-center'>
      <motion.div
        style={{ scale, rotate, opacity }}
        className="w-[95%] max-w-6xl h-[90vh] bg-black/80 rounded-3xl shadow-2xl p-4 border border-gray-700/50 flex flex-col"
      >
        <div className="w-full flex justify-center py-2 flex-shrink-0">
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
        <div className="flex-grow bg-[#F9FAFB] rounded-xl overflow-hidden relative">
          <motion.div
            style={{ clipPath }}
            className='absolute inset-0'
          >
            <div className='relative h-full text-gray-800 flex flex-col items-center justify-center'>
              <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
              <div className='container mx-auto relative z-10 text-center px-4 py-8'>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space text-gray-900 mb-16 leading-[1.1] tracking-tight">
                  Our Features
                </h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                  {/* Feature 1: High Yield Lending */}
                  <div className="bg-white/50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <TrendingUp className="w-10 h-10 text-green-500" />
                      <h3 className="text-2xl font-bold text-gray-800">High Yield Lending</h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Earn market-leading interest rates on your digital assets, significantly outperforming traditional savings accounts.
                    </p>
                  </div>
                  {/* Feature 2: Instant Borrowing */}
                  <div className="bg-white/50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <Zap className="w-10 h-10 text-purple-500" />
                      <h3 className="text-2xl font-bold text-gray-800">Instant Borrowing</h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Access liquidity instantly by using your crypto assets as collateral, without selling them.
                    </p>
                  </div>
                  {/* Feature 3: DeFi Yields */}
                  <div className="bg-white/50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <Layers className="w-10 h-10 text-blue-500" />
                      <h3 className="text-2xl font-bold text-gray-800">DeFi Yields</h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Explore a universe of decentralized finance opportunities, all from a single, unified platform.
                    </p>
                  </div>
                  {/* Feature 4: Secure Protocol */}
                  <div className="bg-white/50 p-8 rounded-lg shadow-sm">
                    <div className="flex items-center gap-4">
                      <ShieldCheck className="w-10 h-10 text-orange-500" />
                      <h3 className="text-2xl font-bold text-gray-800">Secure Protocol</h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      Your assets are protected by industry-leading security, regular audits, and a robust, battle-tested protocol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


export const AnimatedHero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.floating-icon').forEach((icon: any) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: 'top top',
            end: '+=450',
            scrub: 0.8,
          },
        });

        timeline
          .to(
            icon,
            {
              xPercent: icon.dataset.speed,
              ease: 'power1.out',
            },
            0
          )
          .to(
            icon,
            {
              opacity: 0,
              ease: 'power1.in',
            },
            0.3
          );
      });
    }, container);

    return () => ctx.revert();
  }, []);


  return (
      <div ref={container} className='relative h-[200vh] overflow-x-hidden'>
        {/* Floating Icons */}
        {/* <div className="absolute inset-0 z-10 w-full h-full pointer-events-none top-16">
          {floatingIcons.map((icon, index) => (
              <motion.div
                  key={index}
                  className={`floating-icon absolute ${icon.size} p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-xl`}
                  data-speed={icon.speed}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5, ease: 'easeOut' } }}
                  style={{
                      top: icon.top,
                      left: icon.side === 'left' ? icon.position : 'auto',
                      right: icon.side === 'right' ? icon.position : 'auto',
                  }}
              >
                  {icon.content}
              </motion.div>
          ))}
        </div> */}

        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </div>
  );
}; 