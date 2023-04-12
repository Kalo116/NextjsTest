// The Card to be exported goes here
import Image from "next/image";
import { faClipboard, faSearch, faBullhorn } from "@fortawesome/free-solid-svg-icons";

import { MiniCard } from "../../components/MiniCard";

import {
    StyledCardTitle,
    StyledCardPostTitle,
    StyledSectionContainer,
    StyledCardInfoContainer,
    StyledCardInfoImgWrapper,
    StyledCards,
} from './elements';


const miniCardsArr = [
    {
        title: 'Brief',
        description: 'Complete <strong>brief writing or simple guidance</strong> on what to include, we\'ve got you covered.',
        icon: faClipboard,
        isColored: false,
        isHighlight: false
    },
    {
        title: 'Search',
        description: 'In-depth agency search covering; <strong>criteria matching</strong>, door knocking and due-dilligence vetting.',
        icon: faSearch,
        isColored: true,
        isHighlight: false
    },
    {
        title: 'Pitch',
        description: `Comprehensive <strong>pitch management</strong>, including comms, diary management and pitch hosting.`,
        icon: faBullhorn,
        isColored: true,
        isHighlight: true
    },
];

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
                    {miniCardsArr.map(miniCard => <MiniCard
                        key={miniCard.title}
                        title={miniCard.title}
                        description={miniCard.description}
                        icon={miniCard.icon}
                        isColored={miniCard.isColored}
                        isHighlight={miniCard.isHighlight}
                    />)
                    }
                </StyledCards>
            </StyledCardInfoContainer>
        </StyledSectionContainer>
    )
};