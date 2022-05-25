import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import {
  knowledgeList,
  techStackFrontendList,
  techStackStyleList,
} from "./data";
import * as S from "./styles";
import { Knowledge, TechStackFrontendId, TechStackStyleId } from "./types";

const Developer: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  const isKnowledgeChecked = (knowledge: Knowledge) => {
    return developerState.context.knowledge?.includes(knowledge.id);
  };
  const isTechStackFrontendChecked = (techStack: TechStackFrontendId) => {
    return developerState.context.techStackFrontend === techStack;
  };
  const isTechStackStyleChecked = (techStack: TechStackStyleId) => {
    return developerState.context.techStackStyle === techStack;
  };

  const onKnowledgeChange = (knowledge: Knowledge) => {
    const newValue = isKnowledgeChecked(knowledge)
      ? developerState.context.knowledge?.filter(
          (item) => item !== knowledge.id
        )
      : [...(developerState.context.knowledge || []), knowledge.id];

    globalServices.developerStateService.send({
      type: "SET_KNOWLEDGE",
      value: newValue,
    });
  };
  const onTechStackFrontendChange = (techStack: TechStackFrontendId) => {
    globalServices.developerStateService.send({
      type: "SET_TECH_STACK_FRONTEND",
      value: techStack,
    });
  };
  const onTechStackStyleChange = (techStack: TechStackStyleId) => {
    globalServices.developerStateService.send({
      type: "SET_TECH_STACK_STYLE",
      value: techStack,
    });
  };

  const canGoNext =
    developerState.context.techStackStyle &&
    developerState.context.techStackFrontend;

  return (
    <S.Root>
      <S.Title>Development guide</S.Title>
      <S.Options>
        <p>What do you already know?</p>
        {knowledgeList.map((knowledge) => {
          return (
            <React.Fragment key={knowledge.id}>
              <input
                type="checkbox"
                name="knowledge"
                value={knowledge.id}
                id={`knowledge-${knowledge.id}`}
                checked={isKnowledgeChecked(knowledge)}
                onChange={() => onKnowledgeChange(knowledge)}
              />
              &nbsp;
              <label htmlFor={`knowledge-${knowledge.id}`}>
                {knowledge.name}
              </label>
              &nbsp; &nbsp;
            </React.Fragment>
          );
        })}
      </S.Options>
      <S.Options>
        <p>What frontend technology do you want to use?</p>
        {techStackFrontendList.map((techStackFrontend) => (
          <React.Fragment key={techStackFrontend.id}>
            <input
              type="radio"
              name="tech-stack-frontend"
              value={techStackFrontend.id}
              id={`tech-stack-frontend-${techStackFrontend.id}`}
              checked={isTechStackFrontendChecked(techStackFrontend.id)}
              onChange={() => onTechStackFrontendChange(techStackFrontend.id)}
            />
            &nbsp;
            <label htmlFor={`tech-stack-frontend-${techStackFrontend.id}`}>
              {techStackFrontend.name}
            </label>
            &nbsp; &nbsp;
          </React.Fragment>
        ))}
      </S.Options>
      <S.Options>
        <p>What styling technology do you want to use?</p>
        {techStackStyleList.map((techStackStyle) => (
          <React.Fragment key={techStackStyle.id}>
            <input
              type="radio"
              name="tech-stack-style"
              value={techStackStyle.id}
              id={`tech-stack-style-${techStackStyle.id}`}
              checked={isTechStackStyleChecked(techStackStyle.id)}
              onChange={() => onTechStackStyleChange(techStackStyle.id)}
            />
            &nbsp;
            <label htmlFor={`tech-stack-style-${techStackStyle.id}`}>
              {techStackStyle.name}
            </label>
            &nbsp; &nbsp;
          </React.Fragment>
        ))}
      </S.Options>
      <S.Actions>
        <S.LeftActions></S.LeftActions>
        <S.RightActions>
          {canGoNext && (
            <S.RightActionItem to="/developer/setup">
              <h2>Next &rarr;</h2>
            </S.RightActionItem>
          )}
        </S.RightActions>
      </S.Actions>
    </S.Root>
  );
};
export default Developer;
