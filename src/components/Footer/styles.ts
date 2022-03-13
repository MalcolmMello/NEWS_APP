import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #CCC;
    background-color: white;
    p {
        font-size: 13px
    }
    @media(max-width: 430px) {
        p {
            font-size: 11px
        }
    }
`