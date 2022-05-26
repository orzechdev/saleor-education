import { useActor } from "@xstate/react";
import React, { useContext } from "react";
import { StateContext } from "../../components/StateProvider";
import * as S from "./styles";

const DeveloperSetupFrontend: React.FC = () => {
  const globalServices = useContext(StateContext);
  const [developerState] = useActor(globalServices.developerStateService);

  return (
    <S.Root>
      <S.Title>Development guide - setup frontend</S.Title>
      <S.Options>
        {developerState.context.techStackFrontend === "react" && (
          <>
            <p>
              We encourage you to learn React from it's official guide{" "}
              <a href="https://beta.reactjs.org/learn">here</a>. But if you want
              to proceed we will explain everyting what we do and what is
              specific to React, so you can start with Saleor and go back to
              React guides later to learn more.
            </p>
            <S.SubTitle>What is React?</S.SubTitle>
            <p>
              React is a JavaScript library for building user interfaces. It is
              maintained by Facebook and a community of individual developers
              and companies. React can be used as a base in the development of
              single-page or mobile applications. However, React can also be
              used in the development of larger web applications.
            </p>
            <S.SubTitle>React project</S.SubTitle>
            <p>
              From the previous section, you should have created a React
              project. You can run it using the following command:
            </p>
            <pre>
              <code>npm start</code>
            </pre>
            <p>
              It will run the project under <code>http://localhost:3000</code>{" "}
              address, which you can copy and paste to your browser address bar
              so you will see your website.
            </p>
            <p>The project has the following structure:</p>
            <pre>
              <code>
                {`src/
    components/
    pages/
    routes.tsx
    App.tsx
    index.tsx
    index.css`}
              </code>
            </pre>
            <p>
              The <code>App.tsx</code> is the entry point of the application.
              You can modify it, save the file and changes will be reflected in
              the browser automatically.
            </p>
            <p>
              For example you can modify the <code>App.tsx</code> from:
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
            <p>to:</p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello my website!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>
              <code>Hello my website!</code> text should be now visible in the
              browser.
            </p>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "nextjs" && (
          <>
            <p>
              We encourage you to learn Next.js from it's official guide{" "}
              <a href="https://nextjs.org/learn/foundations/about-nextjs">
                here
              </a>
              . But if you want to proceed we will explain everyting what we do
              and what is specific to Next.js, so you can start with Saleor and
              go back to Next.js guides later to learn more.
            </p>
            <S.SubTitle>What is Next.js?</S.SubTitle>
            <p>
              Next.js is a JavaScript library for building user interfaces. It
              is maintained by Vercel and a community of individual developers
              and companies. Next.js can be used as a base in the development of
              single-page or mobile applications. However, Next.js can also be
              used in the development of larger web applications.
            </p>
            <S.SubTitle>Next.js project</S.SubTitle>
            <p>
              From the previous section, you should have created a Next.js
              project. You can run it using the following command:
            </p>
            <pre>
              <code>npm run dev</code>
            </pre>
            <p>
              It will run the project under <code>http://localhost:3000</code>{" "}
              address, which you can copy and paste to your browser address bar
              so you will see your website.
            </p>
            <p>The project has the following structure:</p>
            <pre>
              <code>
                {`src/
    components/
    pages/
    routes.tsx
    App.tsx
    index.tsx
    index.css`}
              </code>
            </pre>
            <p>
              The <code>App.tsx</code> is the entry point of the application.
              You can modify it, save the file and changes will be reflected in
              the browser automatically.
            </p>
            <p>
              For example you can modify the <code>App.tsx</code> from:
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
            <p>to:</p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello my website!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>
              <code>Hello my website!</code> text should be now visible in the
              browser.
            </p>
          </>
        )}
      </S.Options>
      <S.Options>
        {developerState.context.techStackFrontend === "gatsbyjs" && (
          <>
            <p>
              We encourage you to learn Gatsby.js from it's official guide{" "}
              <a href="https://www.gatsbyjs.com/docs/tutorial/">here</a>. But if
              you want to proceed we will explain everyting what we do and what
              is specific to Gatsby.js, so you can start with Saleor and go back
              to Gatsby.js guides later to learn more.
            </p>
            <S.SubTitle>What is Gatsby.js?</S.SubTitle>
            <p>
              Gatsby.js is a JavaScript library for building user interfaces. It
              is maintained by Gatsby and a community of individual developers
              and companies. Gatsby.js can be used as a base in the development
              of single-page or mobile applications. However, Gatsby.js can also
              be used in the development of larger web applications.
            </p>
            <S.SubTitle>Gatsby.js project</S.SubTitle>
            <p>
              From the previous section, you should have created a Gatsby.js
              project. You can run it using the following command:
            </p>
            <pre>
              <code>gatsby start</code>
            </pre>
            <p>
              It will run the project under <code>http://localhost:3000</code>{" "}
              address, which you can copy and paste to your browser address bar
              so you will see your website.
            </p>
            <p>The project has the following structure:</p>
            <pre>
              <code>
                {`src/
    components/
    pages/
    routes.tsx
    App.tsx
    index.tsx
    index.css`}
              </code>
            </pre>
            <p>
              The <code>App.tsx</code> is the entry point of the application.
              You can modify it, save the file and changes will be reflected in
              the browser automatically.
            </p>
            <p>
              For example you can modify the <code>App.tsx</code> from:
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
            <p>to:</p>
            <pre>
              <code>
                {`const App: React.FC = () => {
  return (
    <div>
      <h1>Hello my website!</h1>
    </div>
  );
};`}
              </code>
            </pre>
            <p>
              <code>Hello my website!</code> text should be now visible in the
              browser.
            </p>
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
export default DeveloperSetupFrontend;
