import styled from "styled-components";

export const LeftNews = styled.div`
    min-height: 500px;
    margin-bottom: 50px;
    border-bottom: 1px solid #CCC;
    padding-bottom: 15px;
    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;  
        color: #000;
        height: 100%;
        justify-content: space-between;
        padding-bottom: 10px;
    }
    img {
        width: 100%
    }
    span {
        margin-top: 20px;
        font-size: 14px
    }
    h1 {
        margin: 10px 10px 10px 0px
    }
    p {
        line-height: 27px;
        margin-bottom: 15px
    }
`