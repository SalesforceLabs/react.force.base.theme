/*
 * Copyright (c) 2016, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
 
'use strict';

import React from 'react';
const styles = require('./styles');
const Text = require('../../Text');
const Icons = require('../../Icons');
import {View, TouchableHighlight} from 'react-native';

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