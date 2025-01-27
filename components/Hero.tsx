import { BackgroundBeams } from './ui/BackgroundBeams';
import { BackgroundLines } from './ui/BackgroundLines';
import ConnectButton from './ui/ConnectButton';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextEffect';
import Image from 'next/image';
import { WavyBackground } from './ui/WavyBackground';

const Hero = () => {
  return (
    
    <div className="pb-20 pt-36">
      {/* Spotlight Background Effects */}
      <div>
        {/* <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="red" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="red" /> */}
        {/* Uncomment this for additional spotlight */}
        {/* <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="aqua" /> */}
      </div>

      {/* Container with Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <BackgroundBeams />
          <WavyBackground />
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div>
            {/* Optional Profile Image */}
            {/* <img src='/1710416855876.jpeg' className='rounded-xl w-32 absolute top-[-105px] left-1/2 transform -translate-x-1/2' /> */}
          </div>

          {/* Heading Section */}
          <h2 className="uppercase tracking-widest text-xs text-center text-black-100 max-w-80">
            COMPUTER SCIENCE | UNDERGRADUATE
          </h2>

          {/* Dynamic Text Effect */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl uppercase"
            words="Passionate About Solving Problems Through Technology"
          />

          {/* Subheading Text */}
          <p className="text-center font-mono uppercase md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-800 leading-relaxed">
  {/* Hi, I am <span className="text-red-500 font-semibold">Thevindu</span>, a tech enthusiast passionate about innovation and creating solutions that make a difference. I thrive on challenges and continuously push the limits of my accomplishments, always eager to explore new ways to apply my knowledge to solve real-world problems. */}
</p>


          {/* Call to Action Button */}
          <a href="/about">
            <ConnectButton title="./ THEVINDU / ABOUT ME" />
          </a>
          <br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
  );
};

export default Hero;
