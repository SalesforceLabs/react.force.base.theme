'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../../Text');
const {View, TouchableHighlight} = React;

module.exports = React.createClass({
  getDefaultProps () {
    return {
      label:''
    };
  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  handlePress () {
    if(this.props.onPress){
      this.props.onPress();
    }
  },
  render () {
    return (
      <TouchableHighlight 
          activeOpacity={1}
          underlayColor="rgb(210, 230, 255)"
          onPress={this.handlePress}>
        <View ref={component => this._root = component} {...this.props} 
          style={[styles['View slds-button slds-button--neutral'],{paddingTop:8,paddingBottom:8}]}>
            <Text
              style={styles['Text slds-button slds-button--neutral']}
            >{this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});