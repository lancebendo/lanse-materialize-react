import * as React from 'react';
import styled from 'styled-components';
import FlatCard from '../Card/FlatCard';
import Constants from '../Shared/Constants';

//#region Styles
const StyledTable = styled.table`
    border-radius: ${Constants.borderRadius} !important;
    tbody > tr:last-child {
        border-bottom: none;
    }
`;

const PaginationDiv = styled.div`
    margin-bottom: 0 !important;
`;

const StyledUl = styled.ul`
    & li {
    } & li.active {
        background-color: ${Constants.hoverColor};
        & a { color: ${Constants.alternateColor}; }
    } & select {
        padding: 2px;
        height: 100%;
        font-size: 92%;
        border: 1px solid ${Constants.flatCardBorderColor};
    } & > li > span {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;
//#endregion


export interface ITableProps { }

export function Table(props: ITableProps) {
    return (
        <React.Fragment>
            <FlatCard title="Course List">

                <StyledTable>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                    </tbody>
                </StyledTable>
                <PaginationDiv className="row">

                <StyledUl className="pagination">
                    <li><span>&nbsp;&nbsp;&nbsp;Rows per page&nbsp;&nbsp;</span></li>
                    <li> <select className="browser-default">
                        <option value="" disabled selected>20</option>
                        <option value="1">20</option>
                        <option value="2">50</option>
                        <option value="3">100</option>
                    </select></li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li><span>1-4 of 100</span></li>
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    <li className="active"><a href="#!">1</a></li>
                    <li className="waves-effect"><a href="#!">2</a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </StyledUl>
                </PaginationDiv>

            </FlatCard>
        </React.Fragment>

    );
}
