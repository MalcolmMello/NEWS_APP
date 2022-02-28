import styled from "styled-components";

export const MostViewed = styled.aside`
    @media(max-width: 880px) {
        .content--area {
            article {
                display: grid;
                grid-gap: 20px;
                grid-template-columns: repeat(3, 1fr)
            }
        }
    }
    @media(max-width: 580px) {
        .content--area {
            article {
                display: grid;
                grid-gap: 20px;
                grid-template-columns: repeat(2, 1fr)
            }
        }
    }
    @media(max-width: 500px) {
        .content--area {
            article {
                grid-template-columns: 1fr;
                grid-gap: 5px
            }
        }
    }
`