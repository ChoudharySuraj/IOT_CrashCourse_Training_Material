import paho.mqtt.publish as publish

publish.single("paho/test/single", "payload>>>>>>>>>>>>>>>>>>>>>", hostname="mqtt.eclipse.org")