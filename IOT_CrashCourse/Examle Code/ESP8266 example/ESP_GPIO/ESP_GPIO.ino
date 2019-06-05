
void setup() {

  pinMode(0, OUTPUT);     // Initialize the GPIO0 pin as an output
  Serial.begin(115200);
  Serial.println("GPIO and serial Configured"); 
}


void loop() {
  digitalWrite(0, LOW);
    delay(1000);
   digitalWrite(0, HIGH);
    delay(1000);
}
