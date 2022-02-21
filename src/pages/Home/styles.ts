import styled from 'styled-components'

export const Home = styled.main<{mainBackground: string | undefined}>`
    .container {
        display: grid;
        padding: 40px 0px;
        grid-template-columns: repeat(2, 1fr);
        width: 1024px;
        margin: auto;
        a {
            text-decoration: none
        }

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
                background: linear-gradient(180deg, rgba(0,0,0, 0) 20%, rgba(0,0,0,1));
                padding: 10px;
            }
        }
        .aside--pictures {
            display: flex;
            flex-direction: column;
            img {
                width: 100%
            }
        }
    }
`