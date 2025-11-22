import { StyleSheet } from 'react-native';

const barStyles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    width: '100%',
    padding: 7,
  },

  icon: {
    width: 50,
    height: 50,
  },

  menu: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 7,
    borderWidth: 1,
  },
  
  menuOption: {
    width: '100%',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
});

export default barStyles;
