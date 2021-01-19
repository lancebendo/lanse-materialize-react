import * as React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
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
    margin-left: 0 !important;
    margin-right: 0 !important;
`;

const StyledUl = styled.ul`
    & li {
    } & li.active {
        background-color: ${Constants.hoverColor};
        & a { color: ${Constants.alternateColor}; }
        pointer-events: none;
    } & select {
        padding: 2px;
        height: 100%;
        font-size: 92%;
        border: 1px solid ${Constants.flatCardBorderColor};
    } & > li > span {
        height: 100%;
        display: flex;
        align-items: center;
    } & .disabled {
        pointer-events: none;
    }
`;
//#endregion

enum RowsPerPage {
    Twenty = 20,
    Fifty = 50,
    OneHundred = 100,
  }

export interface Schema<T> {
    label: string;
    value(data: T): React.ReactNode | React.ReactElement;
    index: number;
}

interface ITableProps<T> {
    title: string;
    dataSource: T[],
    schema: Schema<T>[],
}

interface ITableState {
    totalPages: number;
    displayDataIndex: { startIndex: number, endIndex: number };
    currentPageNumber: number;
    rowsPerPage: number;
}

export default class Table<T extends object> extends React.Component<ITableProps<T>, ITableState> {
    constructor(props: ITableProps<T>) {
        super(props);

        const rowsPerPage = RowsPerPage.Twenty;
        const totalPages = Math.ceil(this.props.dataSource.length / rowsPerPage);
        const currentPageNumber = 1;

        this.state = {
            rowsPerPage,
            totalPages,
            currentPageNumber,
            displayDataIndex: this.getDisplayDataIndex(currentPageNumber, rowsPerPage),
        };
    }

    getDisplayDataIndex(currentPageNumber: number, rowsPerPage: RowsPerPage, ) {
        const startIndex = rowsPerPage * (currentPageNumber - 1);
        let endIndex = startIndex + (rowsPerPage - 1);

        const totalRows = this.props.dataSource.length;

        if(totalRows < endIndex) {  endIndex = totalRows - 1; }

        return { startIndex, endIndex };
    }

    onRowsPerPageChange(rowsPerPage: RowsPerPage) {
        this.setState({
            currentPageNumber: 1,
            rowsPerPage,
            totalPages: Math.ceil(this.props.dataSource.length / rowsPerPage),
            displayDataIndex: this.getDisplayDataIndex(1, rowsPerPage),
         })
    }

    onPageNumberChange(pageNumber: number, rowsPerPage: RowsPerPage) {
        this.setState({
            currentPageNumber: pageNumber,
            displayDataIndex: this.getDisplayDataIndex(pageNumber, rowsPerPage),
         })
    }

    PageLinks() {
        const { currentPageNumber, totalPages, rowsPerPage } = this.state;
        let pageLinks = [];
        for (let i:number = 1; i <= totalPages; i++) {
            const pageNumber = i;
          pageLinks.push(<li onClick={() => this.onPageNumberChange(pageNumber, rowsPerPage)} className={pageNumber === currentPageNumber ? "active" : "waves-effect"} key={i}><a href="#">{pageNumber}</a></li>);
        }

        return pageLinks;
    }

    public render() {
        const sortedSchema: Schema<T>[] = _.orderBy(this.props.schema, [o => o.index]);
        const { startIndex, endIndex } = this.state.displayDataIndex;
        const totalRows = this.props.dataSource.length;
        const { currentPageNumber, totalPages, rowsPerPage } = this.state;

        return (
            <React.Fragment>
                <FlatCard title={this.props.title}>

                    <StyledTable className="centered">
                        <thead>
                            <tr>{sortedSchema.map(s => (<th key={s.index}>{s.label}</th>))}</tr>
                        </thead>

                        <tbody>
                            {this.props.dataSource.slice(startIndex, endIndex).map((data, index) => (
                                <tr key={index}>{sortedSchema.map((s, subIndex) => (<td key={subIndex}>{s.value(data)}</td>))}</tr>
                            ))}
                        </tbody>
                    </StyledTable>
                    {// ibang dev tong component na to. mejo challenging wahaha. pero connected dapat sa adapter.
                    }
                    <PaginationDiv className="row">

                        <StyledUl className="pagination noselect">
                            <li><span>&nbsp;&nbsp;&nbsp;Rows per page&nbsp;&nbsp;</span></li>
                            <li> <select defaultValue={this.state.rowsPerPage} className="browser-default" onChange={e => this.onRowsPerPageChange(parseInt(e.target.value))}>
                                <option value={RowsPerPage.Twenty}>{RowsPerPage.Twenty}</option>
                                <option value={RowsPerPage.Fifty}>{RowsPerPage.Fifty}</option>
                                <option value={RowsPerPage.OneHundred}>{RowsPerPage.OneHundred}</option>
                            </select></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                            <li><span>{startIndex + 1} - {endIndex + 1} of {totalRows}</span></li>

                            <li className={currentPageNumber > 1 ? "waves-effect" : "disabled"}><a href="#" onClick={() => currentPageNumber > 1 ? this.onPageNumberChange(currentPageNumber - 1, rowsPerPage) : null}><i className="material-icons">chevron_left</i></a></li>
                            
                            {this.PageLinks()}

                            <li className={currentPageNumber !== totalPages ? "waves-effect" : "disabled"}><a href="#" onClick={() => currentPageNumber !== totalPages ? this.onPageNumberChange(currentPageNumber + 1, rowsPerPage) : null}><i className="material-icons">chevron_right</i></a></li>
                        
                        
                        </StyledUl>
                    </PaginationDiv>

                </FlatCard>
            </React.Fragment>
        );
    }
}
