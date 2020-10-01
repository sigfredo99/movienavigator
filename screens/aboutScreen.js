import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text>
                App Made By: Sigfredo Aponte
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
});