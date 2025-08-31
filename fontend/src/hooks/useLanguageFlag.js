import { LANGUAGE_TO_FLAG } from "../constants";
import { useMemo } from "react";

export const useLanguageFlag = (language) => {
  const flagElement = useMemo(() => {
    if (!language) return null;

    const langLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[langLower];

    if (countryCode) {
      return (
        <img
          src={`https://flagcdn.com/24x18/${countryCode}.png`}
          alt={`${langLower} flag`}
          className="h-3 mr-1 inline-block"
        />
      );
    }
    return null;
  }, [language]);

  return flagElement;
};
