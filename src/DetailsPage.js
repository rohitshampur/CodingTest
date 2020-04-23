import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import {DetailsPageStyling as styles} from './DetailsPage.styles';

const DetailsPage = (props) => {
  console.log(props.route.params.data);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(props.route.params.data).then((response) => {
      if (response.ok) {
        response.json().then((resp) => {
          setLoading(false);
          setDetails(resp);
        });
      }
    });
  }, []);

  const TextComponent = ({placeHolder, value}) => {
    let val;
    if (value !== null && value !== undefined) {
      val = value;
    } else {
      val = 'Not available';
    }
    return (
      <View style={styles.textContainer}>
        <Text style={{textAlign: 'left', flex: 1, marginLeft: 16}}>
          {placeHolder} :
        </Text>
        <Text style={{flex: 2}}>{val}</Text>
      </View>
    );
  };

  return loading ? (
    <View />
  ) : (
    <View style={styles.detailsMainContainer}>
      <Image source={{uri: details.avatar_url}} style={styles.imageStyle} />
      <TextComponent placeHolder={'Name'} value={details.name} />
      <TextComponent placeHolder={'Company'} value={details.company} />
      <TextComponent placeHolder={'Location'} value={details.location} />
    </View>
  );
};
export default DetailsPage;
