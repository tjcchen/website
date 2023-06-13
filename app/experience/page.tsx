"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Tabs, { TabData } from "@/components/tabs/Tabs";

const Experience = () => {
  const tabData: TabData[] = [
    {
      header: {
        company: "TripAdvisor",
        logo: "",
      },
      body: {
        role: "Software Engineer",
        start: "2014-06-25",
        end: "2017-06-30",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
    {
      header: {
        company: "Chaince Limited( Hong Kong )",
        logo: "",
      },
      body: {
        role: "Front-End Leader & Co-Founding Team Member",
        start: "2017-12-22",
        end: "2019-06-30",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
    {
      header: {
        company: "Baidu Inc.",
        logo: "",
      },
      body: {
        role: "Senior Software Developer",
        start: "2021-02-24",
        end: "present",
        responsibilities: [
          "Being Response for ...",
          "Lead the Developerment of ...",
        ],
      },
    },
  ];

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
