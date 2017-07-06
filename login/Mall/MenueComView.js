
import React, {component,propTypes} from 'react';

import{
  View,
  Image,
  Text,
  ListView,
  Alert,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

var titleArr = ['我的收藏', '我的优惠劵', '关于我们','联系客服','意见反馈','我要代付'];
var titleImgArray = ["mine_wujiao",
                     "mine_youhui",
                     "mine_about",
                     "mine_service",
                     "mine_mes",
                     "mine_daifu"];


var MenueCom = React.createClass({
renderItem:function(item,i){
  var content =  i=== 1?
  <View style = {{backgroundColor:'#efefef', flex:1, height:10}}></View>:
  <View style = {{backgroundColor:'#cccccc', flex:1, height:1}}></View>
  return (

    <View style={{flex:1}} key = {i}>
      <TouchableHighlight
        onPress = {this.props.gotoLogin}
        >
        <View style = {styles.itemView}>
          <Image style = {styles.imageStyle}
            source = {{url:titleImgArray[i]}}
            >

          </Image>

          <Text style = {styles.titleStyle}>
           {titleArr[i]}
          </Text>
          <Image>

          </Image>
        </View>
      </TouchableHighlight>

       {content}
    </View>

  );
},

render:function(){
  return(
    <View style = {styles.container}>

     {
       titleArr.map((item, i)=>this.renderItem(item, i))
     }


    </View>
  );
}

});

var styles = StyleSheet.create({
     container:{
       flex:1,
     },

     itemView:{
       height:45,
       flexDirection:'row',
       flex:1
     },

     imageStyle:{
       marginLeft:20,
       height:20,
       width:20,
       alignSelf:'center',

     },

     titleStyle:{
       marginLeft:20,
       height:25,
       marginTop:15

     }

});

module.exports = MenueCom;
