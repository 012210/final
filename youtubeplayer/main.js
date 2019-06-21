var player;
var currentPlay = 0;


function onYouTubeIframeAPIReady(){
    
    player = new YT.Player("player",
    {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0, //是否自動播放
            "controls":0, //是否顯示控制項
            "start":playTime[currentPlay][0], //開始播放秒數
            "end":playTime[currentPlay][1], //結束播放秒數
            "showinfo":0, //是否顯示影片標題
            "rel":0, //是否顯示相關影片
            "iv_load_policy":3 //是否顯示置入行銷連結
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}

function onPlayerReady(event){
    
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}

function onPlayerStateChange(event){
    
    if(event.data == 0)
    {
        if(currentPlay < playList.length-1)
        {
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large",
            });
            currentPlay++;
        }else
        {
            currentPlay == playList.length;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });    
        }
    }
    if(player.getVideoLoadedFraction()>0)
    {   $("h2").text(player.getVideoData().title);}
}
