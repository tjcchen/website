/**
 * Types for SkillData
 *
 * @author Andy Chen
 */

export declare interface Skills {
  languages?: string;
  framework?: string;
  databases?: string;
  tools?: string;
}

export declare interface Others {
  english?: string;
}

export declare interface SkillData {
  heading: string;
  skills: Skills;
  others: Others;
}
