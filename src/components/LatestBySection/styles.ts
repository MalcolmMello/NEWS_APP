import styled from "styled-components";

export const LatestBySection = styled.article`
    .container {
        width: 1024px;
        margin: auto;
        border-top: 1px solid #CCC;
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
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 5px 5px;
        }
    }
    
    @media(max-width: 880px) {
        .container {
            .content--area {
                grid-template-columns: 2fr 1fr; 
            }
        }
    }

    @media(max-width: 580px) {
        .container {
            .content--area {
                grid-template-columns: 1fr; 
            }
            aside {
                display: grid;
                grid-template-columns: repeat(2, 1fr); 
                grid-gap: 20px
            }
        }
    }

    @media(max-width: 450px) {
        .container {
            aside {
                grid-template-columns: 1fr; 
            }
        }
    }
`