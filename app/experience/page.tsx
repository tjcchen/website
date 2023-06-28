"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Tabs from "@/components/tabs/Tabs";
import Loading from "./loading";

const Experience = () => {
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/experience");
      const data = await response.json();
      setTabData(data);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {tabData.length > 0 && (
        <h1 className={styles.caption}>TAP ON THE COMPANY TO SEE MORE INTRODUCTION</h1>
      )}
      <div className={styles.container}>
        {/* <Loading /> */}
        {tabData.length === 0 ? (
          <Loading />
        ) : (
          <Tabs data={tabData} onTabClick={() => {}} />
        )}
      </div>
    </main>
  );
};

export default Experience;
