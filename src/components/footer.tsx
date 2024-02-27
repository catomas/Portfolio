import Link from "next/link";
import { Separator } from "./ui/separator";

interface FooterProps {
  footerI18n: {
    links: {
      home: string;
      aboutMe: string;
      experience: string;
      services: string;
      projects: string;
      contact: string;
    };
  };
}

export const Footer = ({ footerI18n }: FooterProps) => {
  return (
    <footer className="max-w-3xl pb-36 mx-auto">
      <div className="md:flex md:justify-between">
        <Link href="#home">
          <h4 className="text-3xl font-bold my-6 md:my-0">JC DEV</h4>
        </Link>
        <div className="px-2 flex justify-between md:gap-8 items-center">
          <Link href="#about_me">{footerI18n.links.aboutMe}</Link>
          <Link href="#experience">{footerI18n.links.experience}</Link>
          <Link href="#services">{footerI18n.links.services}</Link>
          <Link href="#projects">{footerI18n.links.projects}</Link>
          <Link href="#contact">{footerI18n.links.contact}</Link>
        </div>
      </div>
      <Separator className="my-4" />
      <div className=" text-center">&copy; 2024 | Landing Page by JC DEV</div>
    </footer>
  );
};
