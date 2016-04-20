const React = require('react-native');
const { 
  requireNativeComponent, 
  PropTypes, 
  NativeModules, 
  View
} = React;

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
              style={this.props.style}
              iconColor={this.props.iconColor}
              iconCode={this.props.iconCode}
              iconScale={this.props.iconScale}
              fontName={this.props.fontName}
            />;
  },
});
