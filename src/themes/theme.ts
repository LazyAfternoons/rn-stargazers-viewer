import {createTheme, makeStyles} from '@rneui/themed';

/**
 * Custom theme applied to rneui components for components wrapped in ThemeProvider.
 */
export const customTheme = createTheme({
  components: {
    Input: {
      containerStyle: {
        paddingHorizontal: 0,
        margin: 0,
      },
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
    },
    CheckBox: {
      style: {
        marginBottom: 15,
      },
      containerStyle: {
        backgroundColor: 'transparent',
        margin: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        marginBottom: 15,
      },
      textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'flex-end',
      },
      iconType: 'material-community',
      checkedIcon: 'checkbox-marked',
      uncheckedIcon: 'checkbox-blank-outline',
    },
  },
});

/**
 * Custom hook for text styles reused in the app.
 */
export const useTextStyles = makeStyles(() => ({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  caption: {
    fontSize: 16,
    marginBottom: 15,
  },
  centered: {
    textAlign: 'center',
  },
}));

/**
 * Custom hook for view styles reused in the app.
 */
export const useViewStyles = makeStyles(() => ({
  growCentered: {
    flexGrow: 1,
    justifyContent: 'center',
  },
}));
