import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Mail, Paperclip } from "lucide-react";
import { Container } from "./container";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface IntroductionProps {
  lang: string;
  introductionI18n: {
    hello: string;
    name: string;
    description: string;
    links: {
      contact: string;
      cv: string;
    };
  };
}

export const Introduction = ({ introductionI18n, lang }: IntroductionProps) => {
  const cvpdf = lang === "es" ? "cv/cv_es.pdf" : "cv/cv_en.pdf";

  return (
    <Container>
      <div id="#home" className="text-center">
        <h3 className=" text-2xl mb-3">{introductionI18n.hello}</h3>
        <h1 className=" text-4xl font-bold mb-3">{introductionI18n.name}</h1>
        <h2 className=" text-xl text-gray-400 ">
          {introductionI18n.description}
        </h2>
        <div className="flex items-center">
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
            <Link className={buttonVariants()} href="#contact">
              <Mail className="mr-2" /> {introductionI18n.links.contact}
            </Link>

            <Link
              className={buttonVariants({ variant: "secondary" })}
              href={cvpdf}
              target="_blank"
            >
              <Paperclip className="mr-2" /> {introductionI18n.links.cv}
            </Link>
          </div>
        </div>
        <div className=" justify-center items-center  flex gap-4">
          <Link href="https://github.com/catomas" target="_blank">
            <FaGithub size={30} className=" text-center mt-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juan-camilo-echeverri"
            target="_blank"
          >
            <FaLinkedin size={30} className=" text-center mt-10" />
          </Link>
        </div>
      </div>
    </Container>
  );
};
