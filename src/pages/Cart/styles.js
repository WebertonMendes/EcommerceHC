import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: .5rem;
    min-height: 72vh;
`

export const Main = styled.main`
    width: 75%;
    margin-left: 2rem;
    margin-bottom: 1.5rem;

    .cart-details {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
        margin-bottom: 1.5rem;

        p {
            background: #333;
            color: #fff;
            padding: .5rem 1rem;
            border-radius: .4rem;
            font-size: 1.2rem;
            transition: .5s;
        }

        button {
            background: #f4de4c;
            font-size: 1.3rem;
            border: none;
            padding: .5rem 1rem;
            border-radius: .4rem;
            transition: .5s;

            :hover {
                background: #e0e0e0;
                cursor: pointer;
            }
        }
    }
`