const fs = require("fs");
const ini = require("ini");
const credentialsFilePath = "/[YOUR HOME HERE]/.aws/credentials";
const awsProfile = process.argv[2] || "edrans";

console.log(awsProfile);
const credentialsIni = ini.parse(fs.readFileSync(credentialsFilePath, "utf-8"));

console.log(
  "export AWS_ACCESS_KEY_ID=%s",
  credentialsIni[awsProfile].aws_access_key_id
);
console.log(
  "export AWS_SECRET_ACCESS_KEY=%s",
  credentialsIni[awsProfile].aws_secret_access_key
);
console.log(
  'export AWS_SESSION_TOKEN="%s"',
  credentialsIni[awsProfile].aws_session_token
);
