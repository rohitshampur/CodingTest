import {StyleSheet} from 'react-native';

export const DetailsPageStyling = StyleSheet.create({
  detailsMainContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 16,
  },
  imageStyle: {
    width: 100,
    height: 150,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 300,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 8,
  },
});
