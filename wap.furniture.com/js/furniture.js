function changeColor(div) {
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="red";
    sub[1].style.color="red";
}
function changeColor2(div) {
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="#333";
    sub[1].style.color="#333";
}
function changeColor3(div) {
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="red";
    var sub1=div.getElementsByTagName("strong")[0];
    sub1.style.color="red";
}
function changeColor4(div) {
    var sub1=div.getElementsByTagName("strong")[0];
    sub1.style.color="#333";
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="#333";
}
function changeColor5(div) {
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="red";
    var sub1=div.getElementsByTagName("a")[0];
    sub1.style.color="red";
}
function changeColor6(div) {
    var sub1=div.getElementsByTagName("a")[0];
    sub1.style.color="#333";
    var sub=div.getElementsByTagName("i");
    sub[0].style.color="#333";
}

function display() {
    var dis=document.getElementsByTagName("ul");
    var up=document.getElementsByTagName("i")[1];
    if(dis[0].style.display=="none"){
        dis[0].style.display="block";
        up.className="fa fa-angle-up";
    }else{
        dis[0].style.display="none";
        up.className="fa fa-angle-down";
    }
}

function displayLanguage() {
    var dis=document.getElementsByTagName("ul");
    var up=document.getElementsByTagName("i")[2];
    if(dis[1].style.display=="none"){
        dis[1].style.display="block";
        up.className="fa fa-angle-up";
    }else{
        dis[1].style.display="none";
        up.className="fa fa-angle-down";
    }
}


function displayForm() {
    var dis=document.getElementsByTagName("ul");
    var up=document.getElementsByTagName("i")[3];
    if(dis[2].style.display=="none"){
        dis[2].style.display="block";
        up.className="fa fa-angle-up";
    }else{
        dis[2].style.display="none";
        up.className="fa fa-angle-down";
    }
}

function changeClassname(a){
    var sub= a.getElementsByTagName("i")[1];
    sub.className="fa fa-angle-up";
}
function changeClassname2(a){
    var sub= a.getElementsByTagName("i")[1];
    sub.className="fa fa-angle-down";
}

$(function () {
    $("#gear-right").bind("click",function(){
        if($("#gear-right").offset().left<280)
        {
            $("#gear-right").animate({
                left: "+=280px"
            }, 500, function () {
            });
            $("#tool").animate({
                left: "+=280px"
            }, 500, function () {
            });
        }

        else if($("#gear-right").offset().left>=280)
        {
            $("#gear-right").animate({
                left: "-=280px"
            }, 500, function () {
            });
            $("#tool").animate({
                left: "-=280px"
            }, 500, function () {
            });
        }
    })

    /*function rel() {
        if ($(".hh").offset().left<365) {
            $(".hh").animate({
                left: "+=365px",
                opacity: "+=1"
            }, 1000, function () {
                $(".pp").animate({
                    left: "+=365px",
                    opacity: "+=1"
                }, 1000, function () {
                });
            });
        }
        else if ($(".hh").offset().left>=365) {
            $(".hh").animate({
                left: "-=365px",
                opacity: "-=1"
            }, 100, function () {
                $(".pp").animate({
                    left: "-=365px",
                    opacity: "-=1"
                }, 100, function () {

                });
            });
        }
    }
    setInterval(rel,2100);*/



   /* $(".product_img_link").bind("mouseover",function(){

    })*/




});

function changeBtn() {
    var sp=document.getElementsByClassName("bg")[1];
    if(sp.style.background="#de4a4a"){
        sp.background="#1c64a1";
        sp.right="48%";
    }
    else if(sp[0].style.background="#1c64a1"){
        sp.background="#de4a4a";
        sp.right="0";
    }
}

window.onscroll = function() {
    var top=document.getElementsByClassName("stickUpTop")[0];
    var ul=document.getElementsByClassName("menu")[0];
    var a=document.getElementsByClassName("hvr-shutter-out-vertical");
    var ge=document.getElementsByClassName("menu_badge");
    //var he=document.getElementsByClassName("sale_badge")[0];
    if(window.scrollY>=178){
        top.style.position="fixed";
        ul.style.height="51px";
        a[0].style.height="51px";
        a[1].style.height="51px";
        a[2].style.height="51px";
        a[3].style.height="51px";
        a[4].style.height="51px";
        a[5].style.height="51px";
        a[6].style.height="51px";
        a[7].style.height="51px";
        ge[0].style.right="3%";
        ge[0].style.padding="0";
        ge[0].style.top="0";
        ge[1].style.right="3%";
        ge[1].style.padding="0";
        ge[1].style.top="0";
    }
    else{
        top.style.position="relative";
        ul.style.height="61px";
        a[0].style.height="61px";
        a[1].style.height="61px";
        a[2].style.height="61px";
        a[3].style.height="61px";
        a[4].style.height="61px";
        a[5].style.height="61px";
        a[6].style.height="61px";
        a[7].style.height="61px";
        ge[0].style.right="13%";
        ge[0].style.padding="2px 5px 3px";
        ge[0].style.top="-10px";
        ge[1].style.right="13%";
        ge[1].style.padding="2px 5px 3px";
        ge[1].style.top="-10px";
    }

}

