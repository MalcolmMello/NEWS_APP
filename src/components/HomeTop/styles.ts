import styled from "styled-components";

export const TopHome = styled.section`
    display: grid;
    padding: 30px 0px;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    width: 1024px;
    margin: auto;

    .aside--pictures {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between
    }
`