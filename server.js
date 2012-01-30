var static = require("node-static");
var fileServer = new static.Server('./deploy');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(process.env.PORT || 8000);