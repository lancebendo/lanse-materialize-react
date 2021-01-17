import * as React from 'react';
import styled from 'styled-components';
import Constants from '../Shared/Constants';

//#region styles
const StyledFlatCardMain = styled.div`
    background-color: white;
    border: 1px solid ${Constants.flatCardBorderColor};
    border-radius: ${Constants.borderRadius};
`;

const StyledFlatCardHeader = styled.div`
  padding: 13px 21px;
  min-height: ${Constants.minSectionHeight};
  & > span {
    font-size: ${Constants.secondaryHeaderFontSize};
    vertical-align: middle;
  }
  & > i {
    line-height: 1.2;
    vertical-align: middle;
  }
`;

const StyledDivider = styled.div`
  border-top: 1px solid ${Constants.flatCardBorderColor};
`;


// const FlatCardSectionLink = styled.div`
// padding: 21px;
// border-top: 1px solid ${Constants.flatCardBorderColor};
// &:hover {
//   background-color: ${Constants.alternateHoverColor};
//   cursor: pointer;
// }
// `;
//#endregion

interface IFlatCardProps {
  title?: string;
  titleIcon?: string;
}

const FlatCard: React.FunctionComponent<IFlatCardProps> = (props) => {

  const FlatCardHeader: React.FunctionComponent = () => (
    <React.Fragment>
      <StyledFlatCardHeader>
        <i className="material-icons left">{props.titleIcon || ""}</i>
        <span>{props.title || ""}</span>
      </StyledFlatCardHeader>
    </React.Fragment>
  );

  return (
    <StyledFlatCardMain>

      { props.title != null ? (<FlatCardHeader />) : "" }

      {
        React.Children.map(props.children, (child) => (
          <React.Fragment>
            <StyledDivider />
            {child}
          </React.Fragment>
        ))
      }
      
    </StyledFlatCardMain>
  );
};

export default FlatCard;
