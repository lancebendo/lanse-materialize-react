import * as React from 'react';
import styled from 'styled-components';
import Constants from '../Shared/Constants';


const FlatCardDiv = styled.div`
    background-color: white;
    border: 1px solid ${Constants.flatCardBorderColor};
    border-radius: ${Constants.borderRadius};
`;

const FlatCardContent = styled.div`
    padding: 21px;
`;

const FlatCardSectionDiv = styled.div`
  border-top: 1px solid ${Constants.flatCardBorderColor};
`;


const FlatCardSectionLink = styled(FlatCardSectionDiv)`
&:hover {
  background-color: ${Constants.alternateHoverColor};
  cursor: pointer;
}
`;

interface IFlatCardProps { }

const FlatCard: React.FunctionComponent<IFlatCardProps> = (props) => {
  return (
    <FlatCardDiv>
        <FlatCardContent>
        <span>haha</span>
        
        </FlatCardContent>
        <FlatCardSectionDiv/>
        <FlatCardContent>
        <span>haha</span>
        </FlatCardContent>
    </FlatCardDiv>
  );
};

export default FlatCard;
