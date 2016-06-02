'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../Text');
const Icons = require('../../Icons');
const {View, TouchableHighlight} = React;

module.exports = React.createClass({
  getDefaultProps () {
    return {
      label:' ',
      icon: 'announcement'
    };
  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  getIcon(){
    if(this.props.image){
      return this.props.image;
    }
    return (
        <Icons.Action style={{width:40,height:40}} name={this.props.icon} />
    );

  },
  render () {
    return (
      <View ref={component => this._root = component} {...this.props} style={styles['View slds-list__item']}>
        <View style={styles['View a']}>
          <View style={[styles['View slds-truncate'],{
              flex: 1,
              flexDirection:'row'}]}>
              <View style={[styles['View slds-icon_container slds-icon_container--circle slds-icon-action-share-post slds-m-right--medium'],{backgroundColor:'transparent',paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}]}>
                {this.getIcon()}
              </View>

              <Text style={[styles['Text a'],styles['Text span'],{paddingTop:10}]}>{this.props.label}</Text>
          </View>
        </View>
      </View>
    );
  }
});