"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Loading from "./loading";
import { SkillData } from "@/interfaces/SkillData";

const Skill = () => {
  const [skillData, setSkillData] = useState<SkillData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/skill");
      const data = await response.json();
      setSkillData(data);
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      {skillData ? (
        <>
          {/* Page Heading */}
          {skillData?.heading && <h1>{skillData?.heading}</h1>}
          {/* Languages */}
          {skillData?.skills?.languages && (
            <p>
              <strong>Languages:</strong> {skillData?.skills?.languages}
            </p>
          )}
          {/* Framework & Libraries */}
          {skillData?.skills?.framework && (
            <p>
              <strong>Framework & Libraries:</strong>{" "}
              {skillData?.skills?.framework}
            </p>
          )}
          {/* Databases */}
          {skillData?.skills?.databases && (
            <p>
              <strong>Databases:</strong> {skillData?.skills?.databases}
            </p>
          )}
          {/* Work Env & Tools */}
          {skillData?.skills?.tools && (
            <p>
              <strong>Work Env & Tools:</strong> {skillData?.skills?.tools}
            </p>
          )}
          {/* English Capability */}
          {skillData?.others?.english && (
            <h3>{skillData?.others?.english}</h3>
          )}
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
};

export default Skill;
