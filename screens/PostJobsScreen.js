import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import { RFValue } from "react-native-responsive-fontsize";

export default class PostJobsScreen extends Component{
  constructor(){
    super();
    this.state ={
        userId : firebase.auth().currentUser.email,
        jobName:"",
        jobDescription:"",
        WagesPerHour:""
      }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  
  addRequest =()=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requested_jobs').add({
        "user_id": userId,
        "job_name":this.state.jobName,
        "job_description":this.state.jobDescription,
        "wages_per_hour":this.state.WagesPerHour,
        "request_id"  : randomRequestId,
    })

    this.setState({
        jobName :'',
        jobDescription : '',
        WagesPerHour:""
    })

    return Alert.alert("Job Requested Successfully")
  }





  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Post A Job" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
            <TextInput
                style ={styles.formTextInput}
                placeholder={"enter job name"}
                onChangeText={(text)=>{
                    this.setState({
                        jobName:text
                    })
                }}
                value={this.state.jobName}
              />
              <TextInput
                style ={styles.formTextInput}
                keyboardType="numeric"
                placeholder={"Wages Per Hour"}
                onChangeText ={(text)=>{
                    this.setState({
                        WagesPerHour:text
                    })
                }}
                value ={this.state.WagesPerHour}
              />

<TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"job Description"}
                onChangeText ={(text)=>{
                    this.setState({
                        jobDescription:text
                    })
                }}
                value ={this.state.jobDescription}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest()}}
                >
                <Text>Post Job</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
  ImageView:{
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  imageStyle:{
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: "center",
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  bookstatus:{
    flex: 0.4,
    alignItems: "center",

  },
  requestedjobName:{
    fontSize: RFValue(30),
    fontWeight: "500",
    padding: RFValue(10),
    fontWeight: "bold",
    alignItems:'center',
    marginLeft:RFValue(60)
  },
  status:{
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  },
  bookStatus:{
    fontSize: RFValue(30),
    fontWeight: "bold",
    marginTop: RFValue(10),
  },
  buttonView:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt:{
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  touchableopacity:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "90%",
  },
  requestbuttontxt:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#be03fc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
