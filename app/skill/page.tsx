"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Loading from "./loading.tsx";

const Skill = () => {
  const [skillsData, setSkillsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/skill");
      const data = await response.json();
      setSkillsData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <main
      className={styles.main}
      style={{ minHeight: skillsData == null ? "5.68rem" : "auto" }}
    >
      {skillsData ? (
        <>
          {/* Page Heading */}
          {skillsData?.heading && <h1>{skillsData?.heading}</h1>}
          {/* Languages */}
          {skillsData?.skills?.languages && (
            <p>
              <strong>Languages:</strong> {skillsData?.skills?.languages}
            </p>
          )}
          {/* Framework & Libraries */}
          {skillsData?.skills?.framework && (
            <p>
              <strong>Framework & Libraries:</strong>{" "}
              {skillsData?.skills?.framework}
            </p>
          )}
          {/* Databases */}
          {skillsData?.skills?.databases && (
            <p>
              <strong>Databases:</strong> {skillsData?.skills?.databases}
            </p>
          )}
          {/* Work Env & Tools */}
          {skillsData?.skills?.tools && (
            <p>
              <strong>Work Env & Tools:</strong> {skillsData?.skills?.tools}
            </p>
          )}
          {/* English Capability */}
          {skillsData?.others?.english && (
            <h3>{skillsData?.others?.english}</h3>
          )}
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Skill;
