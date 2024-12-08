import NavbarLogic from "../component/commons/Navbar/NavbarContainer";
import { Layout__Wrapper } from "./LayoutStyles";

export default function LayoutUI({children}){
    return(
        <Layout__Wrapper>
            <NavbarLogic/>
            {children}
        </Layout__Wrapper>
    )
}