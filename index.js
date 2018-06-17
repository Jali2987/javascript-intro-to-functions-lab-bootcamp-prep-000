function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
return string.toLowerCase()
}


function logShout(string) {
console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.logWhi
  
}


describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
