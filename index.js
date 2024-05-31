const app = require('./app');
const config = require('./config');

const port = config.port;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${config.port}`);
});