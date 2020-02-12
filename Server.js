let Server = (port=4444) =>  {

    const express = require('express');
    const homePage = express.static('public/views/home/');
    
    const portNumber = port;
    const app = express();
    
    let page = app.use('/', homePage);
    
    app.get(page, (request, response) => {
        response.status(200).send();
    });
    
    app.listen(portNumber, () => {
        console.log(`Express application listening on http://localhost:${portNumber}`);
    });
}

module.exports = Server;