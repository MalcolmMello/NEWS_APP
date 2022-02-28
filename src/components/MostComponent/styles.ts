import styled from "styled-components";

export const MostComponent = styled.div`
    border-bottom: 1px solid #CCC;
    padding-bottom: 20px;
    margin-top: 10px;
    a {
        height: 100%;
        display: flex;
        text-decoration: none;
        color: #000;
        h5 {
            margin: 5px 0px
        }
        p {
            margin: 0px 10px 0px 0px;
            font-weight: bold
        }   
        span {
            font-size: 15px;
            font-weight: 500
        }
        small {
            font-size: 12px;
        }
    }

    @media(max-width: 500px) {
        a {
            display: block;
            p {
                display: block;
                margin: 10px 0px
            }
        }
    }
`