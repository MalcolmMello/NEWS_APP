import styled from "styled-components";

export const RightArticle = styled.a<{mainBackground: string | undefined, marginTop: boolean | undefined}>`
    height: 100%;
    width: max-content;
    text-decoration: none;
    margin-top: ${props => props.marginTop ? '10px' : ''};
    .background--picture {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 350px;
        background-image: url(${props => props.mainBackground});
        background-position: center;
        background-size: cover;
        color: #FFF;
        cursor: pointer;
        .article--content {
            background: linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(0,0,0,1) 90%);
            padding: 10px;
            h5 {
                margin: 0px
            }
            p {
                font-size: 12px
            }
            small {
                font-size: 12px
            }
        }
    }
    
    @media(max-width: 1024px) {
        width: 100%;
        min-height: 230px;
        .background--picture {
            width: 100%
        }
    }
`