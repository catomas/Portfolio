"use client";

import { dataContact } from "@/lib/data";
import { Title } from "./title";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ContactProps {
  contactI18n: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
    toast: {
      success: {
        title: string;
        description: string;
      };
      error: {
        title: string;
        description: string;
      };
    };
  };
}

export const Contact = ({ contactI18n }: ContactProps) => {
  const { ref, inView } = useInView({});

  const { setActiveId } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (inView) {
      setActiveId(6);
    }
  }, [inView, setActiveId]);

  return (
    <div
      className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto"
      id="contact"
      ref={ref}
    >
      <Title title={contactI18n.title} subTitle={contactI18n.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
        <div>
          {dataContact.map((data) => (
            <Link
              href={data.link}
              target="_blank"
              className=" flex flex-col items-center bg-slate-800 rounded-lg mb-5 p-4"
              key={data.id}
            >
              {data.icon}
              <p>{data.title}</p>
              <p>{data.subtitle}</p>
            </Link>
          ))}
        </div>
        <div className="col-span-2">
          <ContactForm
            formI18n={contactI18n.form}
            toastI18n={contactI18n.toast}
          />
        </div>
      </div>
    </div>
  );
};
