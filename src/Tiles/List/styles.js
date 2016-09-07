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
 
import React, {PixelRatio} from 'react-native';


module.exports = React.StyleSheet.create({ 'View slds-list--vertical slds-has-dividers--bottom-space slds-has-list-interactions':
   { marginTop: 0,
     marginBottom: 0,
     marginLeft: 0,
     marginRight: 0,
     paddingTop: 0,
     paddingBottom: 0,
     paddingLeft: 0,
     paddingRight: 0 },
  'Text slds-list--vertical slds-has-dividers--bottom-space slds-has-list-interactions': {},
  'View slds-list__item slds-not-selected':
   { paddingTop: 12,
     paddingBottom: 12,
     paddingLeft: 12,
     paddingRight: 12,
     borderBottomWidth: 1,
     borderBottomColor: '#d8dde6' },
  'Text slds-list__item slds-not-selected': {},
  'View slds-media slds-tile': { alignItems: 'flex-start' },
  'Text slds-media slds-tile': {},
  'View slds-media__figure': { marginRight: 12 },
  'Text slds-media__figure': {},
  'View slds-icon icon-doctype-zip': { width: 32, height: 32, borderRadius: 4, overflow: 'hidden' },
  'Text slds-icon icon-doctype-zip': {},
  'View use': {},
  'Text use': {},
  'View slds-media__body': { marginBottom: 0, flex: 1 },
  'Text slds-media__body': {},
  'View slds-tile__title slds-truncate':
   { marginTop: 0,
     marginBottom: 0,
     marginLeft: 0,
     marginRight: 0,
     paddingTop: 0,
     paddingBottom: 0,
     paddingLeft: 0,
     paddingRight: 0,
     position: 'relative',
     overflow: 'hidden' },
  'Text slds-tile__title slds-truncate': {fontSize: 14},
  'View a': { backgroundColor: 'transparent' },
  'Text a': { color: '#0070d2', fontSize: 16 },
  'View slds-tile__detail slds-list--horizontal slds-has-dividers slds-text-body--small':
   { marginTop: 0,
     marginBottom: 0,
     marginLeft: 0,
     marginRight: 0,
     paddingTop: 0,
     paddingBottom: 0,
     paddingLeft: 0,
     paddingRight: 0,
     position: 'relative' },
  'Text slds-tile__detail slds-list--horizontal slds-has-dividers slds-text-body--small': { fontSize: 14, color: '#54698d' },
  'View slds-truncate slds-list__item':
   { marginRight: 0,
     paddingRight: 0,
     position: 'relative',
     alignSelf: 'center',
     overflow: 'hidden' },
  'Text slds-truncate slds-list__item': {} });