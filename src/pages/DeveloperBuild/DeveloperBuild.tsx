import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import { storePartList } from "../Developer/data";
import { StorePart } from "../Developer/types";
import * as S from "./styles";

const DeveloperBuild: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  const isStorePartChecked = (storePart: StorePart) => {
    return developerState.context.storePart?.includes(storePart.id);
  };
  const onStorePartChange = (storePart: StorePart) => {
    const newValue = isStorePartChecked(storePart)
      ? developerState.context.storePart?.filter(
          (item) => item !== storePart.id
        )
      : [...(developerState.context.storePart || []), storePart.id];

    globalServices.developerStateService.send({
      type: "SET_STORE_PART",
      value: newValue,
    });
  };

  return (
    <S.Root>
      <S.Title>Development guide - Build</S.Title>
      <S.Options>
        <p>What parts of the store would you like to create?</p>
        {storePartList.map((storePart) => {
          return (
            <React.Fragment key={storePart.id}>
              <input
                type="checkbox"
                name="storePart"
                value={storePart.id}
                id={`storePart-${storePart.id}`}
                checked={isStorePartChecked(storePart)}
                onChange={() => onStorePartChange(storePart)}
              />
              &nbsp;
              <label htmlFor={`storePart-${storePart.id}`}>
                {storePart.name}
              </label>
              &nbsp; &nbsp;
            </React.Fragment>
          );
        })}
      </S.Options>
      <S.Actions>
        <S.LeftActions>
          <S.LeftActionItem to="/developer/setup/get-saleor-data-client">
            <h2>&larr; Back</h2>
          </S.LeftActionItem>
        </S.LeftActions>
        <S.RightActions>
          <S.RightActionItem to="/developer/deploy">
            <h2>Next &rarr;</h2>
          </S.RightActionItem>
        </S.RightActions>
      </S.Actions>
    </S.Root>
  );
};
export default DeveloperBuild;
