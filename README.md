Tweetify
========

Tiny JavaScript library to linkify urls, hashes and usernames of a tweet.
Latest version is always at [github.com/localhost/tweetify](http://github.com/localhost/tweetify).

Uses the [JSpec](http://jspec.info) framework for BDD testing (only required for Tweetify development).

Usage
-----

Include `tweetify.js` (or `tweetify.min.js`) via the script tag in your project and *tweetify*
(or just *linkify* / *hashify* / *userify*) strings e.g. like this: `"This is just some #Tweet".tweetify()`

    <script>
      // quick example using jQuery to fetch tweets
      $.getJSON('http://twitter.com/status/user_timeline/localhost.json?count=5&callback=?', function(json) {
        var tweets = $('#twitter ul.tweets');
        tweets.empty();
        $.each(json, function(i, tweet) {
          tweets.append('<li class="tweet">' + tweet.text.tweetify() + '</li>');
        }
      }
    </script>

Note: You also override the Tweetify object with custom Twitter links and regexes.

License
-------

(The MIT License)

Copyright (c) 2009 Alex Brem <alex@fluktuation.net>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.