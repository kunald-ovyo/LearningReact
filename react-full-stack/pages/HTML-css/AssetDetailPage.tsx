import React from "react";
import styles from "@/styles/assetDetailPage.module.css";

function AssetDetailPage() {
  return (
    <div className={styles.baseAssignment}>
      <div className={styles.bannerView}>
        <h1 className={styles.textTitle}>checking</h1>
        <h1 className={styles.textSubtitle}> this is subtitle</h1>
        <div className={styles.buttonContainer}>
          <button>
            <div className={styles.playButton} />
          </button>
          <button>
            <div className={styles.playButton} />
          </button>
          <button>
            <div className={styles.playButton} />
          </button>
        </div>
      </div>
      <div className={styles.bottomView}></div>
    </div>
  );
}

export default AssetDetailPage;
