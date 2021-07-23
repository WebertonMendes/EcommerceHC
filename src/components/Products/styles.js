import styled from 'styled-components';

export const Content = styled.div`
    margin: 0 auto;

    .banner-products {
        width: 1100px;
        height: 500px;
        margin-bottom: 4rem;
    }
    
    h3 {
        margin-bottom: 1rem;
    }
`

export const ProductsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    .product-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

        max-width: 20rem;
        margin-bottom: 2rem;
        border: 1px solid #dfdfdf;
        padding-bottom: 1.5rem;

        transition: .5s;

        :hover {
            margin-bottom: 1.2rem;
        }

        .product-image {
            width: 100%;
            height: 15rem;
            margin-bottom: 1rem;
            transition: .7s;

            :hover {
                opacity: .7;
                cursor: pointer;
            }
        }

        .product-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            :hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .4rem;
            margin-top: .8rem;

            background: #f4de4c;
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
`;