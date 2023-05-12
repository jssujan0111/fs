exports.resHandler = (res,{ contentType = 'application/json', status = 200,body={}})=>{
    res.writeHead(status, { 'Content-Type': contentType });
	res.write(JSON.stringify(body));
	res.end();
}