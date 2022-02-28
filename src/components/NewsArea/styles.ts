import styled from "styled-components";

export const NewsArea = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    width: 1024px;
    margin: auto;
    border-top: 1px solid #CCC;
    h1 {
        font-size: 23px
    }

    @media(max-width: 1024px) {
        width: 100%;
        padding: 5px;
    }

    @media(max-width: 880px) {
        grid-template-columns: 1fr; 
    }
`