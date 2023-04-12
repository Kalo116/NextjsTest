import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    StyledCard,
    StyledSectionTinyHeading,
    StyledSectionTinyHighlightedHeading,
    StyledSectionTinyParagraph
} from './elements';

export const MiniCard = ({ title, description, icon, isColored, isHighlight }) => {

    return (
        <StyledCard isColored={isColored} isHighlight={isHighlight}>
            <FontAwesomeIcon icon={icon} size="2x" />
            <div className="card-info">

                {isHighlight
                    ? <StyledSectionTinyHighlightedHeading>
                        {title}
                    </StyledSectionTinyHighlightedHeading>
                    :
                    <StyledSectionTinyHeading>
                        {title}
                    </StyledSectionTinyHeading>
                }

                <StyledSectionTinyParagraph
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </StyledCard>
    );
};