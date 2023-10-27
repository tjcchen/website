import { useState } from "react";
import styles from "./Tabs.module.scss";
import Image from "next/image";
import { TabData, TabHeader, TabBody } from "@/interfaces/Tabs";
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
            {/* Role */}
            {tab?.body.role && (
              <p
                className={`${styles.body_item_line} ${styles.body_item_large}`}
              >
                <strong>JOB ROLE:</strong> {tab?.body.role}
              </p>
            )}
            {/* Organization */}
            {tab?.body.is_company ? (
              <p className={`${styles.body_item_line}`}>
                <strong>COMPANY:</strong> {tab?.body.organization}
              </p>
            ) : (
              <p className={`${styles.body_item_line} ${styles.body_item_large}`}>
                <strong>INSTITUTION:</strong> {tab?.body.organization}
              </p>
            )}
            {/* School */}
            {tab?.body.school && (
              <p className={styles.body_item_line}>
                <strong>SCHOOL:</strong> {tab?.body.school}
              </p>
            )}
            {/* Major */}
            {tab?.body.major && (
              <p className={styles.body_item_line}>
                <strong>MAJOR:</strong> {tab?.body.major}
              </p>
            )}
            {/* Degree */}
            {tab?.body.degree && (
              <p className={styles.body_item_line}>
                <strong>DEGREE:</strong> {tab?.body.degree}
              </p>
            )}
            {/* Certificate */}
            {tab?.body.certificate && (
              <p className={styles.body_item_line}>
                <strong>CERTIFICATE:</strong> {tab?.body.certificate}
              </p>
            )}
            {/* Location */}
            {tab?.body.location && (
              <p className={styles.body_item_line}>
                <strong>LOCATION:</strong> {tab?.body.location}
              </p>
            )}
            {/* Date */}
            {tab?.body.start && tab?.body.end && (
              <p className={styles.body_item_line}>
                <strong>DATE:</strong> {tab?.body.start} - {tab?.body.end}
              </p>
            )}
            {/* Brief Introduction */}
            {tab?.body.introduction && (
              <>
                <div className={styles.body_item_line_medium}>
                  <strong>BRIEF COMPANY INTRODUCTION:</strong>{" "}
                </div>
                <p className={styles.body_item_line}>
                  {tab?.body.introduction}
                </p>
              </>
            )}
            {/* Miscellaneous */}
            {tab?.body.miscellaneous && (
              <>
                <div className={styles.body_item_line_medium}>
                  <strong>ADDITIONAL INFORMATION:</strong>{" "}
                </div>
                <p className={styles.body_item_line}>
                  {tab?.body.miscellaneous}
                </p>
              </>
            )}
            {/* Responsibilities */}
            {tab?.body.responsibilities &&
              tab?.body.responsibilities.length > 0 && (
                <>
                  <div className={styles.body_item_line_medium}>
                    <strong>RESPONSIBILITIES:</strong>{" "}
                  </div>
                  <ul className={styles.body_item_list}>
                    {tab?.body.responsibilities.map(
                      (task: string, idx: number) => (
                        <li key={idx} className={styles.body_item_dotted}>
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
