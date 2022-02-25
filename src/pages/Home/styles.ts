import styled from 'styled-components'

export const Home = styled.main`
    .container {
        display: grid;
        padding: 40px 0px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        width: 1024px;
        margin: auto;
        
        .aside--pictures {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between
        }
    }
`