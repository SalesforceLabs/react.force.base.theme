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
import { View } from 'react-native';
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