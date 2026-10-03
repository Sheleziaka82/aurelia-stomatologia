import { useSyncExternalStore } from "react";
import { LANG_KEY, langs, type Lang } from "./data";
import { copy } from "./copy";

let lang: Lang = "pl";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function readStored(): Lang {
  if (typeof window === "undefined") return "pl";
  const raw = window.localStorage.getItem(LANG_KEY);
  return langs.includes(raw as Lang) ? (raw as Lang) : "pl";
}

export function getLang(): Lang {
  return lang;
}

export function setLang(next: Lang) {
  lang = next;
  if (typeof window !== "undefined") window.localStorage.setItem(LANG_KEY, next);
  emit();
}

export function hydrateLang() {
  const stored = readStored();
  if (stored !== lang) {
    lang = stored;
    emit();
  }
}

export function subscribeLang(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useLang(): Lang {
  return useSyncExternalStore(subscribeLang, getLang, () => "pl");
}

export function useCopy() {
  const current = useLang();
  return copy[current];
}
