/* eslint-disable react/prop-types */
import { useState } from "react";

useState;
export default function ButtonDownloadCv(props) {
  let onClickButton = () => {
    props.functionClick();
  };
  return (
    <>
      <button
        onClick={onClickButton}
        className={`bg-primary p-2 md:p-3 rounded-[0.5em] hover:bg-secondary hover:text-primary`}
      >
        <div className="font-bold">
          <i className="fa-solid fa-file me-1 md:me-2"> </i> Downlaod CV
        </div>
      </button>
    </>
  );
}
