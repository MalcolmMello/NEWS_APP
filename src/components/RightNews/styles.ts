import styled from "styled-components";

export const RightNews = styled.div<{isSec: boolean | undefined}>`
    align-items: flex-end;
    height:  ${props => props.isSec ? '' : '250px'};
    margin-bottom: 25px;
    border-bottom: 1px solid #CCC;
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
        height: ${props => props.isSec ? '205px' : '120px'};
        object-fit: cover
    }
    span {
        font-size: 14px
    }
    h5 {
        font-size: ${props => props.isSec ? '17px' : 'auto'};
        margin: ${props => props.isSec ? '0px' : '5px 0px'};;
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