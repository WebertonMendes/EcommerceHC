import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 1.4rem 0;

    & .header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10rem;

        & .search {
            display: flex;
            align-items: center;
            gap: .5rem;

            & input {
                background: #f8f8f8;
                border: none;
                border-radius: 4rem;
                padding: .6rem 1.5rem;

                background: #fff;
                border: 1px solid #e0e0e0;

                :focus {
                    border: 1px solid #f4de4c;
                }
            }
        }
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;

    & a {
        margin: 0 .5rem;
    }

    .menu-icons {
        display: flex;
        align-items: center;
        justify-content: center;

        & img {
            transition: .5s;
            padding: .2rem;

            :hover {
                cursor: pointer;
                background: #f4de4c;
                border-radius: 50%;
            }
        }
    }

    & a {
        transition: .5s;

        :hover {
            color: #f4de4c;
        }
    }
`;