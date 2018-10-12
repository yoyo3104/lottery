var data=["iPhone","电脑","游戏机","食品","购物券","话费"],
    timer=null,
    flag=0;
window.onload=playLottery;
function playLottery (){
   var oTitle=document.getElementById('title');
   var oPlay=document.getElementById('play');
   var oStop=document.getElementById('stop');
   oPlay.onclick=playFun;
   oStop.onclick=stopFun;
   //键盘事件
   document.onkeyup=function(event){
       event=event||window.event;
       console.log(event.keyCode);
       if(event.keyCode==13){
           if(flag==0){ //vue思想可以参考 没按之前flag就是0 第一次按play 第二次按stop 恢复flag值
               playFun();
               flag=1;

           }else{
               stopFun();
               flag=0;
           }
       }

   }
   function playFun(){
       clearInterval(timer);//先清除定时器 不然不停点击会停不下来
       var oPlay=document.getElementById('play');
       oPlay.style.background='#099';
       timer=setInterval(function(){
      var random= Math.floor(Math.random()*data.length) ;//random（）取随机数 0-1之间的 再向上取整
      console.log(random);
      title.innerHTML=data[random];



       },50)
   }
   function stopFun(){
       clearInterval(timer);
       var oPlay=document.getElementById('play');
       oPlay.style.background='#036';
       
   }


}
