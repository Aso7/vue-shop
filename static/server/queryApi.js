let http = require("http")

function queryApi(url) {
    return new Promise((resolve,reject) => {
        const options = {
            hostname: 'm.gome.com.cn',
            port: 80,
            path: url,
            methods: "GET",
            headers: {

            }
        }

        let data = ''
        const req = http.request(options, (res) => {
            res.setEncoding("utf8")
            res.on("data", (chunk) => {
                data += chunk
            })
            res.on("end", () => {
                resolve(data)
                console.log("NO more data in response")
            })
        })

        req.on("error", (e) => {
            reject(`problem wih request: ${e.message}`)
        })

        req.end()
    })
}

module.exports = queryApi