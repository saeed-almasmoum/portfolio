"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Informatics Engineer & Security Enthusiast</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">
                Mohammed Saeed <br /> Al Masmoum
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am an Informatics Engineer and Junior Penetration Tester combining a strong 
              background in Laravel/PHP back-end engineering with hands-on web application 
              security auditing, vulnerability assessment, and secure code implementation.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/Mohammad_Saeed_Almasmom_CV_EN.pdf"
                download="Mohammad_Saeed_Almasmom_CV_EN.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
