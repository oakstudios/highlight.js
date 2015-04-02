/*
Language: Liquid
Requires: xml.js
Author: Sawyer Hollenshead <hello@sawyerh.com>
Description: Matcher for Liquid as well as Siteleaf additions.
Category: template
*/

function(hljs) {
  var EXPRESSION_KEYWORDS = 'for each in with if else elsif endif endunless endfor unless include capture';
  return {
    aliases: ['liquid', 'html.liquid', 'html.liquid'],
    case_insensitive: true,
    subLanguage: 'xml', subLanguageMode: 'continuous',
    contains: [
      {
        className: 'expression',
        relevance: 0,
        variants: [
            {begin: '{{', end: '}}'},
            {begin: '{%', end: '%}', relevance: 10}
        ],
        keywords: EXPRESSION_KEYWORDS,
        contains: [
          {
            className: 'string',
            begin: '"|\'', end: '"|\''
          },
          {
            className: 'variable',
            begin: '[a-zA-Z\-\.\_]+',
            keywords: EXPRESSION_KEYWORDS
          }
        ]
      }
    ]
  };
}
