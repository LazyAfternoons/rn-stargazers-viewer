import {createTheme, makeStyles} from '@rneui/themed';

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
