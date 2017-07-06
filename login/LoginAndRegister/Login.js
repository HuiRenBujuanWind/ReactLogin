import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Alert,
  NavigatorIOS,
  NativeModules,
  TextInput
} from 'react-native';

var CalendarManage = NativeModules.CalendarManager;
var Register = require('./Register.js');
var MallList = require('../Mall/GoodsList.js')
var loginURl = 'http://183.95.84.138:8082/app/user/login';

var Login = React.createClass({

 getInitialState:function(){
   return{
     passWord:'',
     userName:'',
   };
 },

 render:function(){
  return (
    <ScrollView style = {styles.container} >
    <View style = {{marginLeft:20, marginTop:10}}>
      <TouchableHighlight
       onPress = {() => this.props.navigator.pop()}
        >
        <Text>
          返回
        </Text>
      </TouchableHighlight>
    </View>



     <Image
       source = ''
       style = {styles.iconStyle}
       >
     </Image>


    <View style = {styles.userNameBox}>
     <Image style = {styles.imgeStyle}/>
     <TextInput
       style = {styles.textInputStyle}
       placeholder = '请输入用户名'
       onChangeText = {(text) => this.setState({
         userName:text,
       })}
      />
    </View>

    <View style = {styles.passWordBox}>
      <Image style = {styles.imgeStyle}/>
      <TextInput
        style = {styles.textInputStyle}
        placeholder = '请输入密码 '
        onChangeText = {(text) => this.setState({
          passWord:text,
        })}
        secureTextEntry = {true}
      />
    </View>

    <View style = {styles.foReView}>
      <TouchableHighlight
        style = {styles.touchStyleFo}
        onPress = {this.goForget}
        >
        <Text style = {{fontSize:13, textAlign:'left'}}>
          忘记密码
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        style = {styles.touchStyleRe}
        onPress = {this.gotoRegister}
      >
        <Text style = {{fontSize: 13, textAlign:'right'}}>
        注册
        </Text>
      </TouchableHighlight>
    </View>

<View style = {styles.touchuStyle}>
  <TouchableHighlight
    onPress = {this.gotoLogin}

    style = {{width:200, height: 45, justifyContent:'center'}}
    >
    <Text style ={{color:'white', justifyContent:'center', textAlign:'center' , fontSize:18}}>
      登录
    </Text>
  </TouchableHighlight>
</View>

    </ScrollView>
  );


},

gotoLogin:function(){
  CalendarManage.domd5((this.state.passWord) , (error, events)=> {
    fetch(loginURl, {
      headers:{
        "token":'',
       'Content-Type':'application/json'
      },
      body:JSON.stringify({
       'loginName':this.state.userName,
       'password':events,
      }),
      method:'POST',
    }).then((response) => response.json())
      .then((responseData) => {

         if (responseData.header.respCode == 200) {
           this.props.navigator.pop({
            //  component:MallList,
            //  title:'商城',
            //  leftButton:null
           });
         }else{
           Alert.alert(responseData.header.respMsg);
         }
    }).catch((error) => {
      Alert.alert('。。。。。。。');
    });
});
},

gotoRegister:function(){
  this.props.navigator.push({
    title :'注册',
    component:Register,

  });
}


});

var styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'yellow',
  flexDirection:'column'
},
iconStyle:{
   alignSelf:'center',
   backgroundColor:'red',
   width:80,
   height:80,
   marginTop:50,
},
userNameBox:{
  marginTop :70,
  height:40,
  flexDirection:'row',
  marginLeft:50,
  marginRight:50,
},

passWordBox:{
  marginTop :30,
  height: 40,
  marginLeft:50,
  marginRight:50,
  flexDirection:'row',
},

imgeStyle:{
 backgroundColor:'red',
 height:40,
 width:40
},

textInputStyle:{
   height:40,
   width:260,
   backgroundColor:'white'
},

touchuStyle:{
  alignSelf :'center',
  backgroundColor:'gray',
  marginTop:30,
  width :200,
  height:45,
  justifyContent: 'center',
},
foReView:{
  marginTop:40,
  height:40,
  justifyContent:'center',
  flexDirection:'row'
},
touchStyleRe:{
  marginRight:10,
  marginLeft:70,
  width:80,
  height:40,
  alignItems:'center',
  justifyContent: 'center',

},
touchStyleFo:{
  marginLeft:10,
  width:80,
  height:40,
  alignItems:'center',
  justifyContent: 'center',
}

});

module.exports = Login;
