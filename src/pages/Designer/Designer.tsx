import * as S from "./styles";

const Designer: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Design guide</S.Title>
      <S.Actions>
        <button type="button" disabled={true}>
          Next
        </button>
      </S.Actions>
    </S.Root>
  );
};
export default Designer;
