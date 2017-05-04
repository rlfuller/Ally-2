(function(){
    
    
    var xhr = new XMLHttpRequest();
    
    xhr.addEventListener("readystatechange", function(e){
        if (xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.responseText).sort(sortData);
            buildTable(data);
            
        } else {
            console.log(xhr.status);
        }
    });
    
    xhr.open("GET", "./scripts/code-test.json");
    xhr.send();
    
    
    function buildTable(data){
        var $table = document.getElementsByTagName("table")[0];
        var $thead = buildHeader();
        var $tbody = buildBody(data);
        var $tfoot = buildFooter();
        
        $table.appendChild($thead);
        $table.appendChild($tbody);
        $table.appendChild($tfoot);
    }
    
    function buildHeader(){
        var $thead = document.createElement("thead");
        var $row = document.createElement("tr");
        [
            "",
            "Annual Percentage Yield",
            "Est.Earnings for 1 Year*"
        ].forEach(function(th){
            var $th = document.createElement("th");
            $th.innerHTML = th;
            $row.appendChild($th);
        });
        $thead.appendChild($row);
        return $thead;
    }
    
    function buildBody(data){
        var $tbody = document.createElement("tbody");
        var rows = data.map(function(row){
            var $row = document.createElement("tr");
            var tds = Object.keys(row).map(function(td){
                var $td = document.createElement("td");
                if (td === "apy") {
                    $td.innerHTML = row[td] + " %";
                } else if (td === "earnings"){
                    $td.innerHTML = "$" + row[td].toFixed(2);
                } else {
                    $td.innerHTML = row[td];
                }
                return $td;
            });
            tds.forEach(function($td){
                $row.appendChild($td);
            });
            return $row;
        });
        rows.forEach(function($row){
            $tbody.appendChild($row);
        });
        return $tbody;
    }
    
    function buildFooter(){
        var $tfoot = document.createElement("tfoot");
        var $row = document.createElement("tr");
        [
            "",
            "",
            "*Based on $50,000 deposit."
        ].forEach(function(x){
            var $td = document.createElement("td");
            $td.innerHTML = x;
            $row.appendChild($td);
        });
        $tfoot.appendChild($row);
        return $tfoot;
    }
    
    function sortData(a, b){
        return a.apy > b.apy ? -1 : 1;
    }
    
})();