import * as S from "./styles";
import logo from "./logo.svg";

const Logo: React.FC = () => {
  return (
    <S.Logo>
      <S.LogoImage src={logo} alt="logo" />
      education
    </S.Logo>
  );
};
export default Logo;
