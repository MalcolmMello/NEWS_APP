import styled from "styled-components";

export const LeftNews = styled.div<{isSec: boolean | undefined}>`
    min-height: ${props => props.isSec ? '300px' : '500px'};
    margin-bottom: ${props => props.isSec ? '10px' : '50px'};
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
        width: 100%;
        object-fit: cover
    }
    span {
        margin-top: 20px;
        font-size: 14px
    }
    h1 {
        margin: ${props => props.isSec ? '0px' : '10px 10px 10px 0px'};
        font-size: ${props => props.isSec ? '20px' : 'auto'};
    }
    p {
        line-height: 27px;
        margin-bottom: 15px;
        font-size: ${props => props.isSec ? '17px' : 'auto'};
    }
`