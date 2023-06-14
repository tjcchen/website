import { useState } from "react";
import styles from "./Tabs.module.scss";
import Image from "next/image";

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

  return (
    <div className={styles.container}>
      {/* Left Tab Header */}
      <div className={styles.header}>
        {data.map((tab: TabData, index: number) => (
          <div
            key={index}
            className={styles.header_item}
            onClick={() => {
              window.scrollTo({ top: 140, behavior: "smooth" });
              setTimeout(() => setSelected(index), 100);
            }}
          >
            <Image
              src={tab?.header.logo}
              alt={tab?.header.company}
              width={80}
              height={80}
              className={styles.header_item_logo}
            />
            <div className={styles.header_item_company}>
              {tab?.header.company}
            </div>
          </div>
        ))}
      </div>
      {/* Right Tab Body */}
      <div className={styles.body}>
        {data.map((tab: TabData, index: number) => (
          <div
            key={index}
            className={styles.body_item}
            style={{ display: selected === index ? "block" : "none" }}
          >
            <div>Job Title: {tab?.body.role}</div>
            <div className={styles.body_item_line}>
              Date: {tab?.body.start} - {tab?.body.end}
            </div>
            <div className={styles.body_item_line}>Responsibilities: </div>
            <ul className={styles.body_item_list}>
              {tab?.body.responsibilities.map((task: string, idx: number) => (
                <li key={idx} className={styles.body_item_line}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
