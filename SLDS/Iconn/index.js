var React = require('react-native');
var { requireNativeComponent, PropTypes, NativeModules, } = React;


var SLDSImgView = requireNativeComponent('SLDSImgView', ImgView);

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


module.exports = ImgView;