import styled from 'styled-components';

export const FormContainer = styled.section`
    background: #222;
    padding: 3rem 0;
    margin-top: 3rem;

    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    & p {
        color: #fff;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        font-weight: 300;
    }
`

export const Form = styled.div`
    display: flex;
    gap: 1rem;

    & input {
        background: #f8f8f8;
        border: none;
        border-radius: 4rem;
        padding: .6rem 1.5rem;
        border: 2px solid #fff;
        width: 20rem;

        :focus {
            border: 2px solid #999;
        }
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
        background: #f4de4c;
        color: #222;
        font-weight: bold;

        border: none;
        border-radius: 4rem;
        padding: 0 1rem;
        transition: .5s;

        :hover {
            background: #FFD700;
            cursor: pointer;
        }
    }
`