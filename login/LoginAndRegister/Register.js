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
  TextInput
} from 'react-native';

var titleArr = ['用户名：', '密码：', '确认密码：', '邮箱：'];
var placArr  = ['请输入用户名','请输入密码', '请再次输入密码','请输入短信验证码'];
var RegisterView = React.createClass({

  renderSelect:function(item, i){
    return(

      <View style = {styles.selectView} key ={i}>
        <Text style = {styles.titleStyle} numberOfLines = {1}>
          {titleArr[i]}
        </Text>
        <TextInput style={styles.textInputStyle} placeholder = {placArr[i]}>

        </TextInput>
      </View>
    );
  },

  render:function(){
    return(
      <ScrollView>
        <View style = {styles.forView} >
         {
          titleArr.map((item, i)=>this.renderSelect(item, i))
         }
        </View>

        <View style = {styles.tochStyle}>
          <TouchableHighlight style = {{width:200, height: 40, justifyContent:'center'}}>

             <Text style = {{fontSize:18 , color:'white', textAlign:'center'}}>
                    注册
              </Text>
          </TouchableHighlight>
        </View>

      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
container:{
    flex:1,
  },

forView:{
  marginLeft:20,
  marginRight:20,
  marginTop:40,
  height:200
},

selectView:{
  marginLeft:0,
  marginRight:0,
  height:40,
  marginTop:10,
  flexDirection:'row',
},

titleStyle:{
  marginTop:11,
  marginLeft:0,
  flex:0.26,
  height:18,
  fontSize:17,
},

textInputStyle:{
  marginLeft:5,
  flex:0.74,
  height:40,
  borderColor:'gray',
  borderWidth:1,
},

tochStyle:{
  alignItems:'center',
  justifyContent:'center',
  width:200,
  height:40,
  alignSelf:'center',
  backgroundColor:'green',
  marginTop:40,
}




});

module.exports = RegisterView ;
