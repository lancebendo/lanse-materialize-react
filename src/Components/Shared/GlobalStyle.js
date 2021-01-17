import { createGlobalStyle } from 'styled-components';
import Constants from './Constants';

const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
letter-spacing: .01438571em;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif;
font-size: 1.04em;
color: ${Constants.defaultFontColor};

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

.no-margin-bottom {
  margin-bottom: 0px !important;
}

.no-border-top {
  border-top: 0px !important;
}

.has-bottom-radius {
  border-radius: 0 0 ${Constants.borderRadius} ${Constants.borderRadius};
}

//overwrites materialize picker color
.datepicker-date-display, .datepicker-weekday-display, .datepicker-table td.is-selected{
  background-color: ${Constants.primaryColor} !important;
}
.datepicker-cancel, .datepicker-clear, 
.datepicker-today, .datepicker-done {
  color: ${Constants.primaryColor} !important;
}

@media only screen and (min-width: ${Constants.mediumScreen}) {
    main {
      padding: 53px;
      margin-left: 270px;
    }
    
    .modal { width: 40% !important; }
  }
  
  @media only screen and (max-width: ${Constants.mediumScreen}) {
    main {
      padding: 50px 15px 0;
    }

    .modal { width: 50% !important; }
  }

  @media only screen and (max-width: ${Constants.smallScreen}) {
    .modal { width: 90% !important; }
  }

`;

export default GlobalStyle;
