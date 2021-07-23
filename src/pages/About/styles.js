import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    
    h1 {
        margin-top: 1rem;
        margin-left: 4rem;
    }
`

export const AboutContent = styled.section`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    align-items: center;
    gap: 2rem;
    padding-left: 4rem;
    padding-bottom: 3.5rem;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            margin-bottom: 1.5rem;
        }
    }

    img {
        width: 20rem;
        margin: 0 auto;
    }
`