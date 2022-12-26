/** @format */

import React, { useEffect, useState } from "react";
import { useAccount, useQuery } from "wagmi";
import FileCard from "../../Components/FileCard";
import { getFilesQuery } from "../../helpers/graph";
import styles from "./style.module.css";

export const FilesDisplay = () => {
  const { address } = useAccount();
  const [files, setFiles] = useState();
  useEffect(() => {
    getFilesQuery(address)
      .then((result) => {
        console.group(result);
        setFiles(result.data.files);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className={styles.outerContainer}>
        {typeof files === "undefined" && <div>No files uploaded !!!</div>}
        {files?.map((file) => (
          <FileCard key={file.name} name={file.name} cid={file.cid} />
        ))}
      </div>
    </>
  );
};
