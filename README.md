# AWS Export Credentials

To just avoid searching and copy paste in your credentials profiles.

It outputs the commands to export them based on the default profile or a given one.

## Usage

`npm i`

`node exportAwsCredentials.js`

```bash
Your profile (defaults to mine)
export AWS_ACCESS_KEY_ID=ASIE5GVFW6QUBF37HJU2
export AWS_SECRET_ACCESS_KEY=23Is4SFjqGDg0sWiTYSMKDTc6tM9KUiZPRhJKDeY
export AWS_SESSION_TOKEN="FwoGZXIvYXdzEC8aDFre5nFjx5OH8WyBRCKQAnfO/MHgggRXuPpSU9Dt3SGVjHKmj2tmCM/QS5Lvk/h38tUsbV9nPj15h7VtKwj+DHTb3QYYDnwTiPbxq70d89YW3AxsUuupxmiKYAsfmUJSmBJiAHB7XqqnsYBnX7EkFOA4um+57Rxd/ACnZ6fa9gVR4m8u0ePjZgw8nV8A4GbJnPMsZttckplSVGeubW9s9bJYE/gm+ro1fP7KdjiafSntzHy8QTKgGQpd9lyie6JxcXYlts73653DvYZrfXWeXybTZtFhtYIZ9ZffBHbiZRM8u8Oexz2NAVpToZfdP8WsZgFCavPI5qlrMC5T+JBQY49l0XEEpqnKcfgCMlbnJXD4KXRva/x2eJ3QjALz+iG4KM262PMFMiu4SXmfU2falx+c+gRsV1omD221KNN/Z1iDBcCGFNXQFyI6CLuwjsa2oVs8"
```

Yes, try them! :P

## Global Install

If you want to make it simpler and global to use, you can use the binary provided or
build it yourself using [nexe](https://github.com/nexe/nexe)

`npm i nexe -g`

`nexe exportAwsCredentials.js`

```bash
ℹ nexe 3.3.2
✔ Already downloaded...
✔ Compiling result
✔ Entry: 'exportAwsCredentials.js' written to: exportAwsCredentials
✔ Finished in 0.503s
```
