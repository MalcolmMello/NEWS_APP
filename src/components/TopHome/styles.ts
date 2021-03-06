import styled from "styled-components";

export const TopHome = styled.section`
    display: grid;
    padding: 30px 0px;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    width: 1024px;
    margin: auto;
    .main--picture {
        padding-right: 10px;
    }
    .aside--pictures {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between
    }

    @media(max-width: 1024px) {
        width: 100%;
        padding: 30px 5px
    }

    @media(max-width: 1024px) {
        grid-template-columns: 1fr;
        .aside--pictures {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            max-width: 100vw;
        }
        .main--picture {
            max-width: 100vw;
            padding: 0px;
        }
    }

    @media(max-width: 870px) {
        .main--picture {
            max-width: 100vw
        }
    }
    @media(max-width: 530px) {
        .aside--pictures {
            grid-template-columns: 1fr;
            margin-top: 10px
        }
    }
`