// Styled elements for the Card go here
import styled, { css } from "styled-components";

export const StyledCardTitle = styled.h1`
font-family: Poppins;
font-weight: 600;
font-size: 2.8rem;
line-height: 3.94rem;
margin:0;
`
export const StyledCardPostTitle = styled.h3`
font-family: Poppins;
font-size: 1.40rem;
line-height: 1.875rem;
font-weight: 300;
margin:0;
margin-bottom: 3rem;
`

export const StyledSectionContainer = styled(({ topMargin = 0, bottomMargin = 0, ...props }) => <div {...props} />)`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width: 1920px;
    width: 100%;
    height: auto;
    margin-top: 4.5rem;
    margin-bottom: 4.5rem;
`;

export const StyledCardInfoContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 8rem;

    @media (max-width: 1024px)  {
        gap: 5rem;
        flex-direction: column;   
    }
`

export const StyledCardInfoImgWrapper = styled.div`
    width: 370px;    
`

export const StyledCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:3.75rem;
`