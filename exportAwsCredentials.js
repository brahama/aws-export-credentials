const fs = require("fs");
const ini = require("ini");
const homedir = require('os').homedir();
const credentialsFilePath = `${homedir}/.aws/credentials`;
const awsProfile = process.argv[2] || "edrans";

const credentialsIni = ini.parse(fs.readFileSync(credentialsFilePath, "utf-8"));


console.log(
  `export AWS_ACCESS_KEY_ID=${credentialsIni[awsProfile].aws_access_key_id}`,
  `AWS_SECRET_ACCESS_KEY=${credentialsIni[awsProfile].aws_secret_access_key}`,
  credentialsIni[awsProfile].aws_session_token ? `AWS_SESSION_TOKEN=${credentialsIni[awsProfile].aws_session_token}`:''
);
