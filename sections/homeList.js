import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ImageBackground, FlatList,ScrollView, Button} from 'react-native';


import Row from './row'

const SectionListContacts = (props) =>{
  return(
    <FlatList
       data={props.results}
       renderItem={({ item }) =>  <Row props={item} navigation={props.navigation}/> }
       keyExtractor={item => item.id}
       onEndReached={props.route.params.fetchMore}
     />
   );

}

export default SectionListContacts;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black'
  },
  headerText: {
    color: 'white'
  }
})