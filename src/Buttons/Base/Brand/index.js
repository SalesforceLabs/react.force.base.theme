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
const Text = require('../../../Text');
import { View, TouchableHighlight } from 'react-native';

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
          style={[styles['View slds-button slds-button--brand'],{paddingTop:8,paddingBottom:8}]}>
            <Text
              style={styles['Text slds-button slds-button--brand']}
            >{this.props.label}</Text>
        </View>
      </TouchableHighlight>
    );
  }
});