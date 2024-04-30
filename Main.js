document.writeln("<div class=\'line\' ><div class=\'hope-c-PJLV hope-c-PJLV-iicyfOA-css\'><div class=\'boxboard\' ><a class=\'hope-anchor hope-c-iHuheP hope-c-PJLV hope-c-PJLV-idrWMwW-css\' id=\'time1\' rel=\'noopener noreferrer\'></a><span>|</span><a class=\'hope-anchor hope-c-iHuheP hope-c-PJLV hope-c-PJLV-idrWMwW-css\' href=\'/@manage\' target=\'_self\'>管理</a></div></div></div>");

const divObj=document.getElementById('time1');
    setInterval(()=>{
        const nowTime=getNowTime();
        divObj.innerText=nowTime;
    })
    function getNowTime(){
        const date=new Date();
        const year=date.getFullYear();
        const month=date.getMonth()+1;
        const day=date.getDate();
        const hour=date.getHours();
        const minite=date.getMinutes();
        const seconds=date.getSeconds();
        return `${year}-${month}-${day} ${hour}:${minite}:${seconds<10?'0'+seconds:seconds}`
    }
