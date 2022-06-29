let n = 1 ;
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id;
                 xxx.appendChild(li);   
            });
            n += 1;
        }
    };
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200){
            console.log(typeof request.response)
            console.log(request.response)
            const object = JSON.parse(request.response) //把符合JSON的语法的字符串变成对应的对象或其他
            console.log(typeof object)
            console.log(object)
            

        }
    };
    request.send()
}
getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200){
            const dom = (request.responseXML);
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log((text).trim())
        }
    };
    request.send()
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload = ()=>{
        console.log(request.response);
        const div =document.createElement('div')
        div.innerHTML = request.response

        document.body.appendChild(div)
    };
    request.onerror = ()=>{}
    request.send()
}

getJS.onclick =()=>{
    const request =new XMLHttpRequest();
    request.open('GET','/2.js');
    request.onload = ()=>{
    
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{}
    request.send()
    }    

getCSS.onclick =()=>{
const request =new XMLHttpRequest();
request.open('GET','/style.css');
request.onreadystatechange = ()=>{
    //下载完成，但不知道是成功还是 2xx 失败 4xx 5xx
    if(request.readyState===4){
      if (request.status>= 200 && request.status < 300){
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      }else{
        alert('加载 css 失败')
      }
    }
};
  request.send()
};




