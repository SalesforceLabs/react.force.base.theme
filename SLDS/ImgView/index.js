var React = require('react-native');
var { requireNativeComponent, PropTypes, NativeModules, } = React;

var ImgView = React.createClass({
  propTypes: {
    /*
      native only
    */
    contentMode: PropTypes.number,
    category: PropTypes.number,
    icon: PropTypes.number,
    /*
    */
    src: PropTypes.string,
    resizeMode: PropTypes.string,
    onFrameChange: PropTypes.func,
    pitchEnabled: PropTypes.bool,

  },
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  },
  render() {
    return (
            <SLDSImgView ref={component => this._root = component} {...this.props}
                {...this.props} 
            />
          );
  },
});

var SLDSImgView = requireNativeComponent('SLDSImgView', ImgView);

module.exports = ImgView;