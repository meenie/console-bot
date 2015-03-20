System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "Automattic/socket.io-client": "github:Automattic/socket.io-client@1.3.5",
    "q": "npm:q@2.0.3",
    "socket.io-client": "github:Automattic/socket.io-client@1.3.5/socket.io",
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:asap@2.0.1": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@2.0.3": {
      "asap": "npm:asap@2.0.1",
      "pop-iterate": "npm:pop-iterate@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "weak-map": "npm:weak-map@1.0.5"
    }
  }
});

