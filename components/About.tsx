"use client"
import Image from "next/image";
import pp from "../public/memoji.png";
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import ConnectButton from "./ui/ConnectButton";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextEffect";
import { TextGenerateEffect2 } from "./ui/TextEffectA";
import { TextGenerateEffect3 } from "./ui/TextEffectB";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.02] relative flex items-center justify-center mt-[-80px]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="min-h-screen transition-colors duration-300">
            <div className="mx-auto max-w-xl px-4 py-20">
              <motion.header 
              initial={{opacity: 0, x:-100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}

              className="flex items-center justify-between mb-12">
                <div className="w-20 h-20 rounded-full mt-[80px] overflow-hidden">
                  {/* <Image src={pp} alt="profile picture" className="cursor-pointer transition-all duration-300 hover:scale-110"></Image> */}
                </div>

              </motion.header>

              <main className="space-y-10">

                <section className="space-y-10">

                <motion.div
                initial={{opacity: 0, x:100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                className="space-y-1"                
                >
                    <h1 className="text-3xl font-bold bg-gradient-to-r relative from-rose-600 via-black-100 to-gray-600 bg-clip-text text-transparent inline-block">
                      {/* <TextGenerateEffect2
                                  className="text-[40px] md:text-5xl lg:text-6xl uppercase mt-[-50px]"
                                  words="Thevindu Wickramaarachchi"
                                /> */}
                                THEVINDU WICKRAMAARACHCHI
                    </h1>
                    <p className="text-gray-600">
                      Undergraduate @ University of Westminster
                    </p>
                    <p className="text-gray-600">Western Province, Sri Lanka<br/>{"‎"}</p>
                    <div className="flex space-x-6">
  <Link href="#" className="text-gray-600 hover:text-black transition-colors">
    <FaGithub className="w-6 h-6" />
  </Link>
  <Link href="#" className="text-gray-600 hover:text-black transition-colors">
    <FaLinkedin className="w-6 h-6" />
  </Link>
</div>
                    
                </motion.div>

                <hr className="w-auto h-1 mx-auto my-4 bg-gray-600 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
                <motion.div
                initial={{opacity: 0, x:-100}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                className="space-y-3"       
                >
                  <p className="text-gray-600 text-sm max-w-2xl">

                  </p>
                  <p className="text-gray-600 text-justify text-sm max-w-2xl relative">
                  I’m a 20-year-old tech enthusiast with a passion for innovation and a drive to continuously push the limits of what I’ve accomplished.<br/><br/>

My journey in the tech world is fueled by a desire to not just learn but to create and contribute to meaningful projects that make a difference. I thrive on challenges and am always eager to explore new ways to apply my knowledge to solve real-world problems. As I continue to grow in this ever-evolving field, I’m excited to connect with like-minded professionals and explore opportunities that allow me to innovate and excel.<br/><br/>

Let’s connect and explore how we can collaborate in shaping the future of technology!
                  </p>
                </motion.div>


                <motion.div
                initial={{opacity: 0, x:50}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.8}}
                className="flex items-center gap-3"       
                >
                  <div className="lg:mt-[-40] mb-[10] mb-10">
                    <a href="/about"><ConnectButton title="RESUME" /></a>
                  </div>
                </motion.div>

                </section>

                <motion.section
                  initial={{ opacity: 0, y:100}}
                  animate={{ opacity: 1, y:0}}
                  transition={{ duration: 0.8 }}
                  className="space-y-9"
                >
                  <h2 className="text-2xl uppercase font-semibold bg-gradient-to-r relative from-rose-600 via-black-100 to-gray-600 bg-clip-text text-transparent inline-block">EDUCATION</h2>
                  <div className="space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Jan, 2025 - Present</p>
                        <p className="font-medium">BSc, Computer Science</p>
                        <p className="text-red-600 text-bold">University of Westminster</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm text-justify">Currently pursuing a Bachelor’s degree in Computer Science at the University of Westminster, focusing on advanced computing concepts, innovative problem-solving, and cutting-edge technologies. Excited to expand my expertise in areas such as software development, data management, and modern web technologies while collaborating with diverse peers and industry professionals to shape impactful solutions for real-world challenges.</p>
                  </div>


                  <div className="space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">Mar, 2024 - Jan, 2025</p>
                        <p className="font-medium">Dip, Software Engineering</p>
                        <p className="text-red-600 text-bold">National Institute of Business Management</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm text-justify">Completed a comprehensive curriculum in Computer Science, covering foundational and advanced topics such as Programming Fundamentals, Object-Oriented Programming, and Software Engineering. Gained hands-on experience in areas like Web Development, GUI Application Development, and Enterprise Application Development. Developed a strong understanding of core subjects including Computer Networks, Operating Systems, and Mathematics for Computing, while honing effective communication and problem-solving skills through collaborative projects like the Business Solutions Development Project.</p>
                  </div>
                </motion.section>
                
                <motion.section
                  initial={{opacity: 0, y: 100}}
                  animate={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.8 }}
                >
                  {/* <h2 className="text-2xl uppercase font-semibold bg-gradient-to-r relative from-rose-600 via-black-100 to-gray-600 bg-clip-text text-transparent inline-block mt-[5px] mb-[46px]">Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Card className="bg-gray-100 border-gray-400 transition-transform duration-300 hover:scale-105 cursor-pointer">
                      <CardContent className="p-4">
                        <Image src="" width=" " alt="project 1" className="rounded-lg mb-4"/>

                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">GradeSync</h3>
                            <p className="text-sm text-gray-600">Java, Swing, MongoDB</p>
                            <Button variant="ghost" size="icon">→</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div> */}
                  <p className="relative mt-[20px]">&copy; 2025 Thevindu Wickramaarachchi</p>
                </motion.section>
              </main>
            </div>
          </div>
    </div> 
  );
};

export default About;
