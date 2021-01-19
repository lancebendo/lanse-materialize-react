import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/Shared/';
import { SidebarNav, NavPath, CollapsibleSidebarTrigger, HeaderNav } from './Components/Nav/';
import { CardCollection, Collection, Table, Schema, DataFilter } from './Components/Data/';
import mockData from './MOCK_DATA.json';
import mockDataAddress from './MOCK_DATA_ADDRESS.json';
import mockDataCollection from './MOCK_DATA_COLLECTION.json';

//#region mock routes


interface TestObj {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

interface TestAddress {
  id: string;
  first_name: string;
  last_name: string;
}

interface TestCollection {
  name: string;
  date: string;
  title: string;
  content: string;
}

const TestDataCollection: TestCollection[] = JSON.parse(JSON.stringify(mockDataCollection));
const TestDataAddress: TestAddress[] = JSON.parse(JSON.stringify(mockDataAddress));
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


const CardCollectionComponent: React.FunctionComponent = () => (
  <CardCollection dataSource={TestDataAddress} primaryContentSchema={data => data.id} secondaryContentSchema={data => data.first_name} descriptionSchema={data => data.last_name} defaultCardOnClick={() => alert('haha') } dataCardOnClick={(data) => alert(data.first_name)} />
);

const CollectionComponent: React.FunctionComponent = () => (
  <Collection title="Announcements" 
  dataSource={TestDataCollection} 
  titleSchema={data => data.name} 
  subTitleSchema={data => data.title} 
  dateSchema={data => data.date} 
  contentSchema={data => data.content} 
  reloadOnClick={(setLoading) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }}/>
);

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
  component: CollectionComponent,
}

const CollectionPath: NavPath = {
  url: "/collection/",
  label: "Collection",
  icon: "home",
  component: CollectionComponent,
}

const CardCollectionPath: NavPath = {
  url: "/card-collection/",
  label: "Card Collection",
  icon: "home",
  component: CardCollectionComponent,
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
