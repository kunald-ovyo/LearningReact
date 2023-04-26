/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@/styles/assetDetailPage.module.css";

type Props = {
  data: any[];
  title: string;
};

function Banner(props: Props) {
  return (
    <div className={styles.assetsHorrizontalList}>
      <h1 className={styles.textTitle}>{props.title}</h1>
      <div className={styles.assetsHorrizontalListone}>
        <div className={styles.innverContainerView}>
          {props.data.map((item, index) => {
            const imageUrl = `https://image-resizer-cloud-api.akamaized.net/image/${item.id}/0-16x9.jpg?width=300`;
            return (
              <div key={imageUrl} className={styles.theAssetImageBox}>
                <img
                  className={styles.theAssetImageBox}
                  src={imageUrl}
                  alt="MDN Logo"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Banner);
