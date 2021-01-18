import React, { useEffect} from 'react';
import FlatCard from '../Card/FlatCard';
import styled from 'styled-components';
import Constants from '../Shared/Constants';

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledButton = styled.button`
  background-color: ${Constants.primaryColor} !important;
`;


interface IDataFilterProps {
}

const DataFilter: React.FunctionComponent<IDataFilterProps> = (props) => {

  useEffect(() => globalThis.M.updateTextFields());

  return (
    <FlatCard title="Filter">
      <StyledDiv className="row">
        <form className="col s12">
          <div className="input-field col s12">
            <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s12">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field col s12">
            <input disabled value="I am not editable" id="disabled" type="text" className="validate" />
            <label htmlFor="disabled">Disabled</label>
          </div>
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <StyledButton className="btn waves-effect waves-light right" type="submit" name="action">Apply
      </StyledButton>
        </form>
      </StyledDiv>
    </FlatCard>
  );
};

export default DataFilter;
