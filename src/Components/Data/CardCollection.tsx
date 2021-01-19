import * as React from 'react';
import styled from 'styled-components';
import Constants from '../Shared/Constants';

//#region Style
const Container = styled.div`
@media only screen and (min-width: ${Constants.mediumScreen}) {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-content: stretch;
    // justify-content: center;
}
`;

const Card = styled.div`
    background-color: white;
    border: 1px solid ${Constants.flatCardBorderColor};
    border-radius: ${Constants.borderRadius};
    min-height: 200px;
    position: relative;
    padding-bottom: 42px;
    
    @media (min-width: ${Constants.mediumScreen}) {
        width: 45%;
        margin: 10px !important;
    }
    &:hover{
        background-color: ${Constants.alternateHoverColor};
        cursor: pointer;
    }

    & > .card-container {
        padding: 21px;

        & > .card-primary {
            color: ${Constants.defaultFontColor};
            font-size: ${Constants.primaryDescFontSize};
        } & > .card-secondary {
            color: ${Constants.defaultFontColor};
            font-size: ${Constants.primaryDescFontSize};
        } & > .card-description {
            color: ${Constants.descriptionFontColor};
            font-size: ${Constants.secondaryDescFontSize};
        }
    }
    }
`;

const LinkCard = styled(Card)`
    border-width: 2px;
    border-style: dashed;
    text-align: center;
    padding-bottom: 0 !important;
    display: flex !important;
    &:hover{
        background-color: ${Constants.alternateHoverColor};
        cursor: pointer;
    } & > div > div > span {
    color: ${Constants.proceedFontColor};
    font-size: ${Constants.linkLabelFontSize};
    font-weight: 500;
    vertical-align: middle;
    width: 20px;
    }
`;
//#endregion


//onclick handler, datasource ang need ng mga to.
interface ICardCollectionProps<T> {
    dataSource: T[];
    primaryContentSchema(data: T): React.ReactNode | React.ReactElement;
    secondaryContentSchema(data: T): React.ReactNode | React.ReactElement;
    descriptionSchema: (data: T) => React.ReactNode | React.ReactElement;
    defaultCardOnClick: () => void;
    dataCardOnClick: (data: T) => void;
}

const CardCollection = <T extends object>(props: ICardCollectionProps<T>) => {
    return (
        <Container>
            <LinkCard onClick={props.defaultCardOnClick} className="row valign-wrapper waves-effect" /* onclick dito */>
                <div className="col s6 offset-s3">
                    <div className="row center-align no-margin-bottom">
                        <span>+ add new address</span>
                    </div>
                </div>
            </LinkCard>

            {props.dataSource.map((data, index) => (
                <Card key={index} className="waves-effect" onClick={() => props.dataCardOnClick(data)}>
                    <div className="card-container">
                    <span className="card-primary">{props.primaryContentSchema(data)}</span>
                    <br />
                    <span className="card-secondary">{props.secondaryContentSchema(data)}</span>
                    <br />
                    <span className="card-description">{props.descriptionSchema(data)}</span>
                    </div>
                </Card>
            ))}

        </Container>
    );
};

export default CardCollection;
