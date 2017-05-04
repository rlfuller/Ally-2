(function(){
    var $newsTab = document.getElementById("news-tab");
    var $archiveTab = document.getElementById("archive-tab");
    
    var $news = document.getElementById("news");
    var $archive = document.getElementById("archive");
    
    var content = [
        $news,
        $archive
    ];
    
    var tabs = [
        $newsTab,
        $archiveTab
    ]
    
    
    //set initial page state for tabs
    $newsTab.className = $news.className = "selected";
    $archiveTab.className = $archive.className = "unselected";
    
    //add event listeners for tabs
    tabs.forEach(function(tab){
        tab.addEventListener("click", function(){
            reset();
            if(tab.id === "news-tab"){
                newsOn();
            } else {
                console.log(tab);
                archiveOn();
            }
        });
    });
       
    
    function newsOn(){
        $newsTab.className = $news.className = "selected";
        $archiveTab.className = $archive.className = "unselected";
    } 
    
     function archiveOn(){
        $archiveTab.className = $archive.className = "selected";
        $newsTab.className = $news.className = "unselected";
    } 
    
    function reset(){
                
        content.forEach(function(section){
            section.className = "";
        })
        
        tabs.forEach(function(tab){
            tab.className = "";
        })
    }
      
    
})();