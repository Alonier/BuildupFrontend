import styled from "@emotion/styled"

export const Navbar__Wrapper = styled.div`
    width: 318px;
    height: 100%;
    padding: 0px 0px 0px 30px;

    display:flex;
    flex-direction: column;
    justify-content: flex-start;

    border-right: 1px solid black;
    `

export const Navbar__Logo = styled.div`
    width: 100%;
    height: 101px;
    
    font-size: 32px;
    font-weight: 700;
    line-height: 101px;
` 

export const Navbar__Container = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 101px;

    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 20px; 
`

export const Navbar__Element = styled.div`
    width: 100%;

    font-size: 32px;
`