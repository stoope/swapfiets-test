import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./styles.module.css";

interface ISearchControls {
  search(value: string): void;
}

const id = "searchField";

const SearchControls = ({ search }: ISearchControls) => {
  const [value, setValue] = useState("");

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    search(value);
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <label htmlFor={id} className={styles.label}>
        Search for bikes
      </label>
      <input
        id={id}
        value={value}
        onChange={onInputChange}
        className={styles.input}
        placeholder="Enter a city name..."
      />
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  );
};

export { SearchControls };
