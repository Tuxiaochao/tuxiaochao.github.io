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

/*    function rel() {
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

/*
    function move() {
        $(".carousel").animate({
            left: "-=300"
        },500,function() {
            if($(".carousel").offset().left<=-833.5)
            {

               // $(".carousel").offset().left=document.body.clientWidth;
                //$(".carousel").attr("left",'1905');
                console.log(123);
                $("#later").animate({
                    left: "+=1821.5"
                },10,function() {
                    clearTimeout(t,500);
                })
            }
        })
    }
    var t=setInterval(move,3000);
*/

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
    var view=document.getElementsByClassName("quick-view")[8];
    view.style.transform="none";
}
function tra2() {
    var view=document.getElementsByClassName("quick-view")[0];
    view.style.transform="scale(0,0)";
    var view=document.getElementsByClassName("quick-view")[8];
    view.style.transform="scale(0,0)";
}
function tra1() {
    var view=document.getElementsByClassName("quick-view")[1];
    view.style.transform="none";
    var view=document.getElementsByClassName("quick-view")[9];
    view.style.transform="none";
}
function tra21() {
    var view=document.getElementsByClassName("quick-view")[1];
    view.style.transform="scale(0,0)";
    var view=document.getElementsByClassName("quick-view")[9];
    view.style.transform="scale(0,0)";
}
function tra_3() {
    var view=document.getElementsByClassName("quick-view")[2];
    view.style.transform="none";
    var view=document.getElementsByClassName("quick-view")[10];
    view.style.transform="none";
}
function tra23() {
    var view=document.getElementsByClassName("quick-view")[2];
    view.style.transform="scale(0,0)";
    var view=document.getElementsByClassName("quick-view")[10];
    view.style.transform="scale(0,0)";
}

function tra_4() {
    var view=document.getElementsByClassName("quick-view")[3];
    view.style.transform="none";
    var view=document.getElementsByClassName("quick-view")[11];
    view.style.transform="none";
}
function tra24() {
    var view=document.getElementsByClassName("quick-view")[3];
    view.style.transform="scale(0,0)";
    var view=document.getElementsByClassName("quick-view")[11];
    view.style.transform="scale(0,0)";
}

function tra_5() {
    var view=document.getElementsByClassName("quick-view")[4];
    view.style.transform="none";
    var view=document.getElementsByClassName("quick-view")[12];
    view.style.transform="none";
}
function tra25() {
    var view=document.getElementsByClassName("quick-view")[4];
    view.style.transform="scale(0,0)";
    var view=document.getElementsByClassName("quick-view")[12];
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

function changeToList() {
    var list=document.getElementsByClassName("grid")[0];
    list.style.display="block";
    var grid=document.getElementsByClassName("product_list")[0];
    grid.style.display="none";
    var list=document.getElementsByClassName("fa-th-list")[0];
    list.style.color="#333333";
    var large=document.getElementsByClassName("fa-th-large")[0];
    large.style.color="#e1e0e0";
}

function changeToGrid() {
    var list=document.getElementsByClassName("grid")[0];
    list.style.display="none";
    var grid=document.getElementsByClassName("product_list")[0];
    grid.style.display="block";
    var list=document.getElementsByClassName("fa-th-list")[0];
    list.style.color="#e1e0e0";
    var large=document.getElementsByClassName("fa-th-large")[0];
    large.style.color="#333333";
}

window.onload=function() {
    var address=location.href.split("/")[3];
    if(address=="Living-Room.php")
    {
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[0];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Dining-Room.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[1];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Bedroom.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[2];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Accent-Chairs.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[3];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Accessories.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[4];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Kids-World.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[5];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Office.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[6];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }
    else if(address=="Mattresses.php"){
        var bg=document.getElementsByClassName("hvr-shutter-out-vertical")[7];
        bg.style.backgroundColor="#f21539";
        bg.style.color="white";
    }


}


function tutu() {
    var se=document.getElementsByTagName("select")[0];
    var de0=document.getElementById("desc_contact0");
    var de1=document.getElementById("desc_contact1");
    var de2=document.getElementById("desc_contact2");
    if(se.value =="0"){
        de0.style.display="block";
        de1.style.display="none";
        de2.style.display="none";
    }
    else if(se.value =="1"){
        de0.style.display="block";
        de1.style.display="block";
        de2.style.display="none";
    }
    else if(se.value =="2"){
        de0.style.display="block";
        de2.style.display="block";
        de1.style.display="none";
    }
}


function changeBlogColor (p) {
    p.style.color="#000000";
}

function changeBlogColor2 (p) {
    p.style.color="#777777";
}

function close_override() {
    var override=document.getElementsByClassName("newsletter-overlay")[0];
    override.style.display="none";
}

window.onload=function() {
    setTimeout(function() {
        var override=document.getElementsByClassName("newsletter-overlay")[0];
        override.style.display="block";
    },3000);

    var part=document.getElementById("layer_cart");
    var overlay=document.getElementsByClassName("layer_cart_overlay")[0];
    var cart=document.getElementsByClassName("add_to_cart") ;
    for(var i=0;i<=17;i++){
        var cart_add=cart[i];
        cart_add.onclick=function() {
            part.style.display="block";
            overlay.style.display="block";
        }
    }
}

function close_cart() {
    var part=document.getElementById("layer_cart");
    var overlay=document.getElementsByClassName("layer_cart_overlay")[0];
    part.style.display="none";
    overlay.style.display="none";
}

//Authentication.php 显示/隐藏错误信息
$(function() {
    $('button#SubmitCreate').click(function() {
        $('#create-account_error').toggle();
    });
});

