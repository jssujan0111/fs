const http = require("http");
const {routes} = require("./routes/routes")

const port = 4000;
const server = http.createServer((req,res)=>{
    const {pathname} = require("url").parse(req.url,true)
    const {method} = req;
    const route = routes[pathname] || routes["/"];
    const handleRoute = route[method]
    handleRoute(req,res)
})

server.listen(port,(err)=>{
    if(err){
        console.log("Something went wrong");
    }
    console.log(`server is listening on port:${port}`);
})