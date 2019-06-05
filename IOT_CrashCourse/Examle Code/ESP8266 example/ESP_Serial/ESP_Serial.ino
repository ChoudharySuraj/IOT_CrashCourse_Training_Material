void setup() {
 
  Serial.begin(115200);
  Serial.println("Connected to the Serial port at 115200");
 
  delay(2000);
 
}
 
void callback() {
 
  Serial.print("Printing from Print() ");
  Serial.println("________________________");
  Serial.println("Printing from Println()");
 
}
 
void loop() {
  callback();
  delay(1000);
}
