import React, { useState }from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../shared/components/card';

//Import API Config File
import getMovie from '../api'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function imageHandler(poster){
  let posterimage=null;
  if(poster == "N/A"){
    posterimage = {uri: 'https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=6&m=1007557230&s=612x612&w=0&h=2c6NHjfH4sWCgTNoZCDLQx10_PdIfl-dI-nyZ9wF_jI='};
  }else{
    posterimage = {uri: poster};
  }
  return posterimage
}


export default function Row ({props , navigation}) {

  return(
    <TouchableOpacity  style={{ width: screenWidth, height: screenHeight/4 }}
    onPress={() => 
      getMovie(props.id)
      .then(result => 
        console.log(result)
        /*navigation.navigate('MovieDetail',{
          movieData: result
        })*/
      )
      .catch(() =>  navigation.navigate('MovieDetail',{
        movieData: 'false'
      }))
    }>
    <ImageBackground source={imageHandler(props.Poster)} style={styles.image}>
    <Card>
    <Text style={{
      color: '#B2B1B8',
      fontSize: 11}}>Type: {capitalizeFirstLetter(props.Type)}  |  Year: { props.Year }</Text>
    <View
    style={{
    marginTop: 6,
    marginRight:200,
    marginBottom: 2,
    borderBottomColor: '#EF7F1D',
    borderBottomWidth: 4
    }}
    />
    <Text style={{
      color: 'white', 
      fontWeight: 'bold',
      fontSize: 18}}>{props.Title}</Text>
    </Card>
    </ImageBackground>
    </TouchableOpacity>
  );
}

