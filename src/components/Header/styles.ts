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
                a, li{
                    margin: 0px;
                    margin-right: 50px;
                    text-decoration: none;
                    color: #777
                }
            }
        }
    }

    @media(max-width: 1024px) {
        .container {
            width: 100%;
            padding: 5px;
        }
    }

    @media(max-width: 530px) {
        .container {
            .menu--area {
                ul {
                    justify-content: space-around;
                    li, a{
                        font-size: 12px;
                        margin: 0px
                    }
                }
            }
        }
    }

    @media(max-width: 350px) {
        a {
            font-size: 10px
        }
    }
`