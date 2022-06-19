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

export type StorePartId =
  | "home-showcase-page"
  | "product-list-page"
  | "product-page"
  | "category-menu"
  | "collection-menu"
  | "cart-page"
  | "checkout-page"
  | "order-page";

export interface StorePart {
  id: StorePartId;
  name: string;
}

export type StoreFeatureId = "multi-channel" | "multi-language";

export interface StoreFeature {
  id: StoreFeatureId;
  name: string;
}
