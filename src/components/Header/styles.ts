import styled from "styled-components";

export const Header = styled.header`
    height: 130px;
    .container {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 1024px;
        height: 100px;
        margin: auto;
        .img--area {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #CCC;
            padding: 20px 5px;
            img {
                width: 100px;
                height: auto;
                cursor: pointer
            } 
        }
        .menu--area {
            width: 100%;
            padding: 10px 10px;
            border-bottom: 1px solid #CCC;
            ul {
                display: flex;
                list-style: none;
                padding: 0px;
                margin: 0px;
                a {
                    margin: 0px 50px 0px 0px;
                    text-decoration: none;
                    color: #777
                }
            }
        }
    }
`