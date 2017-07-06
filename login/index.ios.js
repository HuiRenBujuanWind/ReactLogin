/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
  TabBarIOS
} from 'react-native';

var Mall = require ('./Mall/GoodsList.js');
var HomeComView = require('./Mall/HomeComView.js');
var MineComView = require('./Mall/MineComView.js')
var MengNiuMall = React.createClass({
  getInitialState(){
    return {
      changeTab:'home',
    };
  },

  changeTab(changeTab){
    this.setState({
   changeTab:changeTab,
    });
  },

render:function(){
   return(
     <TabBarIOS>
        <TabBarIOS.Item
          title = '首页'
          onPress = {()=> (this.changeTab('home'))}
          icon = {{'url':'未标题-1_03'}}
          selectedIcon = {{'url':'未标题-1_23'}}
          selected = {this.state.changeTab === 'home'}

          >
         <NavigatorIOS
          style = {styles.container}
          ref = 'navi'
          initialRoute = {{
            title:'首页',
            component:HomeComView,
            navigationBarHidden:true
          }}
           >
         </NavigatorIOS>
        </TabBarIOS.Item>

         <TabBarIOS.Item
         title = '商城'
         onPress = {()=> (this.changeTab('mall'))}
         selected = {this.state.changeTab === 'mall'}
         icon = {{'url':'未标题-1_05'}}
         selectedIcon = {{'url':'未标题-1_22'}}
           tintColor="yellow"
           >
          <NavigatorIOS
            style = {styles.container}
            ref = 'navi'
            initialRoute = {{
              title:'商城',
              component:Mall,
              navigationBarHidden:false
            }}
            >
          </NavigatorIOS>
         </TabBarIOS.Item>
     <TabBarIOS.Item
      title = '我的'
      onPress = {() => (this.changeTab('mine'))}
      selected = {this.state.changeTab === 'mine'}
      icon = {{'url':'未标题-1_12'}}
      selectedIcon = {{url:'未标题-1_20'}}
       >
       <NavigatorIOS
        style = {styles.container}
        ref = "navi"
        initialRoute = {{
          title:'我的',
          component:MineComView,
          navigationBarHidden:true
        }}
         >
       </NavigatorIOS>
     </TabBarIOS.Item>
     </TabBarIOS>
   );

}

});
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'yellow',
    flexDirection:'column'
  },

})

AppRegistry.registerComponent('login', () => MengNiuMall);
