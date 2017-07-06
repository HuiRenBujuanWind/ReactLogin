import React, {component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  StyleSheet
}from 'react-native';

var HeardeView = require('./MyheaderView.js');
var Order = require('./OrderComView.js');
var MenueCom = require('./MenueComView.js');
var Login  = require('../LoginAndRegister/Login.js');
var MineComView = React.createClass({

  gotoLogin:function(){
    this.props.navigator.push({
      component:Login,
      navigationBarHidden:true,
    });
  },

getDataSource:function(){

},
  render:function (){
   return(
     <View style = {style.container}>
       <ScrollView

         >
        <HeardeView
          gotoLogin= {()=> this.gotoLogin()}
          />
        <Order/>
        <View style = {{flex:1, backgroundColor:'#efefef',height:10}}></View>
        <MenueCom></MenueCom>
       </ScrollView>
     </View>

   );
  }
});

var style = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'white'
},

});

module.exports = MineComView;
