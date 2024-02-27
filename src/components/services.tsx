"use client";

import React from "react";
import { Title } from "./title";
import { dataServices } from "@/lib/data";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";

interface ServicesProps {
  servicesI18n: {
    title: string;
    subtitle: string;
  };
}

export const Services = ({ servicesI18n }: ServicesProps) => {
  const pathName = usePathname();
  const dataServicesLang = dataServices[pathName === "/es" ? 0 : 1];

  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
      <Title title={servicesI18n.title} subTitle={servicesI18n.subtitle} />

      <div className="grid md:grid-cols-3 gap-5 mt-7">
        {dataServicesLang.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border-slate-400 border-2 p-6 bg-slate-800 h-fit"
          >
            <h4 className="mb-4 text-xl flex gap-2">
              {service.icon}
              {service.title}
            </h4>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index} className="flex gap-3 mb-3 items-center">
                  <div>
                    <Check size={20} />
                  </div>
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
