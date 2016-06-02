'use strict';

const React = require('react-native');
const styles = require('./styles');
const Text = require('../../Text');
const View = React.View;
const Icons = require('../../Icons');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      title:'',
      detail:'',
      image:null
    };
  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  getIcon(){
    if(this.props.image){
      return this.props.image
    }
    return <Icons.Standard style={styles['View slds-icon icon-doctype-zip']} name={this.props.icon} />
  },
  render() {
    return (
      <View ref={component => this._root = component} {...this.props} style={styles['View slds-list__item slds-not-selected']}>
        <View style={[styles['View slds-media slds-tile'],{
            flex: 1,
            flexDirection:'row'}]}>

          <View style={styles['View slds-media__figure']}>
{/*
            <Icons.Standard style={styles['View slds-icon icon-doctype-zip']} name={this.props.icon} />
*/}
            { this.getIcon() }
          </View>

          <View style={styles['View slds-media__body']}>
            <View style={styles['View slds-tile__title slds-truncate']}>
              <Text style={styles['Text a']}>{this.props.title}</Text>
            </View>
            <View style={styles['View slds-tile__detail slds-list--horizontal slds-has-dividers slds-text-body--small']}>
              <Text
                style={styles['Text slds-tile__detail slds-list--horizontal slds-has-dividers slds-text-body--small']}
                numberOfLines={1}
              >
                {this.props.detail}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});