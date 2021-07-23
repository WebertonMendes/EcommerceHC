import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    padding-right: 1rem;
    
    & h3 {
        margin: 0 3rem 1.5rem;
        text-align: center;
    }

    & .categoryList {
        padding: 0 1rem;
    }

    & .category {
        display: flex;
        align-items: center;
        margin: 0 1rem;
        padding: .6rem 1rem;
        gap: .5rem;
        border-radius: 1.4rem;
        transition: .5s;

        :hover {
            margin-left: 1rem;
            background: #f4de4c;
            cursor: pointer;
        }
    }    
`;