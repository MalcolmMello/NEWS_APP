import styled from "styled-components";

export const RightNews = styled.div`
    background-color: white;
    align-items: flex-end;
    height: 250px;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 3px -2px gray;
    padding: 7px;
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
        width: 100%;
        height: 120px;
        border-radius: 3px;
        object-fit: cover
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    span {
        font-size: 14px
    }
    h5 {
        margin: 5px 0px;
    }
    p {
        line-height: 27px;
        margin-bottom: 15px;
        font-size: 13px
    }
    @media(max-width: 450px) {
        height: auto;
        h5 {
            font-size: 17px;
            margin-bottom: 25px
        }
        img {
            height: 180px;
            object-fit: cover;
        }
        .content {
            margin-top: 20px
        }
    }
`