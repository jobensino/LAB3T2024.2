import styled from 'styled-components';

const Container = styled.button`
    border: none;
    border-radius: 0.5rem;

    background-color: #806550;

    color: hsl(0deg, 0%, 98%);
    padding: 0.75rem;

    cursor: pointer;

    &:hover {
        background-color: #D79BC2;
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #DF9453;
        background-color: #7B400C;
    }
    
    border-radius: 12px;

    height: min-content;
    width: min-content;

    min-height: 1rem;
    min-width: 1rem; 
    text-align: center;
    white-space: nowrap;
`;

export const styles = {container:Container}