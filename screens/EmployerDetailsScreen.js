import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config.js';

export default class EmployerDetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      userId          : firebase.auth().currentUser.email,
      userName        : "",
      employerId      : this.props.navigation.getParam('details')["user_id"],
      jobId       : this.props.navigation.getParam('details')["request_id"],
      jobName        : this.props.navigation.getParam('details')["job_name"],
      jobDescription   : this.props.navigation.getParam('details')["job_description"],
      employerName    : '',
      employerContact : '',
      employerAddress : '',
      employerRequestDocId : ''
    }
  }



  getRecieverDetails(){
    db.collection('users').where('email_id','==',this.state.employerId).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          employerName    : doc.data().first_name,
          employerContact : doc.data().contact,
          employerAddress : doc.data().address,
        })
      })
    });

    db.collection('requested_jobs').where('request_id','==',this.state.jobId).get()
    .then(snapshot=>{
      snapshot.forEach(doc => {
        this.setState({employerRequestDocId:doc.request_id})
     })
  })}


  getUserDetails=(userId)=>{
    db.collection("users").where('email_id','==', userId).get()
    .then((snapshot)=>{
      snapshot.forEach((doc) => {
        this.setState({
          userName  :doc.data().first_name + " " + doc.data().last_name
        })
      })
    })
  }

 


  


  componentDidMount(){
    this.getRecieverDetails()
    this.getUserDetails(this.state.userId)
  }


    render(){
      return(
        <View style={styles.container}>
          <View style={{flex:0.1}}>
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"Post Jobs", style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
              backgroundColor = "#fcdba4"
            />
          </View>
          <View style={{flex:0.3}}>
            <Card
                title={"Job Information"}
                titleStyle= {{fontSize : 20}}
              >
              <Card >
                <Text style={{fontWeight:'bold'}}>Name : {this.state.jobName}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Description : {this.state.jobDescription}</Text>
              </Card>
            </Card>
          </View>
          <View style={{flex:0.3}}>
            <Card
              title={"Employer Contact Details"}
              titleStyle= {{fontSize : 20}}
              >
              <Card>
                <Text style={{fontWeight:'bold'}}>Name: {this.state.employerName}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Contact: {this.state.employerContact}</Text>
              </Card>
              <Card>
                <Text style={{fontWeight:'bold'}}>Address: {this.state.employerAddress}</Text>
              </Card>
            </Card>
          </View>
          
        </View>
      )
    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(60),
    backgroundColor: "#7a05f7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 16,
  },
});