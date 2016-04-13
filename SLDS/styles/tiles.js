var React = require('react-native');
var StyleSheet = React.StyleSheet;
var PixelRatio = React.PixelRatio;

const styles = { 
  'View slds-media slds-tile': { 
    alignItems: 'flex-start',
    flex: 1,
    flexDirection:'row'
  },
  'Text slds-media slds-tile': {},
  'View slds-media__figure': { marginRight: 12 },
  'Text slds-media__figure': {},
  'View slds-icon slds-icon-standard-groups':
   { width: 32,
     height: 32,
     backgroundColor: '#779ef2',
     borderRadius: 4,
     overflow: 'hidden' },
  'Text slds-icon slds-icon-standard-groups': {},
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
  'Text slds-tile__title slds-truncate': {},
  'View slds-tile__detail slds-text-body--small': { marginBottom: 0, position: 'relative' },
  'Text slds-tile__detail slds-text-body--small': { fontSize: 12, color: '#54698d' },
  'View slds-truncate':
   { marginTop: 0,
     marginBottom: 0,
     marginLeft: 0,
     marginRight: 0,
     paddingTop: 0,
     paddingBottom: 0,
     paddingLeft: 0,
     paddingRight: 0,
     overflow: 'hidden' },
  'Text slds-truncate': {}
};
module.exports = StyleSheet.create(styles);