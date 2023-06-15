"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Tabs, { TabData } from "@/components/tabs/Tabs";
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
    <div className={styles.main}>
      {tabData.length > 0 && (
        <div className={styles.caption}>
          CLICK ON THE COMPANY LOGO TO SEE MORE INTRO:
        </div>
      )}
      <div className={styles.container}>
        {tabData.length === 0 ? (
          <Loading />
        ) : (
          <Tabs data={tabData} onTabClick={() => {}} />
        )}
      </div>
    </div>
  );
};

export default Experience;
