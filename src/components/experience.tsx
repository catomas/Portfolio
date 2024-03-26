"use client";

import { dataExperience } from "@/lib/data";
import { Title } from "./title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";
import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";

interface ExperienceProps {
  experienceI18n: {
    title: string;
    subtitle: string;
  };
}

export const Experience = ({ experienceI18n }: ExperienceProps) => {
  const { ref, inView } = useInView({});

  const { setActiveId } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView) {
      setActiveId(3);
    }
  }, [inView, setActiveId]);

  return (
    <div
      className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto"
      id="experience"
      ref={ref}
    >
      <Title title={experienceI18n.title} subTitle={experienceI18n.subtitle} />

      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {dataExperience.map((data) => (
          <div key={data.id} className="p-6 rounded-xl border border-gray-400">
            <h3 className=" text-center text-lg sm:text-xl">{data.title}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {data.experience.map((exp) => (
                <div key={exp.name} className="my-4">
                  <p className="flex gap-2 mb-2 ">
                    {exp.icon ? exp.icon : <BadgeCheck />}

                    {exp.name}
                  </p>
                  <Progress value={exp.value} className="w-[60%] h-2 sm:h-3" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
