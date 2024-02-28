"use client";

import { i18n } from "@/i18n.config";

import { usePathname, useRouter } from "next/navigation";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { useCallback, useEffect, useState } from "react";

const LocaleSwitcher = () => {
  const pathName = usePathname();
  const router = useRouter();
  const currentLocale = pathName.split("/")[1];

  const [selectedLocale, setSelectedLocale] = useState(currentLocale || "en");

  const redirectedPathName = useCallback(
    (locale: string) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    },
    [pathName]
  );

  useEffect(() => {
    router.push(redirectedPathName(selectedLocale));
  }, [selectedLocale, router, redirectedPathName]);

  return (
    <div className="flex  justify-center items-center  sm:justify-end mt-10 mx-10  ">
      <div>
        <Select value={selectedLocale} onValueChange={setSelectedLocale}>
          <SelectTrigger className=" mr-3">
            <SelectValue defaultValue={selectedLocale} />
          </SelectTrigger>
          <SelectContent>
            {i18n.locales.map((locale) => {
              return (
                <SelectItem key={locale} value={locale}>
                  {locale === "es" ? "Español" : "English"}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
