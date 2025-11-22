import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  container: {
    padding: 5,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  
  mainText: {
    fontFamily: 'StackSans',
    color: '#e0def4',
    textAlign: 'center',
  },

  themeButton: {
    position: 'absolute',
    right: 15,
    bottom: 60,
    backgroundColor: '#2a273f',
    borderColor: '#9ccfd8',
    borderWidth: 1,
    padding: 3,
    borderRadius: '100%',
    width: 27,
    height: 27,
  },
});

export default mainStyles;
