/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "@/styles/assetDetailPage.module.css";
import UsehomeScreenCase from "@/domain/customhooks/HomeScreenUseCase";
import Banner from "@/CustomComponents/Banner";

function AssetDetailPage() {
  const [homeScreenData, getNextPageAssets] = UsehomeScreenCase();
  return (
    <div className={styles.baseAssignment}>
      {homeScreenData !== undefined ? (
        <div className={styles.fullpage}>
          <div className={styles.bannerView}>
            <img
              className={styles.previewImage}
              src="https://cdn.pixabay.com/photo/2022/08/28/01/40/cyberpunk-city-7415576_1280.jpg"
              alt="MDN Logo"
            />
            <div className={styles.overlayControls}>
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
          </div>
          {homeScreenData.allAssetsData.map((element: any, index: any) => {
            return (
              <Banner
                key={`carousal_${index}`}
                data={element.data}
                title={element.name[0].n}
              />
            );
          })}
          <div className={styles.assetsHorrizontalList}>
            <h1 className={styles.textTitle}>checking</h1>
            <div className={styles.assetsHorrizontalListone}>
              <div className={styles.innverContainerView}>
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
                <div className={styles.circleImage} />
              </div>
            </div>
            <div>
              <h1 className={styles.textTitle}>ABOUT</h1>
              <p className={styles.pageDescription}>
                Breaqking bad- Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nobis ea eum accusamus et quam, voluptatibus
                facilis, natus quibusdam beatae nisi in tenetur a quia, eos
                commodi! Fugiat sunt tempora vero.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}

export default AssetDetailPage;
