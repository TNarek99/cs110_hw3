const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    const url = req.url;

    if (url === '/home/videos' || url === '/home/videos/') {
        res.end('Some of your videos');
    } else {
        if (url === '/home/docs' || url === '/home/docs/') {
            res.end('Some of your documents');
        } else {
            if (url === '/home/pics' || url === '/home/pics/') {
                res.end('Some of your pics');
            } else {
                if (url === '/home' || url === '/home/') {
                    res.end('Welcome home!');
                } else {
                    res.end('A random page');
                }
            }
        }
    }

}).listen(3001);
