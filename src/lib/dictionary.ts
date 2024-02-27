import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  es: () => import("@/i18n/es.json").then((module) => module.default),
  en: () => import("@/i18n/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
