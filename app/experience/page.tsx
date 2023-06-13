"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Tabs, { TabData } from "@/components/tabs/Tabs";

const Experience = () => {
  const tabData: TabData = {
    header: ["TripAdvisor", "Chaince Limited (Hong Kong)", "Baidu Inc."],
    body: [],
  };

  return (
    <div className={styles.main}>
      <Tabs
        data={tabData}
        onTabClick={() => {
          console.log("aaa");
        }}
      />
    </div>
  );
};

export default Experience;
