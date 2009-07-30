/*
 * tweetify.js - version 0.0.1
 * copyright 2009 Alex Brem <alex@fluktuation.net>
 * license: http://www.opensource.org/licenses/mit-license.php
*/

(function() {

  var TWITTER_URL = 'http://twitter.com/';
  var TWITTER_SEARCH_PATH = 'search?q=';

  String.tweetify || (String.prototype.tweetify = function() {
    return this.linkify().hashify().userify();
  });

  String.linkify || (String.prototype.linkify = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/gi, '<a href="$&">$&</a>');
  });

  String.hashify || (String.prototype.hashify = function() {
    return this.replace(/\B#([\w_]\w[-=~+.:*^\w]+\b(?![-a-z0-9+&@#\/%=~_ ]*?">?))/gi, '<a href="' + TWITTER_URL + TWITTER_SEARCH_PATH + '%23$1">$&</a>');
  });

  String.userify || (String.prototype.userify = function() {
    return this.replace(/\B@([-=~+.:*^\w]+\b)/gi, '<a href="' + TWITTER_URL + '$1">$&</a>');
  });

  if (window.jQuery) {
    jQuery.extend({
      tweetify: function(s) { return s.tweetify() },
      linkify:  function(s) { return s.linkify()  },
      hashify:  function(s) { return s.hashify()  },
      userify:  function(s) { return s.userify()  }
    });
    jQuery.fn.extend({ tweetify: function() {
      this.html(this.html().tweetify()); return this; }
    });
  }
  
})();
