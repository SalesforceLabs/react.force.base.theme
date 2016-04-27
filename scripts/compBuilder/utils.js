const juice = require('juice');
const cheerio = require('cheerio');

const cssLonghand = require('css-longhand');

const RNC = require('react-native-css');
const css = new RNC();


const PROP_TYPES = require('./propTypes');

const VIEW_STYLE_PROPS = PROP_TYPES.Layout.concat(PROP_TYPES.View);

const TEXT_STYLE_PROPS = PROP_TYPES.Text;

const pick = require('lodash.pick');


const getViewStyles = (styles)=>{
  return pick(styles,VIEW_STYLE_PROPS);
};

const getTextStyles = (styles)=>{
  return pick(styles,TEXT_STYLE_PROPS);
};

const getStyleName = (tagName, className)=>{
  if(className){
    return className;
  }
  return tagName;
};

const processStyle = (el,output)=>{
  if(el && el.attribs){
    const name = getStyleName(el.tagName, el.attribs['class']);
    console.log('name: '+name);
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


module.exports = {

  getViewStyles: getStyleName,

  getTextStyles: getStyleName,

  getStyleName: getStyleName,

  processStyle: processStyle,

  toCSS: toCSS

};