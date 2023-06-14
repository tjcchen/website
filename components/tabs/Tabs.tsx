import { useEffect, useState } from "react";
import styles from "./Tabs.module.scss";

export interface TabHeader {
  company: string;
  logo?: string;
}

export interface TabBody {
  role: string;
  start: string;
  end: string;
  responsibilities: string[];
}

export interface TabData {
  header: TabHeader;
  body: TabBody;
}

const Tabs = ({
  data,
  onTabClick,
}: {
  data: TabData[];
  onTabClick: () => void;
}) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {data.map((tab: TabData, index: number) => (
          <div
            key={index}
            className={styles.header_item}
            onClick={() => {
              setSelected(index);
            }}
          >
            {tab?.header.company}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        {data.map((tab: TabData, index: number) => (
          <div
            key={index}
            className={styles.body_item}
            style={{ display: selected === index ? "block" : "none" }}
          >
            <div>Job Title: {tab?.body.role}</div>
            <div>Date: {tab?.body.start} - {tab?.body.end}</div>
            {tab?.body.responsibilities.map((task: string, idx: number) => (
              <div key={idx}>{task}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
