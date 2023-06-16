/**
 * Types for Tabs
 * 
 * @author Andy Chen
 */

export declare interface TabHeader {
  organization: string;
  logo?: string;
}

export declare interface TabBody {
  role?: string;
  degree?: string;
  start: string;
  end: string;
  responsibilities: string[];
}

export declare interface TabData {
  header: TabHeader;
  body: TabBody;
}