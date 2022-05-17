import {
  knowledgeList,
  techStackFrontendList,
  techStackStyleList,
} from "./data";
import * as S from "./styles";

const Developer: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Development guide</S.Title>
      <S.Options>
        <p>What do you already know?</p>
        {knowledgeList.map((knowledge) => (
          <>
            <input
              type="checkbox"
              name="knowledge"
              value={knowledge.id}
              id={`knowledge-${knowledge.id}`}
            />
            &nbsp;
            <label htmlFor={`knowledge-${knowledge.id}`}>
              {knowledge.name}
            </label>
            &nbsp; &nbsp;
          </>
        ))}
      </S.Options>
      <S.Options>
        <p>What frontend technology do you want to use?</p>
        {techStackFrontendList.map((techStackFrontend) => (
          <>
            <input
              type="radio"
              name="tech-stack-frontend"
              value={techStackFrontend.id}
              id={`tech-stack-frontend-${techStackFrontend.id}`}
            />
            &nbsp;
            <label htmlFor={`tech-stack-frontend-${techStackFrontend.id}`}>
              {techStackFrontend.name}
            </label>
            &nbsp; &nbsp;
          </>
        ))}
      </S.Options>
      <S.Options>
        <p>What styling technology do you want to use?</p>
        {techStackStyleList.map((techStackStyle) => (
          <>
            <input
              type="radio"
              name="tech-stack-style"
              value={techStackStyle.id}
              id={`tech-stack-style-${techStackStyle.id}`}
            />
            &nbsp;
            <label htmlFor={`tech-stack-style-${techStackStyle.id}`}>
              {techStackStyle.name}
            </label>
            &nbsp; &nbsp;
          </>
        ))}
      </S.Options>
      <S.Actions>
        <button type="button" disabled={true}>
          Next
        </button>
      </S.Actions>
    </S.Root>
  );
};
export default Developer;
