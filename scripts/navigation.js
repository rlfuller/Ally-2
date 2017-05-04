var navLinks = document.getElementsByTagName("nav");

var linkData = [
    {
        label: "home",
        selected: false
    },
    {
        label: "employee",
        selected: false
    },
    {
        label: "company",
        selected: true
    },
    {
        label: "services",
        selected: false
    },
    {
        label: "contact",
        selected: false
    },
    
];


[].forEach.call(navLinks, function(navLink){
    linkData.forEach(function(link){
        var a = document.createElement("a");
        a.href="#";
        a.innerHTML = link.label;
        a.className = (link.selected ? "selected" : "");
        navLink.appendChild(a);
    });
});
