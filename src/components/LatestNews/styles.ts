import styled from "styled-components";

export const LatestNews = styled.article`
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