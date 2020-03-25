const fs = require("fs");
const ini = require("ini");
const homedir = require('os').homedir();
const credentialsFilePath = `${homedir}/.aws/credentials`;
const awsProfile = process.argv[2] || "edrans";
const credentialsIni = ini.parse(fs.readFileSync(credentialsFilePath, "utf-8"))[awsProfile];

console.log(
  `export AWS_ACCESS_KEY_ID=${credentialsIni.aws_access_key_id}`,
  `AWS_SECRET_ACCESS_KEY=${credentialsIni.aws_secret_access_key}`,
  credentialsIni.aws_session_token ? `AWS_SESSION_TOKEN=${credentialsIni.aws_session_token}`:''
);
