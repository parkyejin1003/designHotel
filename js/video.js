    function videoResizeFn(){
        let winW=window.innerWidth;
        let winH=window.innerHeight;
        let vidW=document.getElementById('m-video').clientWidth;
        let vidH=document.getElementById('m-video').clientHeight;

        document.querySelector('.m-video').style.width="100%";
        document.querySelector('.m-video').style.height= winH + "px";

        if(winH>vidH){
            document.getElementById('m-video').style.height=winH + 'px';
            document.getElementById('m-video').style.width='auto';
        }
        if(winW>vidW){
            document.getElementById('m-video').style.height='auto';
            document.getElementById('m-video').style.width=winW + 'px';
        }
    }
    window.addEventListener('resize', videoResizeFn)
    videoResizeFn();


    let videoPlay="on";
    let soundMuted="off";
    let mainVideo=document.getElementById('m-video');

    mainVideo.autoplay=true;
    mainVideo.loop=0;

    /* let setId=setInterval(function(){
        if(mainVideo.ended){
            document.querySelector('.m-again').style.display='block';
            videoPlay='off';
            document.querySelector('.pauseIcon i').className='fas fa-play';
            clearInterval(setId)
        }
    },100) */
    mainVideo.addEventListener('ended', function() {
        document.querySelector('.m-again').style.display = 'block';
        videoPlay = 'off';
        document.querySelector('.pauseIcon i').className = 'fas fa-play';
    });

    

  /*   document.querySelector('.m-again').addEventListener('click', function(){
        videoPlay='on';
        mainVideo.play();
        document.querySelector('.pauseIcon i').className='fas fa-pause';
        this.style.display='none'
    }) */
   document.querySelector('.m-again').addEventListener('click', function(){
    videoPlay = 'on';
    mainVideo.play();
    document.querySelector('.pauseIcon i').className = 'fas fa-pause';
    this.style.display = 'none';
});


    document.querySelector('.pauseIcon').addEventListener('click', function(e){       
        e.preventDefault();
        if(videoPlay==='on'){
            mainVideo.pause();
            videoPlay="off";
            document.querySelector('.pauseIcon i').className='fas fa-play'
        }else{
            mainVideo.play()
            videoPlay="on";
            document.querySelector('.pauseIcon i').className='fas fa-pause'
        }
        
    });


    document.addEventListener('keypress', function(e){   
        if(e.keyCode===32){
            e.preventDefault();
            if(videoPlay==='on'){
                mainVideo.pause();
                videoPlay="off";
                document.querySelector('.pauseIcon i').className='fas fa-play'
            }else{
                mainVideo.play()
                videoPlay="on";
                document.querySelector('.pauseIcon i').className='fas fa-pause'
            }
        }    
        
    });




    document.querySelector('.mutedIcon').addEventListener('click', function(e){       
        e.preventDefault();
        if(soundMuted==="off"){
            mainVideo.muted=false;
            soundMuted="on";
            document.querySelector('.mutedIcon i').className='fas fa-volume-mute'
        }else{
            mainVideo.muted=true;
            soundMuted="off";
            document.querySelector('.mutedIcon i').className='fas fa-volume-up'
        }
        
    })

    document.addEventListener('keypress', function(e){  
        if(e.keyCode===13){
            e.preventDefault();
            if(soundMuted==="off"){
                mainVideo.muted=false;
                soundMuted="on";
                document.querySelector('.mutedIcon i').className='fas fa-volume-mute'
            }else{
                mainVideo.muted=true;
                soundMuted="off";
                document.querySelector('.mutedIcon i').className='fas fa-volume-up'
            }          
        }
        
    });

    //다음섹션이동하는 section2
    let nextTop=document.querySelector('.section2').offsetTop;
    console.log(nextTop)

    document.querySelector('.nextIcon').addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({top:nextTop, behavior:'smooth'})
    })

