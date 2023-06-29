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
  is_company: number;
  role?: string;
  organization: string;
  degree?: string;
  certificate?: string;
  school?: string;
  major?: string;
  start: string;
  end: string;
  location: string;
  introduction?: string;
  miscellaneous?: string;
  responsibilities?: string[];
}

export declare interface TabData {
  header: TabHeader;
  body: TabBody;
}