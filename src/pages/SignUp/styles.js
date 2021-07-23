import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    left: 30%;
    right: 30%;
    top: 12%;

    width: 35rem;
    padding: 3rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4rem;

    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    h1 {
        margin: 1rem 0;
    }
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;

    input {
        width: 100%;
        border: 2px solid #ccc;
        padding: .8rem;
        margin-bottom: .5rem;
        border-radius: 1.5rem;

        :focus {
            border: 2px solid #f4de4c;
        }
    }

    button {
        width: 100%;
        background: #f4de4c;
        padding: .8rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 1.5rem;
        border: none;
        transition: .5s;

        :hover {
            background: #f1d51c;
            cursor: pointer;
        }
    }
`