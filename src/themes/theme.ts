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
  subHeader: {
    borderRadius: 2,
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 5,
    marginBottom: 10,
  },
  centered: {
    textAlign: 'center',
  },
}));
