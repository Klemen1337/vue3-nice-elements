import { createGettext } from "vue3-gettext";

const gettext = createGettext({
  defaultLanguage: "en",
  mutedLanguages: ["en"],
});

export default gettext;
