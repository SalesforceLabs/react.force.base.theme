'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../Text');
const ImgView = require('../../ImgView');
const View = React.View;

module.exports = React.createClass({
  getDefaultProps () {
    return {
      title:'',
      detail:''
    };
  },
  setNativeProps (nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  render () {
    return (
      <View ref={component => this._root = component} {...this.props} 
        style={styles['View slds-tile']}>
        <View style={[styles['View slds-tile__title slds-truncate']]}>
          <Text
            style={styles['Text a']}
          >
            {this.props.title}
          </Text>
        </View>
        <View style={[styles['View slds-tile__detail slds-text-body--small']]}>
          <Text
            style={styles['Text slds-truncate']}
          >
            {this.props.detail}
          </Text>
        </View>

      </View>
    );
  }
});