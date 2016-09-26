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
 
import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const pick = require('lodash.pick');

const BaseIconNative = require('../BaseIconNative');

const iconCodes = require('./iconCodes');


const FONT_NAME = 'SalesforceDesignSystemIconsStandard';
const ICON_SCALE = 1;


const getCodeAndColorByName = (iconName) => {
  const name = iconName.toLowerCase().replace(/_/g,'');
  const index = iconCodes.names.indexOf(name);
  return {code:iconCodes.codes[index], color:iconCodes.colors[index]};
};


module.exports = React.createClass({

  getDefaultProps(){
    return {
      size: 50,
      iconCode: "\uEA03",
      iconColor: "white",
      name:'like',
      isRound: false
    };
  },

  propTypes: {
    size: React.PropTypes.number,
    iconName: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    isRound: React.PropTypes.bool
  },

  getBGColor (iconConfig) {
    return {
      red: 255*iconConfig.color[0],
      green: 255*iconConfig.color[1],
      blue: 255*iconConfig.color[2]
    };
  },

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },

  render () {
    const iconConfig = getCodeAndColorByName(this.props.name)
    const bgColor = this.getBGColor(iconConfig);

    return <View {... this.props} style={{
            backgroundColor:'rgb('+bgColor.red+','+bgColor.green+','+bgColor.blue+')',
            borderRadius:this.props.isRound?Math.floor(this.props.size/2):Math.floor(this.props.size/10)
          }}>
      <BaseIconNative 
        style={[{width:50,height:50},pick(this.props.style,['width','height'])]}
        iconCode={iconConfig.code}
        iconColor='#ffffff'
        iconScale={ICON_SCALE}
        fontName={FONT_NAME}
      />
      </View>;
  }

});

module.exports.names = iconCodes.names;