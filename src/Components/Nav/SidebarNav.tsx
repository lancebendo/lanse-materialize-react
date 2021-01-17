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
  width: 270px;
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
    padding: 40px 40px 5px;
    margin-left: 270px;
}

@media only screen and (max-width: ${Constants.mediumScreen}) {
    padding: 35px 30px 3px;
}
`;
//#endregion


const SidebarNav: React.FunctionComponent<ISidebarNavProps> = (props: ISidebarNavProps) => {

  function isPathSelected(url: string) {
    const hrefParts = props.location.pathname.split('/');
    const currentUrl = hrefParts.length > 1 && hrefParts[1] !== '' ? `/${hrefParts[1]}/` : `${hrefParts[0]}/`;

    return currentUrl === url;
  }

  return (
    <React.Fragment>

      <ul id={props.id} className="sidenav">
        {props.navPaths.map(navPath => {
          const _NavLink = isPathSelected(navPath.url) ? StyledSelectedNavLink : StyledNavLink;

          return (
            <StyledLi key={props.id + navPath.url}>
              <_NavLink to={navPath.url} className="waves-effect">
                <StyledSpan>{navPath.label}</StyledSpan>
                <i className={`material-icons left ${navPath.fabIcon}`}>{navPath.icon}</i>
              </_NavLink>
            </StyledLi>);
        }
        )}

      </ul>

      <StyledUl className="sidenav sidenav-fixed z-depth-0">
        {props.navPaths.map(navPath => {
          const _NavLink = isPathSelected(navPath.url) ? StyledSelectedNavLink : StyledNavLink;

          return (
            <StyledLi key={navPath.url}>
              <_NavLink to={navPath.url} className="waves-effect">
                <StyledSpan>{navPath.label}</StyledSpan>
                <i className={`material-icons left ${navPath.fabIcon}`}>{navPath.icon}</i>
              </_NavLink>
            </StyledLi>);
        }
        )}
      </StyledUl>

      {props.navPaths.map(navPath => (
        <StyledRouteContainer className="nav-content">
          <Route key={navPath.url} path={navPath.url} exact component={navPath.component} />
        </StyledRouteContainer>
      ))}

    </React.Fragment>
  );
};


export default withRouter(SidebarNav);
