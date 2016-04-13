'use strict';

const React = require('react-native');
const styles = require('../styles');
const Text = require('../Text');
const View = React.View;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      label: '',
    }
  },
  getClassName: function() {
    let classNames = ['slds-badge'];
    if(this.props.theme){
      classNames.push('slds-theme--'+this.props.theme);
    }
    return classNames.join(' ');
  },
  render: function() {
    const className = this.getClassName();
    return (
      <View style={styles.badges['View '+className]}>
        <Text style={styles.badges['Text '+className]}>
          {this.props.label}
        </Text>
      </View>
    );
  }
});