function tra() {
    var view=document.getElementsByClassName("quick-view")[0];
    view.style.transform="none";
}
function tra2() {
    var view=document.getElementsByClassName("quick-view")[0];
    view.style.transform="scale(0,0)";
}
function tra1() {
    var view=document.getElementsByClassName("quick-view")[1];
    view.style.transform="none";
}
function tra21() {
    var view=document.getElementsByClassName("quick-view")[1];
    view.style.transform="scale(0,0)";
}
function tra_3() {
    var view=document.getElementsByClassName("quick-view")[2];
    view.style.transform="none";
}
function tra23() {
    var view=document.getElementsByClassName("quick-view")[2];
    view.style.transform="scale(0,0)";
}

function tra_4() {
    var view=document.getElementsByClassName("quick-view")[3];
    view.style.transform="none";
}
function tra24() {
    var view=document.getElementsByClassName("quick-view")[3];
    view.style.transform="scale(0,0)";
}

function tra_5() {
    var view=document.getElementsByClassName("quick-view")[4];
    view.style.transform="none";
}
function tra25() {
    var view=document.getElementsByClassName("quick-view")[4];
    view.style.transform="scale(0,0)";
}

function tra_6() {
    var view=document.getElementsByClassName("quick-view")[5];
    view.style.transform="none";
}
function tra26() {
    var view=document.getElementsByClassName("quick-view")[5];
    view.style.transform="scale(0,0)";
}

function tra_7() {
    var view=document.getElementsByClassName("quick-view")[6];
    view.style.transform="none";
}
function tra27() {
    var view=document.getElementsByClassName("quick-view")[6];
    view.style.transform="scale(0,0)";
}

function tra_8() {
    var view=document.getElementsByClassName("quick-view")[7];
    view.style.transform="none";
}
function tra28() {
    var view=document.getElementsByClassName("quick-view")[7];
    view.style.transform="scale(0,0)";
}

function tra_9() {
    var view=document.getElementsByClassName("quick-view")[8];
    view.style.transform="none";
}
function tra29() {
    var view=document.getElementsByClassName("quick-view")[8];
    view.style.transform="scale(0,0)";
}


function block_list() {
    var tree=document.getElementsByClassName("tree")[0];
    var li=tree.getElementsByTagName("li");
    var ul=li[0].getElementsByTagName("ul")[0];
    var gro=document.getElementsByClassName("grower")[0];
    var plus=gro.getElementsByTagName("i")[0];
    if(ul.style.display=="none")
    {
        ul.style.display="block";
        plus.className="fa fa-minus";
    }
    else{
        ul.style.display="none";
        plus.className="fa fa-plus";
    }
}

function block_list2() {
    var tree=document.getElementsByClassName("tree")[0];
    var ul=tree.getElementsByTagName("ul")[1];
    var gro=document.getElementsByClassName("grower")[1];
    var plus=gro.getElementsByTagName("i")[0];
    if(ul.style.display=="none")
    {
        ul.style.display="block";
        plus.className="fa fa-minus";
    }
    else{
        ul.style.display="none";
        plus.className="fa fa-plus";
    }
}

function block_list3() {
    var tree=document.getElementsByClassName("tree")[0];
    var ul=tree.getElementsByTagName("ul")[2];
    var gro=document.getElementsByClassName("grower")[2];
    var plus=gro.getElementsByTagName("i")[0];
    if(ul.style.display=="none")
    {
        ul.style.display="block";
        plus.className="fa fa-minus";
    }
    else{
        ul.style.display="none";
        plus.className="fa fa-plus";
    }
}


function block_list4() {
    var tree=document.getElementsByClassName("tree")[0];
    var ul=tree.getElementsByTagName("ul")[3];
    var gro=document.getElementsByClassName("grower")[3];
    var plus=gro.getElementsByTagName("i")[0];
    if(ul.style.display=="none")
    {
        ul.style.display="block";
        plus.className="fa fa-minus";
    }
    else{
        ul.style.display="none";
        plus.className="fa fa-plus";
    }
}

function block_list5() {
    var tree=document.getElementsByClassName("tree")[0];
    var ul=tree.getElementsByTagName("ul")[4];
    var gro=document.getElementsByClassName("grower")[4];
    var plus=gro.getElementsByTagName("i")[0];
    if(ul.style.display=="none")
    {
        ul.style.display="block";
        plus.className="fa fa-minus";
    }
    else{
        ul.style.display="none";
        plus.className="fa fa-plus";
    }
}