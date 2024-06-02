/* eslint-disable react/prop-types */
import { useState } from "react";

useState;
export default function ButtonContact(props) {
  let onClickButton = () => {
    props.functionClick();
  };
  return (
    <>
      <button
        onClick={onClickButton}
        className={`bg-[#ffff] p-2 md:p-3 rounded-[0.5em] hover:bg-primary `}
      >
        <div className="text-primary font-bold hover:text-secondary">
          <i className="fa-solid fa-paper-plane me-1 md:me-2"></i> Contact Me
        </div>
      </button>
    </>
  );
}
