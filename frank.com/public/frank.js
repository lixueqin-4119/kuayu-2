function jsonp(url){
return new Promise((resolve,reject)=>{
    const random='frankJSONPCallbackName'+Math.random()
    window[random]=(data)=>{ //只要执行成功就会拿到这个数据
        //console.log(data)
        resolve(data)
    }
    const script=document.createElement('script')
    script.src=`${url}?callback=${random}`
    script.onload=()=>{
        script.remove()
    }
    script.onerror=()=>{
        reject();
    }
    document.body.appendChild(script)
})
}

jsonp('http://qq.com:8888/friends.js')
.then((data)=>{
console.log(data)
})
