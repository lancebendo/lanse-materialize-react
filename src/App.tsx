import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/Shared/';
import { SidebarNav, NavPath, CollapsibleSidebarTrigger, HeaderNav } from './Components/Nav/';
import { CardCollection, Collection, Table, Schema, DataFilter } from './Components/Data/';
import mockData from './MOCK_DATA.json';

//#region mock routes
class Teste extends React.Component {
  public render() {
    return (
        <Collection title="Announcements"/>
    );
  }
}

interface TestObj {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

const TestData: TestObj[] = JSON.parse(JSON.stringify(mockData));

const x: Schema<TestObj>[] = [{
  label: "Firstname",
  index: 2,
  value: (data: TestObj) => (<span>{data.first_name}</span>),
}, {
  label: "Lastname",
  index: 1,
  value: (data: TestObj) => (<span>{data.last_name}</span>),
}, {
  label: "Email",
  index: 0,
  value: (data: TestObj) => (<span>{data.email}</span>),
}, {
  label: "Gender",
  index: 3,
  value: (data: TestObj) => (<span>{data.gender}</span>),
}, {
  label: "IP Address",
  index: 4,
  value: (data: TestObj) => (<span>{data.ip_address}</span>),
}];


const TableComponent: React.FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col l2">
        <DataFilter/>
      </div>

      <div className="col l10">
        <Table title="Test Table" dataSource={TestData} schema={x}/>
      </div>
    </div>
  );
}

const Home: NavPath = {
  url: "/",
  label: "Home",
  icon: "home",
  component: Teste,
}

const CollectionPath: NavPath = {
  url: "/collection/",
  label: "Collection",
  icon: "home",
  component: Collection,
}

const CardCollectionPath: NavPath = {
  url: "/card-collection/",
  label: "Card Collection",
  icon: "home",
  component: CardCollection,
}

const TablePath: NavPath = {
  url: "/table/",
  label: "Table",
  icon: "home",
  component: TableComponent,
}
//#endregion


function App() {
  useEffect(() => {
    globalThis.M.AutoInit();
  });


  return (
    <div className="App">
      <GlobalStyle />

      <HeaderNav title="Test App">
        <CollapsibleSidebarTrigger sidebarId="slide-out" />
      </HeaderNav>

      <BrowserRouter>
        <SidebarNav id="slide-out" navPaths={[Home, CollectionPath, CardCollectionPath, TablePath]} />
      </BrowserRouter>

    </div>
  );
}

export default App;
