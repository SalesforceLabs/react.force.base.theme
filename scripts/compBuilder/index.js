const juice = require('juice');
const cheerio = require('cheerio');
const postcss = require('postcss');
const shorthandExpand = require('postcss-shorthand-expand');
const merge = require('lodash.merge');
const pick = require('lodash.pick');
const request = require("request");
const ResourceInliner = require('web-resource-inliner');
const HTMLPostCSS = require('html-postcss');
const options = {};
const CONFIG = require('./config');
const UTILS = require('./utils');

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
    const processor = new HTMLPostCSS([shorthandExpand(),UTILS.remtopx]);
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