import React,{component} from 'React';
import{
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';

var GoodsListCell = React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <Image
          style = {styles.imageStyle}
          source = {{url:this.props.shopData.mainImageUrl}}
          >
        </Image>
        <View style = {styles.textContainer}>
          <Text style = {styles.nameText}>
          {this.props.shopData.goodsName}
          </Text>
          <Text style = {styles.priceText}>
           ￥{this.props.shopData.goodsPrice}
          </Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'row'
  },

  imageStyle:{
    marginLeft:5,
    marginTop:5,
    marginBottom:5,
    height:70,
    backgroundColor:'red',
    width:70
  },
  textContainer:{
  marginLeft:5,
  marginTop:5,
  marginBottom:5,
  flexDirection:'column',
  width:250,
  backgroundColor:'white',
  height:70,
},

  nameText:{
    height:20,
    fontSize:17,
    color:'#1d1d1d',
  },

  priceText:{
    marginBottom:0,
    height:20,
    fontSize:13,
    color:'red',

  }
});

module.exports = GoodsListCell;
