import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';


//API Movie Data method
import {getMovie} from '../api'

export default class MovieDetailsScreen extends React.Component{
    constructor(props) {
        super(props);
      }
      
      
      render(){
          console.log(this.props)
        return(
            <View style={styles.container}>
                <Text>
                    Title:
                </Text>
            </View>
        );
      }

}

/*export default function MovieDetailsScreen({ route }){
    const { movieData } = route.params;
    console.log(movieData)
    return(
       
        <View style={styles.container}>
            <Text>
                Title: 
            </Text>
        </View>
    );
}*/

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
});