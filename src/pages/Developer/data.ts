import {
  Knowledge,
  StorePart,
  TechStackFrontend,
  TechStackStyle,
} from "./types";

export const knowledgeList: Knowledge[] = [
  {
    id: "javascript",
    name: "Javascript",
  },
  {
    id: "typescript",
    name: "Typescript",
  },
  {
    id: "react",
    name: "React",
  },
  {
    id: "nextjs",
    name: "Next.js",
  },
  {
    id: "gatsbyjs",
    name: "Gatsby.js",
  },
  {
    id: "graphql",
    name: "GraphQL",
  },
];

export const techStackFrontendList: TechStackFrontend[] = [
  {
    id: "react",
    name: "React",
  },
  {
    id: "nextjs",
    name: "Next.js (recommended)",
  },
  {
    id: "gatsbyjs",
    name: "Gatsby.js",
  },
];

export const techStackStyleList: TechStackStyle[] = [
  {
    id: "css",
    name: "CSS",
  },
  {
    id: "sass",
    name: "Sass",
  },
  {
    id: "less",
    name: "Less",
  },
  {
    id: "jss",
    name: "JSS",
  },
  {
    id: "styled-components",
    name: "Styled Components",
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS (recommended)",
  },
];

export const storePartList: StorePart[] = [
  {
    id: "home-showcase-page",
    name: "Home showcase page",
  },
  {
    id: "product-list-page",
    name: "Product list page",
  },
  {
    id: "product-page",
    name: "Product page",
  },
  {
    id: "category-menu",
    name: "Category menu",
  },
  {
    id: "collection-menu",
    name: "Collection menu",
  },
  {
    id: "cart-page",
    name: "Cart page",
  },
  {
    id: "checkout-page",
    name: "Checkout page",
  },
  {
    id: "order-page",
    name: "Order page",
  },
];
