import React, {component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,

}from 'react-native';
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var titleArr = ['待支付', '代收货', '待评论', '已完成'];
var imageArr = ['mine_next_pay','mine_car','mine_duihua','mine_chapion'];
var Order = React.createClass({
 renderFirstCom:function(item, i) {
   return(
     <View style = {styles.orderStyle} key = {i}>
       <Image
         style = {styles.topImag}
         source = {{url:imageArr[i]}}
         >

       </Image>

       <Text style = {styles.bottomText}>
        {titleArr[i]}
       </Text>
     </View>
   );
 },

render:function() {
  return(
    <View>
      <View style = {styles.container}>
        <Image
          source = {{url:'mine_dingdan'}}
          style = {styles.titleImg}>

        </Image>

        <Text style = {{marginLeft:10, width:100, marginTop:10}}>
         我的订单
        </Text>

        <Text style = {{marginLeft:ScreenWidth-270, textAlign:'right', marginRight:10, marginTop:10}}>
        查看全部订单
        </Text>

        <Image style = {{marginLeft:10,marginRight:20, backgroundColor:'red'}}>

        </Image>
      </View>

      <View style = {{flex:1, backgroundColor:'#cccccc',height:1, marginTop:10}}>

      </View>
       <View style = {{marginTop:10, flexDirection:'row', flex:1}}>
         {titleArr.map((item, i) => this.renderFirstCom(item,i))}
       </View>

    </View>
  );
},


});

var styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'white'
  },
  titleImg:{
    marginLeft:20,
    marginTop:10,
    width:20,
    height:20,

  },

  orderStyle:{
    backgroundColor:'white',
    width:(ScreenWidth/4),
    alignItems:'center',
  },

  topImag:{
    marginTop:10,
    height:24,
     width:30,
    resizeMode:'contain'

  },

  bottomText:{
    marginTop:10,
    height:15,
    fontSize:12,
    marginBottom:10,
  }

});

module.exports =  Order;
