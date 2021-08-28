import styles from "./App.module.css";

import rosetta from "rosetta";

const i18n = new rosetta({
  en: {
    hello: "Hello world!",
  },
});

i18n.locale("en");

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>{i18n.t("hello")}</header>
    </div>
  );
}

export default App;
