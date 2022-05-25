import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import * as S from "./styles";

const DeveloperSetup: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  return (
    <S.Root>
      <S.Title>Development guide - setup</S.Title>
      <S.Options>
        {developerState.context.techStackFrontend === "react" && (
          <>
            <S.SubTitle>React setup</S.SubTitle>
            <p>
              You need to setup Node.js and React on your computer. For that you
              need:
            </p>
            <ul>
              <li>the Node.js runtime</li>
              <li>
                the <code>create-react-app</code> wizard - it will be
                automatically installed when running{" "}
                <code>npx create-react-app</code>
              </li>
            </ul>
            <p>Initialize the application using the following command:</p>
            <pre>
              <code>
                npx create-react-app saleor-tutorial --template typescript
              </code>
            </pre>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "nextjs" && (
          <>
            <S.SubTitle>Next.js setup</S.SubTitle>
            <p>
              You need to setup Node.js and Next.js on your computer. For that
              you need:
            </p>
            <ul>
              <li>the Node.js runtime</li>
              <li>
                the <code>create-next-app</code> wizard - it will be
                automatically installed when running{" "}
                <code>npx create-next-app</code>
              </li>
            </ul>
            <p>Initialize the application using the following command:</p>
            <pre>
              <code>npx create-next-app --typescript saleor-tutorial</code>
            </pre>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "gatsbyjs" && (
          <>
            <S.SubTitle>Gatsby.js setup</S.SubTitle>
            <p>
              You need to setup Node.js and Gatsby.js on your computer. For that
              you need:
            </p>
            <ul>
              <li>the Node.js runtime</li>
              <li>
                the <code>gatsby-cli</code> wizard - you should install it by
                running <code>npm install -g gatsby-cli</code>
              </li>
            </ul>
            <p>Initialize the application using the following command:</p>
            <pre>
              <code>gatsby new</code>
            </pre>
            <p>
              This command brings up an interactive prompt that asks you
              questions about the site you want to build. After you enter all
              the information, the CLI uses your answers to automatically
              generate your new Gatsby site.
            </p>
          </>
        )}
      </S.Options>
      <S.Actions>
        <S.LeftActions>
          <S.LeftActionItem to="/developer">
            <h2>&larr; Back</h2>
          </S.LeftActionItem>
        </S.LeftActions>
        <S.RightActions></S.RightActions>
      </S.Actions>
    </S.Root>
  );
};
export default DeveloperSetup;
