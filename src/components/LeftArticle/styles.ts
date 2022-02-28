import styled from "styled-components";

export const LeftArticle = styled.a<{mainBackground: string | undefined}>`
    text-decoration: none;
    .main--picture {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 400px;
        width: 100%;
        background-image: url(${props => props.mainBackground});
        background-position: center;
        background-size: cover;
        color: #FFF;
        cursor: pointer;
        .article--content {
            background: linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(0,0,0,1) 90%);
            padding: 10px;
            p {
                margin: 0
            }
        }
    }

    @media(max-width: 530px) {
        .main--picture {
            height: 230px;
        }
    }
`