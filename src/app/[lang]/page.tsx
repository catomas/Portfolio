import { Cover } from "@/components/cover";
import { Introduction } from "@/components/introduction";
import { Navbar } from "@/components/navbar";
import { Locale } from "../../i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "@/components/locale-switcher";
import { AboutMe } from "@/components/about_me";
import { Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { component } = await getDictionary(lang);

  return (
    <>
      <div className="h-[100vh]">
        <LocaleSwitcher />
        <Navbar />
        <Introduction lang={lang} introductionI18n={component.introduction} />
        <AboutMe aboutMeI18n={component.aboutMe} />
        <Experience experienceI18n={component.experience} />
        <Services servicesI18n={component.services} />
        <Projects projectsI18n={component.projects} />
        <Contact contactI18n={component.contact} />
        <Footer footerI18n={component.footer} />
        <Cover />
      </div>
    </>
  );
}
