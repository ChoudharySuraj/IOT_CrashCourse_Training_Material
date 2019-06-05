#include <ESP8266WiFi.h>
#include <PubSubClient.h>

// Replace these with your WiFi network settings
const char* ssid = "SKC_AH"; //replace this with your WiFi network name
const char* password = "Suraj060885"; //replace this with your WiFi network password
const char* mqttServer = "iot.eclipse.org";
const int mqttPort = 1883;
const char* mqttUser = "myesptest";
const char* mqttPassword = "esp";

char rcvmessage[5] = {'\0','\0','\0','\0','\0'};

WiFiClient espClient;
PubSubClient client(espClient);
 
void setup() {

  pinMode(0, OUTPUT);     // Initialize the GPIO0 pin as an output
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println("Connected to the WiFi network");
  Serial.println(WiFi.localIP());
 
  client.setServer(mqttServer, mqttPort);
  client.setCallback(callback);
 
  while (!client.connected()) {
    Serial.println("Connecting to MQTT...");
 
    if (client.connect("ESP8266Client", mqttUser, mqttPassword )) {
 
      Serial.println("connected");  
 
    } else {
 
      Serial.print("failed with state ");
      Serial.print(client.state());
      delay(2000);
 
    }
  }
 delay(2000);
  //client.publish("esp/test", "Hello from ESP8266");
  client.subscribe("esp/test");
 
}
 
void callback(char* topic, byte* payload, unsigned int length) {
 
  Serial.print("Message arrived in topic: ");
  Serial.println(topic);
 
  Serial.print("Message:");
  if(length <= 4)
  {
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    rcvmessage[i] = (char)payload[i];
  }
  }
  Serial.println();
  Serial.print("rcvmessage:");
  Serial.println(rcvmessage);
  Serial.println();
  Serial.println("-----------------------");
 if((strcmp(rcvmessage, "on") == 0) || (strcmp(rcvmessage, "On") == 0))
 {
  digitalWrite(0, LOW);
  Serial.println();
  Serial.println("-----------ON------------");
 }
 if((strcmp(rcvmessage, "off") == 0) || (strcmp(rcvmessage, "Off") == 0))
 {
  digitalWrite(0, HIGH);
  Serial.println();
  Serial.println("------------OFF-----------");
 }
 rcvmessage[0] = '\0';
 rcvmessage[1] = '\0';
 rcvmessage[2] = '\0';
 rcvmessage[3] = '\0';
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP8266Client-2";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Once connected, publish an announcement...
      client.publish("esp/test", "hello world bulb");
      // ... and resubscribe
      client.subscribe("esp/test");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void loop() {
   if (!client.connected()) {
    reconnect();
    }
  client.loop();

    Serial.print("Publishing message: ");
    Serial.println("hello esp again");
    //client.publish("esp/test", "hello esp again");
    delay(1000);
}
