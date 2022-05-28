export type KnowledgeId =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "gatsbyjs"
  | "graphql";

export interface Knowledge {
  id: KnowledgeId;
  name: string;
}

export type TechStackFrontendId = "react" | "nextjs" | "gatsbyjs";

export interface TechStackFrontend {
  id: TechStackFrontendId;
  name: string;
}

export type TechStackStyleId =
  | "css"
  | "sass"
  | "less"
  | "jss"
  | "styled-components"
  | "tailwind-css";

export interface TechStackStyle {
  id: TechStackStyleId;
  name: string;
}
