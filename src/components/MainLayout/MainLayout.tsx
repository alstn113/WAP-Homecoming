import * as S from './MainLayout.styles';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <S.Root>{children}</S.Root>;
};

export default MainLayout;
