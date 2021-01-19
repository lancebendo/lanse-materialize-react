import React, { useState } from 'react';
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

  .no-data {
    text-align: center;
    color: ${Constants.descriptionFontColor};
    font-size: ${Constants.primaryDescFontSize};
  }

  .loader { padding-left: 0px !important; }

  .data {
    padding: 20px;
    // &:hover {
    //     cursor: pointer;
    //     background: ${Constants.alternateHoverColor};
    // }

    .data-posted-by {
        font-size: ${Constants.secondaryHeaderFontSize};
        color: ${Constants.descriptionFontColor};
    }

    .data-sub-posted-by, .data-posted-date {
        font-size: ${Constants.secondaryDescFontSize};
        color: ${Constants.descriptionFontColor};
    }

    .data-content {
        color: ${Constants.descriptionFontColor};
        font-size: ${Constants.secondaryDescFontSize};
        margin-block-start: 5px;
        margin-block-end: 0;

        @media only screen and (min-width: ${Constants.largeScreen}) { padding: 0 80px 0; }
        @media only screen and (max-width: ${Constants.largeScreen}) { padding: 0 10px 0; }
    }
  }
`;

//#endregion

interface ICollectionProps<T> {
    title?: string;
    dataSource: T[];
    titleSchema: (data: T) => React.ReactNode | React.ReactElement;
    dateSchema: (data: T) => React.ReactNode | React.ReactElement;
    subTitleSchema: (data: T) => React.ReactNode | React.ReactElement;
    contentSchema: (data: T) => React.ReactNode | React.ReactElement;
    reloadOnClick: (setLoading: (loading: boolean) => void) => void;
}

const Collection = <T extends object>(props: ICollectionProps<T>) => {

    const [loading, setLoading] = useState(false);

    return (
        <FlatCard title={props.title}>
            <Ul className="collection">

                {props.dataSource.map((data, index) => (
                    <li key={index} className="collection-item data">
                        <span className="data-posted-by">{props.titleSchema(data)}</span><span className="data-posted-date right">{props.dateSchema(data)}</span><br />
                        <span className="data-sub-posted-by">{props.subTitleSchema(data)}</span>
                        <p className="data-content">{props.contentSchema(data)}</p>
                    </li>
                ))}

                {loading ? (
                    <li className="collection-item loader">
                        <ContentLoader
                            height={100}
                            width={1060}
                            speed={2}>
                            <rect x="15" y="20" rx="5" ry="5" width="150" height="12" />
                            <rect x="15" y="40" rx="5" ry="5" width="80" height="12" />
                            <rect x="95" y="60" rx="5" ry="5" width="900" height="12" />
                            <rect x="95" y="80" rx="5" ry="5" width="700" height="12" />
                        </ContentLoader>
                    </li>
                ) : ""}

                <li className="collection-item no-data noselect">
                    There is no data to display.
                </li>

                <li className="collection-item see-more waves-effect waves-block" onClick={() => props.reloadOnClick(setLoading)}>
                    <span className="noselect"> See more </span>
                </li>
            </Ul>
        </FlatCard>
    );
};

export default Collection;
