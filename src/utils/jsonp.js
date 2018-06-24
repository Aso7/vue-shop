//动态创建script
//利用src
//callback

function jsonp(url,callbackName){
    console.log(callbackName)
   return new Promise((resolve,reject)=>{
        window[callbackName] = function(data){
            resolve(data)
        }
        let script = document.createElement('script')
        let body = document.body;
        script.src = url
        body.appendChild(script)
   })
}
export default jsonp