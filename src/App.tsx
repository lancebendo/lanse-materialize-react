import React, { useEffect } from 'react';
import SidebarNav, { NavPath } from './Components/Nav/SidebarNav';
import { BrowserRouter } from 'react-router-dom';
import CollapsibleSidebarTrigger from './Components/Nav/CollapsibleSidebarTrigger';
import HeaderNav from './Components/Nav/HeaderNav';
import GlobalStyle from './Components/Shared/GlobalStyle';
import FlatCard from './Components/Card/FlatCard';


//#region mock routes
class Teste extends React.Component {
  public render() {
    return (
      <div>
        <FlatCard/>
      </div>
    );
  }
}
class Teste2 extends React.Component {
  public render() {
    return (
      <div>
        <h1>te222222222e</h1>
      </div>
    );
  }
}

const Tes3: React.FunctionComponent = () => {
  return (
    <div>
      <h1>t333</h1>
    </div>
  );
}

const path: NavPath = {
  url: "/",
  label: "facebook",
  icon: "home",
  component: Teste,
}
const path2: NavPath = {
  url: "/facebook2/",
  label: "facebook2",
  icon: "home",
  component: Tes3,
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
        <SidebarNav id="slide-out" navPaths={[path, path2]} />
      </BrowserRouter>

    </div>
  );
}

export default App;
