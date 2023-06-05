import React from "react";
import video from "./video.mp4";
import style from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  return (
    <div className={style.videoContainer}>
      <div className={style.overlay}></div>
      <video src={video} autoPlay loop muted />
      <div className={style.content}>
        <h6>NEW ARRIVALS</h6>
        <h2 className=".col-fs-3 .col-sm-fs-3">Autumn is Coming</h2>
        <p>The 11 Biggest Autumn/Winter 2023 Trends</p>
        <p>BY VINOVATHEME</p>
        <p>
          {day} {month} {year}
        </p>
        <button>
          View More{" "}
          <span className={style.btnArrow}>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
