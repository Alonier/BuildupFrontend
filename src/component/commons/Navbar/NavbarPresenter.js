import { Navbar__Wrapper,Navbar__Container, Navbar__Element, Navbar__Logo } from "./NavbarStyles";

export default function NavbarUI(){

    return(
        <Navbar__Wrapper>
            <Navbar__Logo>LOGO</Navbar__Logo>
            <Navbar__Container>
                <Navbar__Element>홈</Navbar__Element>
                <Navbar__Element>학습하기</Navbar__Element>
                <Navbar__Element>책장</Navbar__Element>
                <Navbar__Element>오답노트</Navbar__Element>
                <Navbar__Element>내정보</Navbar__Element>
            </Navbar__Container>
        </Navbar__Wrapper>
    )
}