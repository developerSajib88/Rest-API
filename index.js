const  config  = require("./config/config");
const app = require("./app");
const PORT = config.app.port;

require("./config/db");

app.listen(PORT,()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});