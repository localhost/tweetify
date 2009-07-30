describe '.tweetify()'
  it 'should tweetify something'
    'baz'.tweetify().should.eql 'baz'

    'foo http://foo.bar/baz bar'.tweetify().should.eql 'foo <a href="http://foo.bar/baz">http://foo.bar/baz</a> bar'
    
    "hey @localhost, here's #two yummy #hashes for you".tweetify().should.eql 'hey <a href="http://twitter.com/localhost">@localhost</a>, here\'s <a href="http://twitter.com/search?q=%23two">#two</a> yummy <a href="http://twitter.com/search?q=%23hashes">#hashes</a> for you'
  end
end

describe '.linkify()'
  it 'should linkify something'
    'foo http://foo.bar/baz bar'.linkify().should.eql 'foo <a href="http://foo.bar/baz">http://foo.bar/baz</a> bar'
  end
end

describe '.hashify()'
  it 'should hashify something'
    '#foo'.hashify().should.eql '<a href="http://twitter.com/search?q=%23foo">#foo</a>'
    'foo #bar baz'.hashify().should.eql 'foo <a href="http://twitter.com/search?q=%23bar">#bar</a> baz'
  end
end

describe '.userify()'
  it 'should userify something'
    '@username'.userify().should.eql '<a href="http://twitter.com/username">@username</a>'
    '@just-another-user, @foo: mail me at foo@bar.com!'.userify().should.eql '<a href="http://twitter.com/just-another-user">@just-another-user</a>, <a href="http://twitter.com/foo">@foo</a>: mail me at foo@bar.com!'
  end
end
