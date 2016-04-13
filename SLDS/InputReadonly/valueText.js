'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../Text');
const View = React.View;

module.exports = React.createClass({
  getDefaultProps(){
    return {
      style:{}
    };
  },
  render: function() {
    return (
      <Text
        style={[styles['Text slds-form-element__static'],this.props.style]}
      >
        {this.props.children}
      </Text>
    );
  }
});