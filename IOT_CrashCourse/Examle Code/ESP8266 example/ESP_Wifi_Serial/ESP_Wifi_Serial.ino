#include <ESP8266WiFi.h>
 
const char* ssid = "SKC_AH";
const char* password =  "Suraj060885";
 
 
void setup() {
 
  Serial.begin(115200);
 
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Connecting to WiFi..");
  }
  Serial.println("Connected to the WiFi network");
 
  delay(2000);
 
}
 
void callback() {
 
  Serial.print("Message arrived in topic: ");
  Serial.println("________________________");
 
  Serial.println();
  Serial.println("-----------------------");
 
}
 
void loop() {
  callback();
  delay(1000);
}
