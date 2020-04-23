import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  listItemContainer: {
    width: 320,
    height: 130,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 8,
    margin: 8,
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  listStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: 150,
    marginLeft: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
