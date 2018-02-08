import express = require('express');
import path = require('path');

/* routes */

var app = express();

class Routes {

  get routes() {
    return app;
  }

}

export = Routes;