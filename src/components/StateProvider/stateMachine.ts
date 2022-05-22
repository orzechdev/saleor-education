import { createMachine, assign } from "xstate";
import {
  KnowledgeId,
  TechStackFrontendId,
  TechStackStyleId,
} from "../../pages/Developer/types";

export type DeveloperStateContext = {
  knowledge?: KnowledgeId[];
  techStackFrontend?: TechStackFrontendId;
  techStackStyle?: TechStackStyleId;
};

export const developerStateMachine = createMachine(
  {
    id: "state",
    type: "parallel",
    schema: {
      context: {} as DeveloperStateContext,
      events: {} as
        | {
            type: "SET_KNOWLEDGE";
            value?: KnowledgeId[];
          }
        | {
            type: "SET_TECH_STACK_FRONTEND";
            value?: TechStackFrontendId;
          }
        | {
            type: "SET_TECH_STACK_STYLE";
            value?: TechStackStyleId;
          },
    },
    states: {
      knowledge: {
        id: "knowledge",
        initial: "start",
        type: "parallel",
        states: {
          start: {
            on: {
              SET_KNOWLEDGE: {
                target: "start",
                actions: "setKnowledge",
              },
            },
          },
        },
      },
      techStackFrontend: {
        id: "techStackFrontend",
        initial: "start",
        type: "parallel",
        states: {
          start: {
            on: {
              SET_TECH_STACK_FRONTEND: {
                target: "start",
                actions: "setTechStackFrontend",
              },
            },
          },
        },
      },
      techStackStyle: {
        id: "techStackStyle",
        initial: "start",
        type: "parallel",
        states: {
          start: {
            on: {
              SET_TECH_STACK_STYLE: {
                target: "start",
                actions: "setTechStackStyle",
              },
            },
          },
        },
      },
    },
  },
  {
    actions: {
      setKnowledge: assign({
        knowledge: (context, event) =>
          event.type !== "SET_KNOWLEDGE" ? context.knowledge : event.value,
      }),
      setTechStackFrontend: assign({
        techStackFrontend: (context, event) =>
          event.type !== "SET_TECH_STACK_FRONTEND"
            ? context.techStackFrontend
            : event.value,
      }),
      setTechStackStyle: assign({
        techStackStyle: (context, event) =>
          event.type !== "SET_TECH_STACK_STYLE"
            ? context.techStackStyle
            : event.value,
      }),
    },
  }
);
