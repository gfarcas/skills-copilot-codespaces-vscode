// Create web server 
// Create a web server that listens on port 8000. When someone visits the main page, they should see the text "Welcome to the main page!". When someone visits /about, they should see the text "Welcome to the about page!". When someone visits /contact, they should see the text "Welcome to the contact page!". All other pages should return a 404 error.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome to the main page!');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome to the about page!');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome to the contact page!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Page Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});