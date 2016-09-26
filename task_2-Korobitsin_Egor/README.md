###Using different log messages dispositions:
 
 1. Console:
     > new Logger("console").log("log message..");
 2. Alert window
     > new Logger("alert").log("log message..");
 3. Abstract Web API endpoint:
     > new Logger("api").log("log message..");
     
Default logger prints message to console.
 
 ---
 
 ###Extending library with custom logging methods:
   > logger = new Logger();
   > logger.extend(function() {alert("extended alert log message");});