const React = require('react-native');
const { requireNativeComponent, PropTypes, NativeModules, } = React;

const SLDSIconUtility = requireNativeComponent('SLDSIconUtility');

module.exports = React.createClass({
  propTypes: {
    iconScale: PropTypes.number,
    iconCode: PropTypes.string,
    iconColor: PropTypes.string,
  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  render() {
    return <SLDSIconUtility 
              style={{
                width:60,
                height:60,
                backgroundColor:'blue',
                borderRadius:10
              }}
              iconColor={this.props.iconColor}
              iconCode={this.props.iconCode}
              fontName={this.props.fontName}
            />
    ;
  },
});
