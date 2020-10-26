import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import SearchJobsScreen from '../screens/SearchJobsScreen';
import EmployerDetailsScreen  from '../screens/EmployerDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  JobsList : {
    screen : SearchJobsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  EmployerDetails : {
    screen : EmployerDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'JobsList'
  }
);