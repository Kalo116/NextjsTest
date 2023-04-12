import styled, { css } from "styled-components";

export const StyledCard = styled.div`
    font-family: Poppins;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    width: 380px;
    gap: 30px;
    padding: 20px 50px;

    ${props =>
        props.isColored && css
            `
            background-color: #fff3e9;
        `
    }

    ${props =>
        props.isHighlight && css
            `
            background-color: #fff0e2;
            border-radius: 6px;
            border: 2px solid #458aeb;
        `
    }
`

export const StyledSectionTinyHeading = styled.h2`
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 600;
    margin:0px;
    margin-bottom: 6px;
`

export const StyledSectionTinyHighlightedHeading = styled.h2`
    font-family: Poppins;
    font-size: 1.5rem;
    font-weight: 600;
    margin:0px;
    margin-bottom: 6px;
    color: #458aeb;
    text-decoration: underline;
`
export const StyledSectionTinyParagraph = styled.p`
    margin: 0;
`