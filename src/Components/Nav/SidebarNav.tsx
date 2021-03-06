import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RouteComponentProps, Route } from "react-router";
import styled from 'styled-components';
import Constants from '../Shared/Constants';

export interface NavPath {
  url: string;
  label: string;
  icon?: string;
  fabIcon?: string;
  component: React.ComponentClass | React.FunctionComponent;
}

type ISidebarNavProps = RouteComponentProps & {
  id: string;
  navPaths: NavPath[];
}

//#region styles
const StyledUl = styled.ul`
  margin-top: 108px;
  width: 230px;
  z-index: 1;
`;

const StyledLi = styled.li`
  padding: 2px 6px;
`;

const StyledNavLink = styled(Link)`
    border-radius: 270px;
    
    &:hover {
        background-color: ${Constants.hoverColor};
        i, span { color: ${Constants.alternateColor}; }
    }
`;

const StyledSelectedNavLink = styled(StyledNavLink)`
    background-color: ${Constants.hoverColor};
    i, span { color: ${Constants.alternateColor}; }
    pointer-events: none;
`;

const StyledSpan = styled.span`
    color: ${Constants.navFontColor};
`;

const StyledRouteContainer = styled.div`
@media only screen and (min-width: ${Constants.mediumScreen}) {
    padding: 40px 45px 5px;
    margin-left: 230px;
}

@media only screen and (max-width: ${Constants.mediumScreen}) {
    padding: 35px 30px 3px;
}
`;
//#endregion

function isPathSelected(url: string, pathname: string) {
  const hrefParts = pathname.split('/');
  const currentUrl = hrefParts.length > 1 && hrefParts[1] !== '' ? `/${hrefParts[1]}/` : `${hrefParts[0]}/`;

  return currentUrl === url;
}

const SidebarNav: React.FunctionComponent<ISidebarNavProps> = (props: ISidebarNavProps) => (
  <React.Fragment>
    {//collapsible sidebar here
    }
    <ul id={props.id} className="sidenav">
      {props.navPaths.map(navPath => {
        const NavLink = isPathSelected(navPath.url, props.location.pathname) ? StyledSelectedNavLink : StyledNavLink;

        return (
          <StyledLi key={"collapsible" + navPath.url}>
            <NavLink to={navPath.url} className="waves-effect">
              <StyledSpan>{navPath.label}</StyledSpan>
              <i className={`material-icons left ${navPath.fabIcon}`}>{navPath.icon}</i>
            </NavLink>
          </StyledLi>);
      }
      )}
    </ul>


    {//fixed sidebar here
    }
    <StyledUl className="sidenav sidenav-fixed z-depth-0">
      {props.navPaths.map(navPath => {
        const NavLink = isPathSelected(navPath.url, props.location.pathname) ? StyledSelectedNavLink : StyledNavLink;

        return (
          <StyledLi key={navPath.url}>
            <NavLink to={navPath.url} className="waves-effect">
              <StyledSpan>{navPath.label}</StyledSpan>
              <i className={`material-icons left ${navPath.fabIcon}`}>{navPath.icon}</i>
            </NavLink>
          </StyledLi>);
      }
      )}
    </StyledUl>

    {//containers here
    }
    {props.navPaths.map(navPath => (
      <Route key={navPath.url} path={navPath.url} exact >
        <StyledRouteContainer key={"containerDiv_" + navPath.url} className="nav-content">
          <navPath.component />
        </StyledRouteContainer>
      </Route>
    ))}
  </React.Fragment>
);


export default withRouter(SidebarNav);
