(function(){
    var $login = document.querySelector(".login a")
    var $form = document.querySelector("form");
    var $modal = document.querySelector("#modal");
    var $username = $form.querySelector("#username");
    var $password = $form.querySelector("#password");
    
    var $submit = $form.querySelector("#form-login");
    var $close = $form.querySelector("a");
    
    $login.addEventListener("click", function(e){
        $modal.className = "active";
    });
    
    $close.addEventListener("click", function(e){
        close();
    });
    
    $form.addEventListener("submit", function(e){
        e.preventDefault();
        close();
    });
    
    function close(){
        $modal.className = "";  
    }
})();
