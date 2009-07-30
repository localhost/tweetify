
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.8.2/lib/jspec.js')
load('lib/tweetify.js')

JSpec
.exec('spec/spec.core.js')
.run({ formatter : JSpec.formatters.Terminal })
.report()