import styled from "styled-components";

export const RightArticle = styled.a<{mainBackground: string | undefined}>`
    width: max-content;
    text-decoration: none;
    .main--picture {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 200px;
        width: 250px;
        margin-top: 5px;
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
        }
    }
`