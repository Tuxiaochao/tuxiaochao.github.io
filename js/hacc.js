/**
 * Created by Administrator on 2016/3/15.
 */
function displaySubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "block";
}

function hideSubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";
}

function displayForm(a){
    var s=document.getElementsByTagName("form")[0];
        if(s.style.display=="none"){
            s.style.display="block";
            a.className="fa fa-wifi";
        }else{
            s.style.display="none";
            a.className="fa fa-search";
        }
}

$(function () {
    $(".toTop").hide();
    $('.main-content').scroll(function() {
        if($('.main-content').scrollTop()> 300){
            $(".toTop").show();
            console.log($('.main-content').scrollTop());
        }
        else {
            $(".toTop").hide();
        }
    });
    $(".toTop").click(function(){
        $('.main-content').animate({scrollTop:0},1000);
        return false;
    });

});


//Gallery

var fc=document.getElementsByTagName("ul");
function changePic1(){
    var co=fc[1].getElementsByTagName("li");
    var ca=co[0].getElementsByTagName("a")[0];
    ca.style.color="#5ac441";

    var f=co[1].getElementsByTagName("a")[0];
    f.style.color="#30353C";
    fc[2].style.display="block";
    fc[3].style.display="none";
}

function changePic2() {
    var co=fc[1].getElementsByTagName("li");
    var ca=co[0].getElementsByTagName("a")[0];
    ca.className="";

    var f=co[1].getElementsByTagName("a")[0];
    f.style.color="#5ac441";

    fc[2].style.display="none";
    fc[3].style.display="block";
}

window.onload=function()
{
    var slide=document.getElementsByClassName("slide")[0];
    for(var k=2;k<=3;k++) {
        for (var i = 0; i <= 7; i++) {
            ((fc[k].getElementsByTagName("li"))[i].getElementsByTagName("a"))[0].onclick = function () {
                slide.style.display = "block";
            }
        }
    }

    var leftClick=slide.getElementsByTagName("i")[0];
    var rightClick=slide.getElementsByTagName("i")[1];
    var img=slide.getElementsByTagName("img")[0];

    leftClick.onclick=function() {
        img.src="img/Image8.png";
        leftClick.onclick=function() {
            img.src="img/Image7.png";
            leftClick.onclick=function() {
                img.src="img/Image6.png";
                leftClick.onclick=function() {
                    img.src="img/Image5.png";
                    leftClick.onclick=function() {
                        img.src="img/Image4.png";
                        leftClick.onclick=function() {
                            img.src="img/Image3.png";
                            leftClick.onclick=function() {
                                img.src="img/Image2.png";
                                leftClick.onclick=function() {
                                    img.src="img/Image1.png";
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    rightClick.onclick=function(){
        img.src="img/Image2.png";
        rightClick.onclick=function(){
            img.src="img/Image3.png";
            rightClick.onclick=function(){
                img.src="img/Image4.png";
                rightClick.onclick=function(){
                    img.src="img/Image5.png";
                    rightClick.onclick=function(){
                        img.src="img/Image6.png";
                        rightClick.onclick=function(){
                            img.src="img/Image7.png";
                            rightClick.onclick=function(){
                                img.src="img/Image8.png";
                            }
                        }
                    }
                }
            }
        }
    }
    img.onclick=function() {
        slide.style.display="none";
    }

}