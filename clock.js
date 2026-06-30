const time=document.getElementById("time");
        const toggle=document.getElementById("toggle");

        function showTime(){
            const now=new Date();
            let h=now.getHours();
            let m=now.getMinutes();
            let s=now.getSeconds();
            h=h%12;
            time.textContent=`${h.toString().padStart(2,"0")}:`+`${m.toString().padStart(2,"0")}:`+`${s.toString().padStart(2,"0")}`;
        }
            setInterval(showTime,1000);
            toggle.addEventListener("click",()=>{
                document.body.classList.toggle("dark");
            });