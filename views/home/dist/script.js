function myFunction()
{
    var c = 0;
    var display = "";
    if (c%2==0){display="show"}else{display="hide"};
    document.getElementById("myDropdown").classList.toggle(display);
    c=c+1;
    
}
window.onmouseclick=function(e){
    if(!e.target.matches('.dropbtn1')){
        var myDropdown=document.getElementById("myDropdown");
        if(myDropdown.classList.contains('show'))
        {
            myDropdown.classList.remove('show');
        }
    }
}
function myFunction1()
{
    var c = 0;
    var display = "";
    if (c%2==0){display="show"}else{display="hide"};
    document.getElementById("myDropdown1").classList.toggle("show");
    c=c+1;
}
window.onmouseclick=function(f){
    if(!f.target.matches('.dropbtn')){
        var myDropdown1=document.getElementById("myDropdown1");
        if(myDropdown1.classList.contains('show'))
        {
            myDropdown1.classList.remove('show');
        }
    }
}

function myFunction2()
{
    var c = 0;
    var display = "";
    if (c%2==0){display="show"}else{display="hide"};
    document.getElementById("myDropdown2").classList.toggle("show");
    c=c+1;
}
window.onmouseclick=function(f){
    if(!f.target.matches('.dropbtn2')){
        var myDropdown2=document.getElementById("myDropdown2");
        if(myDropdown2.classList.contains('show'))
        {
            myDropdown2.classList.remove('show');
        }
    }
}