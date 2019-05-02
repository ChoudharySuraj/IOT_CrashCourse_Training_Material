var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://iot.eclipse.org')
 
client.on('connect', function () {
  client.subscribe('test1234', function (err) {
    if (!err) {
      client.publish('test1234', 'Hello mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})