import { PropsWithChildren } from "react";
import styles from "./Error.module.css";

function Error({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}

export { Error };
