const https = requset('https')
const options = {
    hostname: 'node.js.cn',
    port: ' 443',
    path: '/todos',
    method: 'GET'
} 
const req = https.requset(options,res=>{
    console.log('状态码:${res.statusCode}')
    res.on('data',d=>{
        process.stdout.write(d)
    })
})
req.on('error',error=>{
    console.error(error)
})
req.end()


const res = await fatch('https://www.conardli.top');
const json = await res.json();
cosole.log(json);