// The Card to be exported goes here
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faSearch, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import {
    StyledCardTitle,
    StyledCardPostTitle,
    StyledSectionContainer,
    StyledCardInfoContainer,
    StyledCardInfoImgWrapper,
    StyledCards,
    StyledCard,
    StyledSectionTinyHeading,
    StyledSectionTinyHighlightedHeading,
    StyledSectionTinyParagraph
} from './elements';



export const Card = ({ image, title, description, ctaText, ...props }) => {
    return (
        <StyledSectionContainer>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardPostTitle>{description}</StyledCardPostTitle>


            <StyledCardInfoContainer>
                <StyledCardInfoImgWrapper>
                    <Image
                        layout="responsive"
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />
                </StyledCardInfoImgWrapper>

                <StyledCards>

                    <StyledCard>
                        <FontAwesomeIcon icon={faClipboard} size="2x" />
                        <div className="card-info">
                            <StyledSectionTinyHeading>
                                Brief
                            </StyledSectionTinyHeading>
                            <StyledSectionTinyParagraph>
                                Complete <strong>brief writing or simple guydance</strong> on what to include, we've got you covered.
                            </StyledSectionTinyParagraph>
                        </div>
                    </StyledCard>

                    <StyledCard isMarked={true}>
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                        <div className="card-info">
                            <StyledSectionTinyHeading >
                                Search
                            </StyledSectionTinyHeading>
                            <StyledSectionTinyParagraph>
                                In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.
                            </StyledSectionTinyParagraph>
                        </div>
                    </StyledCard>

                    <StyledCard isMarked={true} isHighlight={true}>
                        <FontAwesomeIcon icon={faBullhorn} size="2x" />
                        <div className="card-info">
                            <StyledSectionTinyHighlightedHeading>
                                Pitch
                            </StyledSectionTinyHighlightedHeading>
                            <StyledSectionTinyParagraph>
                                Comprehensive <strong>pitch management</strong>, including commns, diary management and pitch hosting
                            </StyledSectionTinyParagraph>
                        </div>
                    </StyledCard>

                </StyledCards>
            </StyledCardInfoContainer>

        </StyledSectionContainer>
    )
};