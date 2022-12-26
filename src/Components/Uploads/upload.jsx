/** @format */

// import React from "react";

// import * as PushAPI from "@pushprotocol/restapi";
import styles from "./style.module.css";
import React, { useState } from "react";
function NewUpload({ onOpen }) {
  return (
    <>
      <button onClick={onOpen} className={styles.uploadBtn}>
        Upload
      </button>
    </>
  );
}

export default NewUpload;
