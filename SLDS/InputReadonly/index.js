'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../Text');
const View = React.View;
const ValueText = require('./valueText');
module.exports = React.createClass({
  getDefaultProps() {
    return {
      label:'',
    };
  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  render: function() {
    return (
      <View ref={component => this._root = component} {...this.props} 
        style={[styles['View slds-form-element'],{marginRight:12,marginLeft:12,marginTop:6,marginBottom:6}]}>
        <Text
          style={styles['Text slds-form-element__label']}
          numberOfLines={1}
        >{this.props.label}</Text>
        <View
          style={[
            styles['View slds-form-element__control slds-has-divider--bottom'],
            {paddingBottom:8,marginTop:-6,backgroundColor:'transparent'}
          ]}>
          {this.props.value&&this.props.value.length?<Text
            style={styles['Text slds-form-element__static']}
          >
            {this.props.value}
          </Text>:null}
          {this.props.children}
        </View>              
      </View>
    );
  }
});
module.exports.ValueText = ValueText;