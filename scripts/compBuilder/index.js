const juice = require('juice');
const cheerio = require('cheerio');
const postcss = require('postcss');
const shorthandExpand = require('postcss-shorthand-expand');
const postcssJs = require('postcss-js');

const RNC = require('react-native-css');
const css = new RNC();
const merge = require('lodash.merge');
const pick = require('lodash.pick');

const request = require("request");

const cssLonghand = require('css-longhand');

const ResourceInliner = require('web-resource-inliner');

var HTMLPostCSS = require('html-postcss');

const options = {};


const PROP_TYPES = require('./propTypes');

const VIEW_STYLE_PROPS = PROP_TYPES.Layout.concat(PROP_TYPES.View);

const TEXT_STYLE_PROPS = PROP_TYPES.Text;

const CONFIG = require('./config');

const UTILS = require('./utils');

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

//const remtopxjs = postcssJs.sync([ remtopx ]);



//const url = 'https://www.lightningdesignsystem.com/components/tiles/flavors/base/_tile-with-icon.html';
//const url = 'http://www.lightningdesignsystem.com/components/badges/flavors/base/_default.html';
//const url = 'http://www.lightningdesignsystem.com/components/tiles/flavors/list/_default.html';
//const url = 'http://www.lightningdesignsystem.com/components/page-headers/flavors/base/_default.html';
//const url = 'http://www.lightningdesignsystem.com/components/forms/flavors/input/_input-read-only.html';
//const url = 'http://www.lightningdesignsystem.com/components/tiles/flavors/base/_tile.html';
//const url = 'https://www.lightningdesignsystem.com/components/buttons/flavors/base/_button-brand.html';

const url = CONFIG[0].url;

request({
  uri: url,
}, function(error, response, body) {
  ResourceInliner.html({
    fileContent:body,
    relativeTo:url
  },
  (error, html)=>{
    const processor = new HTMLPostCSS([shorthandExpand(),remtopx]);
    const outHTML = processor.process(html, {}, {});
    var inlined = juice(outHTML, {});
    console.log(inlined);
    const output = {};
    $ = cheerio.load(inlined);
//    processStyle($('.demo-only'),output);
    UTILS.processStyle($('#preview'),output);

    console.log(output);
  });
});