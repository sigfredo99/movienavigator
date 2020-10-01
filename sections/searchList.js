import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function SearchList(){
    return(
        <View style={styles.container}>
            <Text>
                This is the Search List
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