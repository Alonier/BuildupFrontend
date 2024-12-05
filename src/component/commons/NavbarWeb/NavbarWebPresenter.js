import {
  NavbarWeb__Element,
  NavbarWeb__Logo,
  NavbarWeb__Wrapper,
} from "./NavbarWebStyles";

export default function NavbarWebUI() {
  return (
    <NavbarWeb__Wrapper>
      <NavbarWeb__Logo>Build Up</NavbarWeb__Logo>
      <NavbarWeb__Element>🏠 홈</NavbarWeb__Element>
      <NavbarWeb__Element>📝 학습하기</NavbarWeb__Element>
      <NavbarWeb__Element>📖 책장</NavbarWeb__Element>
      <NavbarWeb__Element>❌ 오답노트</NavbarWeb__Element>
      <NavbarWeb__Element>ℹ️ 내 정보</NavbarWeb__Element>
    </NavbarWeb__Wrapper>
  );
}
