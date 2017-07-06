
import React, {component,propTypes} from 'react';

import{
  View,
  Image,
  Text,
  ListView,
  Alert,
  StyleSheet
} from 'react-native';

var goodsUrl = 'http://183.95.84.138:8082/app/goods/search'
var GoodsListCell = require('./GoodsListCel.js');
var MallList = React.createClass({

renderRow:function(rowData){
  return (
    <GoodsListCell
      style = {{height:80}}
      shopData = {rowData}
      >

    </GoodsListCell>
  )
},
getInitialState(){
  return{
    dataSource: []
  };

  this.renderRow = this.renderRow.bind(this);
},

componentWillMount(){
   this.getDataSource();
},

getDataSource(){
  fetch(goodsUrl, {
    body:JSON.stringify({
      'areaCode':'4201',
      'pageNum':1,
      'pageSize':20,
      'sortBy':'00',
      'goodsName':'',
    }),
    headers:{
      'Content-Type':'application/json',
      'token':''
    },

    method:'POST'
  }).then((response) => response.json())
    .then((responseData) =>{
        if (responseData.header.respCode === 200) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
             dataSource:ds.cloneWithRows(responseData.body.rows),
          });
        }else {
          Alert.alert(提示,responseData.header.respMsg);
        }
    })
    .catch((error) => {
      Alert.alert('。。。。。。。');
    }).done();
},

render:function(){
  var tempSource =  this.state.dataSource;
  var content  = tempSource.length === 0 ?
  <View style = {styles.container}/> :

  <ListView
  ref = 'listview'
   dataSource = {this.state.dataSource}
   renderRow={this.renderRow}
   automaticallyAdjustContentInsets={true}
   keyboardDismissMode="on-drag"
   showsVerticalScrollIndicator={false}
  />
    return(
      <View style = {styles.container}>
      {content}
      </View>

    );
  }

});

var styles = StyleSheet.create({
   container:{
     flex:1,
     marginTop:64,
     backgroundColor:'#efefef',
   }
});


module.exports = MallList;
