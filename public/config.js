System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "Automattic/socket.io-client": "github:Automattic/socket.io-client@1.3.5",
    "socket.io-client": "github:Automattic/socket.io-client@1.3.5/socket.io"
  }
});

