import Image from "next/image";
import { BikeDetails } from "../../types";
import bike from "../../public/images/bike.svg";
import styles from "./styles.module.css";

interface IBikeDetails {
  bike: BikeDetails;
}

const BikeDetailsComponent = ({
  bike: {
    title,
    description,
    large_img,
    frame_material_slug,
    frame_model,
    frame_size,
    manufacturer_name,
    name,
    year,
  },
}: IBikeDetails) => {
  return (
    <main className={styles.container}>
      <div className={styles["bike-image"]}>
        <Image
          unoptimized
          src={large_img ?? bike}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.details}>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <dl>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Name:</strong>
            </dt>
            <dt className={styles["detail-value"]}>{name ?? "-"}</dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Year:</strong>
            </dt>
            <dt className={styles["detail-value"]}>{year ?? "-"}</dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Status:</strong>
            </dt>
            <dt className={styles["detail-value"]}>{year ?? "-"}</dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Frame size:</strong>
            </dt>
            <dt className={styles["detail-value"]}>{frame_size ?? "-"}</dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Frame material:</strong>
            </dt>
            <dt className={styles["detail-value"]}>
              {frame_material_slug ?? "-"}
            </dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Frame model:</strong>
            </dt>
            <dt className={styles["detail-value"]}>{frame_model ?? "-"}</dt>
          </div>
          <div className={styles.detail}>
            <dt className={styles["detail-name"]}>
              <strong>Manufacturer name:</strong>
            </dt>
            <dt className={styles["detail-value"]}>
              {manufacturer_name ?? "-"}
            </dt>
          </div>
        </dl>
      </div>
    </main>
  );
};

export { BikeDetailsComponent };
