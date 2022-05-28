import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import * as S from "./styles";

const DeveloperSetupGetSaleorDataClient: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  return (
    <S.Root>
      <S.Title>Development guide - Get data from Saleor</S.Title>
      <S.Options>
        <S.SubTitle>Adding GraphQL client to the frontend</S.SubTitle>
        {developerState.context.techStackFrontend === "react" && (
          <>
            <p>
              To get data from Saleor you need to add a GraphQL client to the
              frontend. The easiest way to do that is to use Apollo client.
            </p>
            <p>Install Apollo Client:</p>
            <pre>
              <code>npm install @apollo/client graphql</code>
            </pre>
            <p>
              Go to the <code>App.tsx</code> in project root directory and
              replce the following code:
            </p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>with:</p>
            <pre>
              <code>
                {`const client = new ApolloClient({
  uri: 'https://tutorial.saleor.cloud/graphql/',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello world!</h1>
    </ApolloProvider>
  );
};`}
              </code>
            </pre>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "nextjs" && (
          <>
            <p>
              To get data from Saleor you need to add a GraphQL client to the
              frontend. The easiest way to do that is to use Apollo client.
            </p>
            <p>Install Apollo Client:</p>
            <pre>
              <code>npm install @apollo/client graphql</code>
            </pre>
            <p>
              Go to the <code>App.tsx</code> in project root directory and
              replce the following code:
            </p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>with:</p>
            <pre>
              <code>
                {`const client = new ApolloClient({
  uri: 'https://tutorial.saleor.cloud/graphql/',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello world!</h1>
    </ApolloProvider>
  );
};`}
              </code>
            </pre>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "gatsbyjs" && (
          <>
            <p>
              To get data from Saleor you need to add a GraphQL client to the
              frontend. The easiest way to do that is to use Apollo client.
            </p>
            <p>Install Apollo Client:</p>
            <pre>
              <code>npm install @apollo/client graphql</code>
            </pre>
            <p>
              Go to the <code>App.tsx</code> in project root directory and
              replce the following code:
            </p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>with:</p>
            <pre>
              <code>
                {`const client = new ApolloClient({
  uri: 'https://tutorial.saleor.cloud/graphql/',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello world!</h1>
    </ApolloProvider>
  );
};`}
              </code>
            </pre>
          </>
        )}
      </S.Options>
      <S.Actions>
        <S.LeftActions>
          <S.LeftActionItem to="/developer/setup">
            <h2>&larr; Back</h2>
          </S.LeftActionItem>
        </S.LeftActions>
        <S.RightActions></S.RightActions>
      </S.Actions>
    </S.Root>
  );
};
export default DeveloperSetupGetSaleorDataClient;
