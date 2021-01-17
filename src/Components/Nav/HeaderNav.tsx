import * as React from 'react';
import styled from 'styled-components';
import Constants from '../Shared/Constants';

const StyledNav = styled.nav`
  background-color: ${Constants.primaryColor} !important;
`;

interface IHeaderNavProps {
    title: string;
    homeUrl?: string;
 }

const HeaderNav: React.FunctionComponent<IHeaderNavProps> = (props) => {
    return (
        <div className="navbar-fixed">
            <StyledNav> 
                <a href={props.homeUrl || "/"} className="brand-logo center">{props.title}</a>
                {props.children}
            </StyledNav>
        </div>
    );
};

export default HeaderNav;
