import { StyleSheet } from 'react-native';

const collectionStyles = StyleSheet.create({
  collection: {
    flexDirection: 'column',
    padding: 7,
    paddingTop: 0,
    flex: 0,
  },

  element: {
    justifyContent: 'center',
    marginBottom: 7,
    borderWidth: 1,
    flexDirection: 'column',
    padding: 10,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },

  text: {
    fontSize: 16,
    width: '100%',
    borderRadius: 7,
    padding: 3,
  }
});

export default collectionStyles;
