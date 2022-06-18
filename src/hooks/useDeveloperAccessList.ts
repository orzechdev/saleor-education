import { useActor } from "@xstate/react";
import { useContext } from "react";
import { StateContext } from "../components/StateProvider";
import {
  DeveloperBuildPath,
  DeveloperPath,
  DeveloperSetupPath,
} from "../misc/items";
import { StorePartId, TechStackFrontendId } from "../pages/Developer/types";

interface AccessItem<T extends string | number | symbol> {
  allow: boolean;
  subAccessList?: Partial<Record<T, boolean>>;
}

type DeveloperAccessList = Record<
  DeveloperPath,
  AccessItem<DeveloperSetupPath | DeveloperBuildPath>
>;

export const useDeveloperAccessList = (): DeveloperAccessList => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  const commonAccessCheck = !!(
    developerState.context.techStackStyle &&
    developerState.context.techStackFrontend
  );

  const hasFrontendKnowledge = (techStackFrontnd?: TechStackFrontendId) =>
    !!(
      techStackFrontnd &&
      developerState.context.knowledge?.includes(techStackFrontnd)
    );

  const hasStorePart = (storePart?: StorePartId) =>
    !!(storePart && developerState.context.storePart?.includes(storePart));

  const developerSetupMenuAccessList: Record<DeveloperSetupPath, boolean> = {
    frontend:
      commonAccessCheck &&
      !hasFrontendKnowledge(developerState.context.techStackFrontend),
    "get-saleor-data": commonAccessCheck,
    "get-saleor-data-client": commonAccessCheck,
  };
  const developerBuildMenuAccessList: Record<DeveloperBuildPath, boolean> = {
    "home-showcase-page":
      commonAccessCheck && hasStorePart("home-showcase-page"),
    "product-list-page": commonAccessCheck && hasStorePart("product-list-page"),
    "product-page": commonAccessCheck && hasStorePart("product-page"),
    "category-menu": commonAccessCheck && hasStorePart("category-menu"),
    "collection-menu": commonAccessCheck && hasStorePart("collection-menu"),
    "cart-page": commonAccessCheck && hasStorePart("cart-page"),
    "checkout-page": commonAccessCheck && hasStorePart("checkout-page"),
    "order-page": commonAccessCheck && hasStorePart("order-page"),
  };
  const developerMenuAccessList: Record<
    DeveloperPath,
    AccessItem<DeveloperSetupPath | DeveloperBuildPath>
  > = {
    setup: {
      allow: commonAccessCheck,
      subAccessList: developerSetupMenuAccessList,
    },
    build: {
      allow: commonAccessCheck,
      subAccessList: developerBuildMenuAccessList,
    },
    deploy: {
      allow: commonAccessCheck,
    },
  };

  return developerMenuAccessList;
};
