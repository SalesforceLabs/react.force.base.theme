const juice = require('juice');
const cheerio = require('cheerio');
const postcss = require('postcss');

const cssLonghand = require('css-longhand');

const RNC = require('react-native-css');
const css = new RNC();

const merge = require('lodash.merge');


const PROP_TYPES = require('./propTypes');

const VIEW_STYLE_PROPS = PROP_TYPES.Layout.concat(PROP_TYPES.View);

const TEXT_STYLE_PROPS = PROP_TYPES.Text;

const pick = require('lodash.pick');
const filter = require('lodash.filter');
const omitby = require('lodash.omitby');


const getViewStyles = (styles)=>{
  return pick(styles,VIEW_STYLE_PROPS);
};

const getTextStyles = (styles)=>{
  return omitby(pick(styles,TEXT_STYLE_PROPS), (o)=>{
    console.log('!!! O: ',o);
    if(o !== o) return true; // crazy NaN check
    if(o === 'inherit') return true;
    if(o === 'undefined') return true;
    return false;
  });
};

const getStyleName = (tagName, className)=>{
  if(className){
    return className;
  }
  return tagName;
};

const processStyle = (el,output)=>{
  if(el && el.attribs){
    const name = getStyleName(el.name, el.attribs['class']);
    console.log('#######################');
    const value = el.attribs['style'];
    const long = cssLonghand(toCSS(name,value));
    const rnCSS = css.toJSS(long);
    const style = rnCSS[name];
    output['View '+name] = getViewStyles(style);
    output['Text '+name] = getTextStyles(style);
  }
  $(el).children().toArray().forEach((el)=>{
    processStyle(el,output);
  });
};

const toCSS = (className, definition)=>{
  return className + '{ '+definition+' }';
};


var DEFAULTS = {
    rootFontSize: 16
};
var REM_REGEX = /([0-9]*\.?[0-9]+)rem/g;


const remtopx = postcss.plugin('remtopx', function (opts) {
    var options = merge({}, DEFAULTS, opts);

    function replacePx(match, num) {
        var number = parseFloat(num) * options.rootFontSize;
        return number;
    }

    return function remtopx(css) {
        css.walkDecls(function (decl) {
            if(decl.value.indexOf('px')>0){
              decl.value = decl.value.replace(/([\d.]+)(px|pt|em|%)/,'$1');
              return;
            }
            if (decl.value.indexOf('rem') === -1) {
                return;
            }
            if (decl.prop === 'display' && decl.value === 'flex'){
              console.log('DISPLAY FLEX!!!');
            }
            decl.value = decl.value.replace(REM_REGEX, replacePx);
        });

        css.walkAtRules('media', function (rule) {
            if (rule.params.indexOf('rem') === -1) {
                return;
            }

            rule.params = rule.params.replace(REM_REGEX, replacePx);
        });
    };
});



module.exports = {

  getViewStyles: getStyleName,

  getTextStyles: getStyleName,

  getStyleName: getStyleName,

  processStyle: processStyle,

  toCSS: toCSS,

  remtopx: remtopx

};