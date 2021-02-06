export interface User {
  id: number;
  name: string;
}
export interface Application {
  id: number;
  name: string;
  description: string;
  criticality: Criticality;
  language: Language;
}
export interface Enterprise {
  id: number;
  name: string;
  description: string;
  applications: Application[];
}
export enum Criticality {
  LOW,
  MEDIUM,
  HIGH,
}
export enum Language {
  JAVA,
  JAVASCRIPT,
  PHP,
}
