import styled from "styled-components";

export const LatestNews = styled.article`
    border-right: 1px solid #CCC;
    padding-right: 10px;
    h1 {
        font-size: 23px
    }
    .content--area {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 20px;
        article {
            height: 100%
        }
    }
`