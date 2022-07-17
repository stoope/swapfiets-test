import Image from "next/image";
import Link from "next/link";
import { Bike } from "../../types";
import styles from "./styles.module.css";
import bike from "../../public/images/bike.svg";

interface IBikes {
  bikes: Bike[];
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage(): void;
  prevPage(): void;
}

const Bikes = ({
  bikes,
  hasPrevPage,
  hasNextPage,
  nextPage,
  prevPage,
}: IBikes) => {
  return (
    <div className={styles.container}>
      <ul className={styles.bikes}>
        {bikes.map(({ id, thumb, title }) => (
          <li key={id} className={styles.bike}>
            <div className={styles["bike-thumb"]}>
              <Image
                unoptimized
                src={thumb ?? bike}
                alt={title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h5 className={styles["bike-title"]}>{title}</h5>
            <Link
              className={styles["bike-link"]}
              href={`/bike/${encodeURIComponent(id)}`}
            >
              <a>Details</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button
          className={styles["control-button"]}
          onClick={prevPage}
          disabled={!hasPrevPage}
        >
          Prev page
        </button>
        <button
          className={styles["control-button"]}
          onClick={nextPage}
          disabled={!hasNextPage}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export { Bikes };
