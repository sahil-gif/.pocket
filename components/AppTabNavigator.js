


import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import PostJobsScreen from '../screens/PostJobsScreen';
import SearchJobsScreen from '../screens/SearchJobsScreen';

export const AppTabNavigator = createBottomTabNavigator({
  SearchJobs : {
    //screen: BookDonateScreen,
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/bottomtabDollar.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Search Jobs",
    }
  },
  PostJobs: {
    screen: PostJobsScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/postajobbottomtab.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Post Jobs",
    }
  }
});





