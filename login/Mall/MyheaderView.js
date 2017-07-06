import React, {component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Modal,
  Alert,
}from 'react-native'

var MineView = React.createClass({
  render:function(){
    return(
      <Image style = {styles.container}
        source = {{url:'我的_01'}}
        >
        <View style = {styles.setStyle}>
          <Image style = {{height:20, width:20,marginRight:5}}
          source = {{url:'mine_set'}}
            >
          </Image>
          <Text  style = {{color:'white', backgroundColor:'#6dc337',marginRight:10} }>
            设置
          </Text>
        </View>
      <Image style = {styles.headerImageStyle}
        source = {{url:'dontlogin'}}>

      </Image>


  <View style = {styles.loginView}>
    <TouchableHighlight style={{flex:1,justifyContent:'center'}}
      onPress  = {this.props.gotoLogin}
      >
    <Text style = {{color:'white',textAlign:'center'}}>
     登陆/注册
    </Text>
    </TouchableHighlight>
  </View>


      </Image>
    );
  }
});

var styles = StyleSheet.create({
   container:{
     flex:1,
     marginTop:-20,
   },

   setStyle:{
    justifyContent:'flex-end',
    flexDirection:'row',
    marginTop:17,
    height:17,
   },

  headerImageStyle:{
   marginTop:5,
   height:100,
   //alinSelf:'center',
   width:100,
   alignSelf:'center',
 },

  loginView:{
    marginTop:10,
    marginBottom:50,
    width:120,
    height:30,
    justifyContent:'center',
    //alinSelf:'center',
    backgroundColor:'black',
    alignSelf:'center',
  },
});


module.exports = MineView;
