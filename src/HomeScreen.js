import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import {HomeScreenStyles as styles} from './HomeScreen.styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users?since=135').then((response) => {
      if (response.status === 200) {
        response.json().then((resp) => {
          setList(resp);
        });
      }
    });
  }, []);

  const UserItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={() => {
          navigation.navigate('DetailsPage', {data: item.url});
        }}>
        <View style={styles.innerContainer}>
          <Image style={styles.imageStyle} source={{uri: item.avatar_url}} />
          <View style={styles.textContainer}>
            <Text style={{fontWeight: 'bold'}}>{item.login}</Text>
            <Text style={{fontStyle: 'italic'}} numberOfLines={2}>
              {item.url}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={list}
        contentContainerStyle={styles.listStyle}
        renderItem={({item}) => {
          return <UserItem item={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
