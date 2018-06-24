import Vue from "vue"
/**
 * 获取对应名称的cookie
 * @param name cookie的名称
 * @returns {null} 不存在时，返回null
 */

var getCookie = function (name){
    var arr;
    var reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)")
    if(arr = document.cookie.match(reg))
        return decodeURI(arr[2])
    else
        return null
}


/**
 * 设置cookie
 * @param name cookie的名称
 * @param value cookie的值
 * @param day cookie的过期时间
 */

var setCookie = function(name,value,day){
    if(day !== 0){
        var expires = day * 24 * 60 * 60 *1000;
        var date = new Date(new Date() +expires);
        document.cookie = name + "=" + decodeURI(value) + ";expires=" + date.toUTCString()
    }else{
        document.cookie = name + "=" + decodeURI(value)
    }
}

/**
 * 删除cookie
 * @param name cookie的名称
 */

var delCookie = function (name) {
    setCookie(name, "", -1)
};

let bus = new Vue({

})
export {
    getCookie,
    setCookie,
    delCookie,
    bus
}