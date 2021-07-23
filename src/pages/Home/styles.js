import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const Banners = styled.div`
    display: flex;
    flex-direction: column;
`

export const BannersTop = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;

    & .banners1 {
        display: flex;
        flex-direction: column;
        gap: .9rem;

        & img {
            transition: .5s;

            :hover {
                opacity: .6;
                cursor: pointer;
            }
        }
    }

    & .images1 {
        display: flex;
        gap: 1rem;

        & .girl-model img.girl {
            height: 376px;
        }

        & img {
            transition: .5s;

            :hover {
                opacity: .8;
            }
        }
    }

    .girl-model {
            position: relative;

            & .like {
                display: flex;
                align-items: center;
                justify-content: center;

                background: #fff;
                width: 2.2rem;
                height: 2.2rem;
                padding: .5rem;
                border-radius: 50%;
                transition: .5s;

                position: absolute;
                right: 1rem;
                top: 1rem;

                :hover {
                    background: #ff4040;
                }
            }
        }
`

export const BannersBottom = styled.div`
    display: flex;
    flex: 1;
    gap: 1rem;

    margin-top: 1rem;

    & .banners2 {
        display: flex;
        flex-direction: column;
        gap: .9rem;

        & img {
            transition: .5s;

            :hover {
                opacity: .8;
                cursor: pointer;
            }
        }
    }

    & .images2 {
        display: flex;
        gap: 1rem;

        & .girl-model img.girl {
            height: 376px;
        }

        & img {
            transition: .5s;

            :hover {
                opacity: .8;
            }
        }
    }

    .girl-model {
            position: relative;

            & .like {
                display: flex;
                align-items: center;
                justify-content: center;

                background: #fff;
                width: 2.2rem;
                height: 2.2rem;
                padding: .5rem;
                border-radius: 50%;
                transition: .5s;

                position: absolute;
                right: 1rem;
                top: 1rem;

                :hover {
                    background: #ff4040;
                }
            }
        }
`