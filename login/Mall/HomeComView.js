import React, {component,propTypes} from 'react';

import{
  View,
  Image,
  Text,
  ListView,
  Alert,
  StyleSheet
} from 'react-native';

var HomeComponet = React.createClass({
 render:function(){
   return(
     <View style ={styles.container}>
      <Image style = {styles.imageStyle}
        source = {{url:'home_111'}}
        >
      </Image>
     </View>
   );
 }

});

var  styles = StyleSheet.create({
  container:{
    flex:1,
  },

  imageStyle:{
    flex:1,
    backgroundColor:'yellow'
  }

});

module.exports = HomeComponet;
