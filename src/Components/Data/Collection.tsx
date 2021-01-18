import * as React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import { Constants } from '../Shared'
import { FlatCard } from '../Card';


//#region  Styles
const Ul = styled.ul`
  border-radius: ${Constants.borderRadius};
  margin-block-start: 0;
  margin-block-end: 0;
  border: 0;
  
  .see-more {
    text-align: center;
    color: ${Constants.proceedFontColor};
    &:hover {
      cursor: pointer;
      background: ${Constants.alternateHoverColor};
  }
  }
`;

const Li = styled.li`
    text-align: center;
    color: ${Constants.descriptionFontColor};
    font-size: ${Constants.primaryDescFontSize};
`;

const LoaderLi = styled.li`
    padding-left: 0px !important;
`;

//#endregion

interface ICollectionProps {
    title?: string;
}

const Collection: React.FunctionComponent<ICollectionProps> = (props) => {
    return (
        <FlatCard title={props.title}>
            <Ul className="collection">
                <Li className="collection-item noselect">
                    There is no data to display.
            </Li>
                <LoaderLi className="collection-item">
                    <ContentLoader
                        height={100}
                        width={1060}
                        speed={2}>
                        <circle cx="60" cy="45" r="30" />
                        <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
                        <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
                        <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
                    </ContentLoader>
                </LoaderLi>
                <LoaderLi className="collection-item">
                    <ContentLoader
                        height={100}
                        width={1060}
                        speed={2}>
                        <circle cx="60" cy="45" r="30" />
                        <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
                        <rect x="105" y="40" rx="5" ry="5" width="180" height="12" />
                        <rect x="105" y="60" rx="5" ry="5" width="125" height="12" />
                    </ContentLoader>
                </LoaderLi>
                <li className="collection-item see-more waves-effect waves-block">
                    <span className="noselect"> See more </span>
                </li>
                <li className="collection-item see-more waves-effect waves-block">
                    <span className="noselect"> See more </span>
                </li>
            </Ul>
        </FlatCard>
    );
};

export default Collection;
