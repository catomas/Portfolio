import { dataPortfolio } from "@/lib/data";
import { Title } from "./title";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { buttonVariants } from "./ui/button";
import { CgLivePhoto } from "react-icons/cg";

interface ProjectsProps {
  projectsI18n: {
    title: string;
    subtitle: string;
  };
}

export const Projects = ({ projectsI18n }: ProjectsProps) => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="projects">
      <Title title={projectsI18n.title} subTitle={projectsI18n.subtitle} />

      <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataPortfolio.map((data) => (
          <div key={data.id}>
            <h3 className="text-xl mb-4">{data.title}</h3>
            <div className=" md:h-[180px]">
              <Image
                src={data.image}
                alt={data.title}
                width={700}
                height={700}
                className=" w-full  rounded-2xl"
              />
            </div>

            <div className="mt-5 flex gap-5">
              <Link
                className={buttonVariants({ variant: "outline" })}
                href={data.urlGithub}
                target="_blank"
              >
                <IoLogoGithub size={20} className="mr-2" />
                Github
              </Link>

              <Link
                className={buttonVariants()}
                href={data.urlDemo}
                target="_blank"
              >
                <CgLivePhoto size={20} className="mr-2" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
