import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/Shared/';
import { FlatCard } from './Components/Card/';
import { SidebarNav, NavPath, CollapsibleSidebarTrigger, HeaderNav } from './Components/Nav/';
import { CardCollection, Collection, Table, DataFilter } from './Components/Data/';

//#region mock routes
class Teste extends React.Component {
  public render() {
    return (
        <Collection title="Announcements"/>
    );
  }
}


const TableComponent: React.FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col l2">
        <DataFilter/>
      </div>

      <div className="col l10">
        <Table />
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
