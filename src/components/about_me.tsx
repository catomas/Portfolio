"use client";
import { dataAboutMe } from "@/lib/data";
import { Title } from "./title";
import { usePathname } from "next/navigation";
import { TextRevealCard } from "./ui/text-reveal-card";
import { FiInstagram } from "react-icons/fi";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AboutMeProps {
  aboutMeI18n: {
    title: string;
    subtitle: string;
    description: string;
    advertisement: string;
    advertisementHide: string;
    advertisementShow: string;
  };
}

export const AboutMe = ({ aboutMeI18n }: AboutMeProps) => {
  const pathName = usePathname();
  const dataAboutMeLang = dataAboutMe[pathName === "/es" ? 0 : 1];

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { setActiveId } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView) {
      setActiveId(2);
    }
  }, [inView, setActiveId]);

  return (
    <div
      className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto"
      ref={ref}
      id="about_me"
    >
      <Title title={aboutMeI18n.title} subTitle={aboutMeI18n.subtitle} />

      <div className="grid md:grid-cols-3 mt-7  gap-4">
        {dataAboutMeLang.map((data) => (
          <div
            key={data.id}
            className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 bg-slate-800"
          >
            {data.icon}
            <p className="my-2">{data.name}</p>
            <p className="text-gray-400">{data.description}</p>
          </div>
        ))}
      </div>
      <p className="my-8 italic text-base sm:text-lg text-gray-300 text-center">
        &quot;{aboutMeI18n.description}&quot;
      </p>
      <div className="flex items-center justify-center">
        <TextRevealCard
          className=" mt-7 "
          text={aboutMeI18n.advertisementHide}
          revealText={aboutMeI18n.advertisementShow}
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className=" text-lg  sm:text-2xl">
              {aboutMeI18n.advertisement} 📢🤭
            </h2>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/contar_arte/"
                target="_blank"
              >
                <FiInstagram size={30} />
              </Link>
              <Link
                href="https://open.spotify.com/show/2zEb2x6P50QQ07vzI9gbaZ?si=6ce8d3fbf7184ea7"
                target="_blank"
              >
                <FaSpotify size={30} />
              </Link>
              <Link href="https://www.youtube.com/@ContArte4" target="_blank">
                <FaYoutube size={30} />
              </Link>
            </div>
          </div>
        </TextRevealCard>
      </div>
    </div>
  );
};
