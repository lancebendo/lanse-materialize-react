class Constants {
    private static instance: Constants;

    public static getInstance(): Constants {
        if (!Constants.instance) {
            Constants.instance = new Constants();
        }

        return Constants.instance;
    }


    //background colors
    flatCardBorderColor: string = '#e0e0e0';
    hoverColor: string = '#b3e5fc';
    alternateHoverColor: string = '#f5f5f5';
    primaryColor: string = '#03a9f4';
    alternateColor: string = '#0277bd';
    footerColor: string = '#fafafa';


    // font colors
    defaultFontColor = '#212121';
    descriptionFontColor = '#616161';
    navFontColor = '#424242';
    iconFontColor = '#424242';
    proceedFontColor = '#4d90fe'; // theme-attached color
    cancelFontColor = '#424242';


    // font sizes
    primaryHeaderFontSize = '1.9rem';
    secondaryHeaderFontSize = '1.4rem';
    parimaryDescFontSize = '1.15rem';
    secondaryDescFontSize = '0.9rem';
    navigationLabelFontSize = '1rem';
    linkLabelFontSize = '1rem';


    // etc
    borderRadius = '8px';
    minSectionHeight = '51px';


    // media query ranges
    smallScreen = '600px';
    mediumScreen = '992px';
    largeScreen = '1200px';


    // formats
    dateFormat = 'MMMM D, YYYY';

}



export default Constants.getInstance();
