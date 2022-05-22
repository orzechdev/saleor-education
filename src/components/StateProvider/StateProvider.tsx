import React, { createContext, PropsWithChildren, useEffect } from "react";
import { useInterpret } from "@xstate/react";
import { developerStateMachine } from "./stateMachine";
import { InterpreterFrom } from "xstate";
import { getLocalStorageItem, setLocalStorageItem } from "../../misc/utils";

export const StateContext = createContext({
  developerStateService: {} as InterpreterFrom<typeof developerStateMachine>,
});

const StateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const developerStateService = useInterpret(
    developerStateMachine.withContext(getLocalStorageItem("stateDeveloper"))
  );

  useEffect(() => {
    const subscription = developerStateService.subscribe((state) => {
      setLocalStorageItem("stateDeveloper", state.context);
    });

    return subscription.unsubscribe;
  }, [developerStateService]);

  return (
    <StateContext.Provider value={{ developerStateService }}>
      {props.children}
    </StateContext.Provider>
  );
};
export default StateProvider;
