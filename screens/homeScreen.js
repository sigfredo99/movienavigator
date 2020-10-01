import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//API search method
import {search} from '../api'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

/*Import Sections*/
import HomeList from '../sections/homeList'
import SearchList from '../sections/searchList'
import MovieDetailsScreen from '../screens/moviedetailsScreen'

const AppContext = React.createContext();
const Stack = createStackNavigator();

const ContextMovieList = ({navigation, route}) => (
  <AppContext.Consumer>
    {(props) => (
       <HomeList {...props} navigation={navigation} route={route}/>
    )}
  </AppContext.Consumer>
);

function LogoTitle() {
    return (
      <Image
        style={{ width: 130, height: 50 }}
        source={require('../shared/images/app-logo.png')}
      />
    );
  }
  export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props);
      }
      state = {
        query: 'Batman',
        results: null,
        resultCount: null,
        pagesLoaded: 1,
      }
      componentDidMount() {
        search(this.state.query, 1)
          .then(result => {
            this.setState({results: result.results, resultCount: result.resultCount, pagesLoaded: 2})
          })
          .catch(() => this.setState({results: null, resultCount: null, pagesLoaded: 1}))
      }
      fetchMore = () => {
        if(this.state.pagesLoaded <= 5){
          search(this.state.query, this.state.pagesLoaded)
          .then(result => {
            this.setState(prevState =>({results: [...prevState.results, ...result.results], pagesLoaded: this.state.pagesLoaded+1})
            )
          })
        }
      }

      render (){
        return(
          <AppContext.Provider value={(this.state)}>
            <Stack.Navigator>
            <Stack.Screen name="MovieList" component={ContextMovieList} 
                initialParams={{ fetchMore: this.fetchMore }}
                options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerTintColor: 'white',
                    headerStyle: {
                    backgroundColor: '#2C2B33',
                            },
                    headerRight: () => ( 
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.button}>
                        <Ionicons name="search-outline" color='white' size={25}/>
                        </TouchableOpacity>
                    </View>
                    ),
                    }}/>
            <Stack.Screen name="Search" component={SearchList} />
            <Stack.Screen name="MovieDetail" component={MovieDetailsScreen} 
                  options={{
                      title: 'Movie Details',
                      headerTitleAlign: 'center',
                      headerTintColor: 'white',
                      headerStyle: {
                          backgroundColor: '#2C2B33',
                      },
      
                  }}/>
            </Stack.Navigator>
          </AppContext.Provider>
       
        );
      }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    button: {
        marginRight: 12,
        backgroundColor:'#2C2B33',
    },
});