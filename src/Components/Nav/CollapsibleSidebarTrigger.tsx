import * as React from 'react';

interface ICollapsibleSidebarTriggerProps {
    sidebarId: string;
}

const CollapsibleSidebarTrigger: React.FunctionComponent<ICollapsibleSidebarTriggerProps> = (props) => {
    return (
        <a href="#" data-target={props.sidebarId} className="sidenav-trigger"><i className="material-icons">menu</i></a>
    );
};

export default CollapsibleSidebarTrigger;
