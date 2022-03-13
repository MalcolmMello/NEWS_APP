import styled from "styled-components";

export const LeftNews = styled.div`
    background-color: white;
    min-height: 500px;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 0 2px 3px -2px gray;
    padding-bottom: 15px;
    a {
        display: flex;
        flex-direction: column;
        text-decoration: none;  
        color: #000;
        height: 100%;
        justify-content: space-between;
        padding-bottom: 10px;
        padding: 7px
    }
    img {
        width: 100%;
        border-radius: 3px;
        object-fit: cover
    }
    span {
        margin-top: 20px;
        font-size: 14px
    }
    h1 {
        margin: 10px 10px 10px 0px;
        font-size: auto;
    }
    p {
        line-height: 27px;
        margin-bottom: 15px;
    }
`