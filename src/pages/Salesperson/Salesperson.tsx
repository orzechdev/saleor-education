import * as S from "./styles";

const Salesperson: React.FC = () => {
  return (
    <S.Root>
      <S.Title>Store management guide</S.Title>
      <S.Actions>
        <button type="button" disabled={true}>
          Next
        </button>
      </S.Actions>
    </S.Root>
  );
};
export default Salesperson;
