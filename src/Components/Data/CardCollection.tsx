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
interface ICardCollectionProps {
}

const CardCollection: React.FunctionComponent<ICardCollectionProps> = (props) => {
    return (
        <Container>
            <LinkCard className="row valign-wrapper waves-effect" /* onclick dito */>
                <div className="col s6 offset-s3">
                    <div className="row center-align no-margin-bottom">
                        <span>+ add new address</span>
                    </div>
                </div>
            </LinkCard>
            <Card className="waves-effect" /* onclick dito */>
                <div className="card-container">
                    <span className="card-primary">Primary Content</span>
                    <br />
                    <span className="card-secondary">Secondary Content</span>
                    <br />
                    <span className="card-description">Description</span>
                </div>
            </Card>
            <Card className="waves-effect" /* onclick dito */>
                <div className="card-container">
                    <span className="card-primary">Primary Content</span>
                    <br />
                    <span className="card-secondary">Secondary Content</span>
                    <br />
                    <span className="card-description">Description</span>
                </div>
            </Card>

        </Container>
    );
};

export default CardCollection;
