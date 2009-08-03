describe '.tweetify()'
  it 'should tweetify (linkify, hashify and userify combined) a string'
    'baz'.tweetify().should.eql 'baz'
    'foo http://foo.bar/baz bar'.tweetify().should.eql 'foo <a class="tweetified-link" href="http://foo.bar/baz">http://foo.bar/baz</a> bar'
    "hey @localhost, here's #two yummy #hashes for you".tweetify().should.eql 'hey <a class="tweetified-user" href="http://twitter.com/localhost">@localhost</a>, here\'s <a class="tweetified-hash" href="http://twitter.com/search?q=%23two">#two</a> yummy <a class="tweetified-hash" href="http://twitter.com/search?q=%23hashes">#hashes</a> for you'
  end
end

describe '.linkify()'
  it 'should linkify a string'
    'http://foo.bar:8080/baz'.linkify().should.eql '<a class="tweetified-link" href="http://foo.bar:8080/baz">http://foo.bar:8080/baz</a>'
    'tweetify a #https https://foo.bar/baz/test.html link'.linkify().should.eql 'tweetify a #https <a class="tweetified-link" href="https://foo.bar/baz/test.html">https://foo.bar/baz/test.html</a> link'
    'foo HTTP://foo.bar/baz bar'.linkify().should.eql 'foo <a class="tweetified-link" href="HTTP://foo.bar/baz">HTTP://foo.bar/baz</a> bar'
  end
end

describe '.hashify()'
  it 'should hashify a string'
    '#foo'.hashify().should.eql '<a class="tweetified-hash" href="http://twitter.com/search?q=%23foo">#foo</a>'
    'foo #bar baz'.hashify().should.eql 'foo <a class="tweetified-hash" href="http://twitter.com/search?q=%23bar">#bar</a> baz'
  end
end

describe '.userify()'
  it 'should userify a string'
    '@username'.userify().should.eql '<a class="tweetified-user" href="http://twitter.com/username">@username</a>'
    '@just-another-user, @foo: mail me at foo@bar.com!'.userify().should.eql '<a class="tweetified-user" href="http://twitter.com/just-another-user">@just-another-user</a>, <a class="tweetified-user" href="http://twitter.com/foo">@foo</a>: mail me at foo@bar.com!'
  end
end
