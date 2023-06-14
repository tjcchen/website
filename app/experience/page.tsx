"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Tabs, { TabData } from "@/components/tabs/Tabs";

const Experience = () => {
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/experience", { cache: "no-cache" });
      const data = await response.json();
      setTabData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {tabData.length !== 0 ? (
        <Tabs
          data={tabData}
          onTabClick={() => {}}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Experience;
