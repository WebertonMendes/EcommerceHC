import styled from 'styled-components';

export const WhatsAppChat = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    animation: pulse 2s infinite;

    & img {
        max-width: 4rem;
    }

    :hover {
        cursor: pointer;
        filter: saturate(10%);
    }

    @keyframes pulse {
        0% {
            margin-bottom: 0;
        }
        100% {
            margin-bottom: 1rem;
        }
    }
`;