import { useState } from "react";
import styles from "./Tabs.module.scss";
import Image from "next/image";
import { TabData, TabHeader, TabBody } from "@/interfaces/Tabs.d";
import useIsMobile from "@/hooks/useMobile";

const Tabs = ({
  data,
  onTabClick,
}: {
  data: TabData[];
  onTabClick: () => void;
}) => {
  const [selected, setSelected] = useState(0);
  const isMobile = useIsMobile();

  const onTabHeaderClick = (index: number) => {
    if (!isMobile) {
      window.scrollTo({ top: 140, behavior: "smooth" });
      setTimeout(() => setSelected(index), 100);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className={styles.container}>
      {/* Left Tab Header */}
      <div className={styles.header}>
        {data.map((tab: TabData, index: number) => (
          <div
            key={index}
            className={`${styles.header_item} ${
              index === selected ? styles.header_item_active : ""
            }`}
            onClick={() => onTabHeaderClick(index)}
          >
            {tab?.header.logo && (
              <Image
                src={tab?.header.logo}
                alt={tab?.header.organization}
                width={80}
                height={80}
                className={styles.header_logo}
              />
            )}
            <div className={styles.header_organization}>
              {tab?.header.organization}
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
            {/* Company */}
            {tab?.body.role && <h2>Job Title: {tab?.body.role}</h2>}
            {/* Degree */}
            {tab?.body.degree && <h2>Degree: {tab?.body.degree}</h2>}
            {/* Date */}
            <div className={styles.body_item_line}>
              <strong>Date:</strong> {tab?.body.start} - {tab?.body.end}
            </div>
            {/* Responsibilities */}
            {tab?.body.responsibilities &&
              tab?.body.responsibilities.length > 0 && (
                <>
                  <div className={styles.body_item_line}>
                    <strong>Responsibilities:</strong>{" "}
                  </div>
                  <ul className={styles.body_item_list}>
                    {tab?.body.responsibilities.map(
                      (task: string, idx: number) => (
                        <li key={idx} className={styles.body_item_line}>
                          {task}
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
