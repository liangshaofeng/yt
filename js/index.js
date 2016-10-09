//banner轮播图
var bannerbg=getClass("bannerbg");
var imgbox=getClass("imgbox")[0];
var img=imgbox.getElementsByTagName('a');
var btnbox=getClass("btn")[0];
var btn=btnbox.getElementsByTagName('li');
var bannerleftbtn=getClass("bannerleftbtn")[0];
var bannerrightbtn=getClass("bannerrightbtn")[0];
var num=0;
function change(){
	num++;
	if(num>=4){
		num=0;
	}
	for (var i = 0; i < img.length; i++) {
		bannerbg[i].style.opacity="0"
		img[i].style.opacity="0"
		// animate(bannerbg[i],{opacity:0},4000)
		// animate(img[i],{opacity:0},4000)
		// img[i].style.zIndex=0;
		btn[i].id="";
	};

	animate(bannerbg[num],{opacity:1})
	animate(img[num],{opacity:1})
	btn[num].id="active"
}
var t=setInterval(change,3000);

	
var bannerbox=getClass("bannerbox")[0];
bannerbox.onmouseover=function(){
	clearInterval(t);
	bannerleftbtn.style.display="block";
	bannerrightbtn.style.display="block";
}
bannerbox.onmouseout=function(){
	t=setInterval(change,3000);
	bannerleftbtn.style.display="none";
	bannerrightbtn.style.display="none";
}
var now=0; next=0;
bannerleftbtn.onclick=function(){
	next--;
	if(next<=-1){
		next=img.length-1
	}
	for (var i = 0; i < img.length; i++) {
			img[i].style.opacity="0";
			animate(img[now],{opacity:0})
			bannerbg[i].style.opacity="0";
			btn[now].id="";
			animate(img[next],{opacity:1})
			btn[next].id="active";
			animate(bannerbg[next],{opacity:1},500)
			now=next
		};	
	}
	bannerrightbtn.onclick=function(){
		change()
}




for (var i = 0; i < btn.length; i++) {
	btn[i].aa=i;
	btn[i].onclick=function(){
		for (var j = 0; j < img.length; j++) {
			animate(bannerbg[j],{opacity:0})
			animate(img[j],{opacity:0})
			/*img[j].style.zIndex=0;*/
			btn[j].id="";
		};
		animate(bannerbg[this.aa],{opacity:1})
		animate(img[this.aa],{opacity:1})
		/*img[this.aa].style.zIndex=5;*/
		this.id="active";
		num=this.aa;
	}
};
//banner轮播图
//banner右边图划上时左移
var bannerright=$(".banner-right")[0];
bannerright.onmouseover=function(){
	animate(bannerright,{left:980},500)
	// bannerright.style.right="10px;"
}
bannerright.onmouseout=function(){
	animate(bannerright,{left:990},500)
	// bannerright.style.right="0px;"
}
//banner右边图划上时左移

//输入框获取焦点和失去焦点特效
var search=getClass("search")[0];
	
	search.onfocus=function(){
		if(search.value=="暑期旅行管家"){
			search.value="";
		}
	}
	search.onblur=function(){
		if(search.value==""){
			search.value="暑期旅行管家";
		}
	}
//输入框获取焦点和失去焦点特效



//楼层划上两个角出边特效
var kuang=$(".kuang");
	var tops=$(".top");
	var bottom=$(".bottom");
	var left=$(".left");
	var right=$(".right");
	for (var i = 0; i < kuang.length; i++) {
		kuang[i].index=i;
		kuang[i].onmouseover=function(){
			var ow=this.offsetWidth;
			var oh=this.offsetHeight;
			animate(tops[this.index],{width:ow},400);
			animate(bottom[this.index],{width:ow},400);
			animate(left[this.index],{height:oh},400);
			animate(right[this.index],{height:oh},400);
		}
		kuang[i].onmouseout=function(){
			var ow=this.offsetWidth;
			animate(tops[this.index],{width:0},400);
			animate(bottom[this.index],{width:0},400);
			animate(left[this.index],{height:0},400);
			animate(right[this.index],{height:0},400);
		}
	};
//楼层划上两个角出边特效



//银泰卡划上透明度降低特效
var a1=$("a",$(".yintaika")[0])
	for (var i = 0; i < a1.length; i++) {
		a1[i].bb=i;
		a1[i].onmouseover=function(){
			// animate(a1[this.bb],{opacity:0.7},5)
			a1[this.bb].style.opacity="0.7";
		}
		a1[i].onmouseout=function(){
			// animate(a1[this.bb],{opacity:1},5)
			a1[this.bb].style.opacity="1";
		}
	};
var a2=$("a",$(".touming")[0])
	for (var i = 0; i < a2.length; i++) {
		a2[i].bb=i;
		a2[i].onmouseover=function(){
			// animate(a2[this.bb],{opacity:0.7},5)
			a2[this.bb].style.opacity="0.7";
		}
		a2[i].onmouseout=function(){
			// animate(a2[this.bb],{opacity:1},5)
			a2[this.bb].style.opacity="1";
		}
	};	

var a3=$("a",$(".zhuanxiang")[0])
	for (var i = 0; i < a3.length; i++) {
		a3[i].bb=i;
		a3[i].onmouseover=function(){
			// animate(a3[this.bb],{opacity:0.7},5)
			a3[this.bb].style.opacity="0.9";
		}
		a3[i].onmouseout=function(){
			// animate(a3[this.bb],{opacity:1},5)
			a3[this.bb].style.opacity="1";
		}
	};	
//银泰卡划上透明度降低特效



//楼层左边轮播
	// var box=$(".louceng-bottom-left-bottom")[0]
	// var topbtn=$(".zuo")[0];
	// var bottombtn=$(".you")[0];
	// var innerbox=$(".louceng-bottom-left-bottombox")[0];
	

	// function Move(){
	// 	var first=getFirst(innerbox); //获取第一个inner盒子
	// 	animate(first,{width:0},function(){ //第一个inner盒子的高变成0之后
	// 		innerbox.appendChild(first);  //把第一个inner盒子放到innerbox最后
	// 		getLast(innerbox).style.width="159px"; //把盒子的高由0变回100
	// 	})
	// }
	// var t=setInterval(Move,2000);


	// box.onmouseover=function(){  //鼠标划上box盒子时清除定时器，运动停止；
	// 	clearInterval(t);
	// }
	// box.onmouseout=function(){   //鼠标划出box盒子时启动定时器，运动正常运动；
	// 	t=setInterval(Move,2000);
	// }

	// topbtn.onclick=function(){
	// 	var first=getFirst(innerbox); //获取第一个inner盒子
	// 	animate(first,{width:0},function(){ //第一个inner盒子的高变成0之后
	// 		innerbox.appendChild(first);  //把第一个inner盒子放到innerbox最后
	// 		getLast(innerbox).style.width="159px";  //把盒子的高由0变回100
	// 	})
	// }
	// bottombtn.onclick=function(){
	// 	var first=getFirst(innerbox); //获取第一个inner盒子
	// 	var last=getLast(innerbox);		//获取最后一个inner盒子
	// 	last.style.height=0;			//把最后的盒子的高度变成0;
	// 	innerbox.insertBefore(last,first);		//把最后一个盒子放到第一个盒子上面
	// 	animate(last,{width:159})		//把盒子的高由0变回100
	// }
//楼层左边轮播



//选项卡特效
var jian=getClass("jian")
var title=getClass("title_li")
var imgbox=getClass("liebiao-left-bottom")
for (var i = 0; i < title.length; i++) {
	title[i].aa=i;
	title[i].onmouseover=function(){
		for (var j = 0; j < imgbox.length; j++) {
			jian[j].style.display="none";
			imgbox[j].style.display="none";
			title[j].style.cssText="font-weight:normal; border-bottom:5px solid #333333;"
		}
		jian[this.aa].style.display="block";
		imgbox[this.aa].style.display="block";
		this.style.cssText="font-weight:bold; border-bottom:5px solid #e5004f;"
	}
};
//选项卡特效



//选项卡特效
var jians=getClass("jians")
var titlei=getClass("title_lii")
var imgboxi=getClass("zhuangui-bottom-right-bottom")
for (var i = 0; i < titlei.length; i++) {
	titlei[i].bb=i;
	titlei[i].onmouseover=function(){
		for (var j = 0; j < imgboxi.length; j++) {
			jians[j].style.display="none";
			imgboxi[j].style.display="none";
			titlei[j].style.cssText="font-weight:normal; border-bottom:3px solid #333333;"
		}
		jians[this.bb].style.display="block";
		imgboxi[this.bb].style.display="block";
		this.style.cssText="font-weight:bold; border-bottom:3px solid #e5004f;"
	}
};
//选项卡特效



//侧边导航特效
//划过显示内容
var imgbox1=getClass("rightbox-con");
var zhezhao=getClass("zhezhao");
for (var i = 0; i < imgbox1.length; i++) {	 
	imgbox1[i].aa=i	;
	imgbox1[i].onmouseover=function(){
		zhezhao[this.aa].style.display="block";
	}
	imgbox1[i].onmouseout=function(){
		zhezhao[this.aa].style.display="none";
	}			
};
//划过显示内容

//点击跳转
var floor=$(".floor");
document.documentElement.scrollTop=1;
	if(document.documentElement.scrollTop){
			obj=document.documentElement;
		}else{
			obj=document.body;
		}
for (var i = 0; i < imgbox1.length; i++) {
		imgbox1[i].index=i;
		imgbox1[i].onclick=function(){
			animate(obj,{scrollTop:floor[this.index].offsetTop},400)
		}
}
//点击跳转

//滑到一定位置显示
var ycbigbox=$(".rightbox")[0];
var flagdown=1;
var flagup=1;
document.documentElement.scrollTop=1;
if(document.documentElement.scrollTop){
	obj=document.documentElement;
}else{
	obj=document.body;
}
window.onscroll=function(){
	if(obj.scrollTop>=1000){
		if(flagdown==1){
			animate(ycbigbox,{right:-20},60);
			// animate(ycbigbox,{height:50},400);
			flagdown=2;
			flagup=1;
		}	
	}else{
		if(flagup==1){
		animate(ycbigbox,{right:-50},60);
		// animate(ycbigbox,{height:0},400);
		flagup=2;
		flagdown=1;
		}			
	}
	for (var i = 0; i < floor.length; i++) {
		if(floor[i].offsetTop<=obj.scrollTop+300){
			for (var j = 0; j < zhezhao.length; j++) {
				zhezhao[j].style.display="none";
			};
			zhezhao[i].style.display="block";
		}
	};
}
//滑到一定位置显示
//侧边导航特效



//1楼层左边轮播
var img1=getClass("lou01");
for (var i = 1; i < img1.length; i++) {
		img1[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn1=getClass("leftbtn1")[0];
var rightbtn1=getClass("rightbtn1")[0];
leftbtn1.onclick=function(){
	next++;
	if(next>=img1.length){
		next=0;
	}
	animate(img1[now],{left:-159},500);
	img1[next].style.left="159px";
	animate(img1[next],{left:0},500)
	img1[now].style.zIndex=0;
	img1[next].style.zIndex=5;
	now=next;
}
rightbtn1.onclick=function(){
	next--;
	if(next<=-1){
		next=img1.length-1;
	}
	animate(img1[now],{left:159},500);
	img1[next].style.left="-159px";
	animate(img1[next],{left:0},500);
	img1[now].style.zIndex=0;
	img1[next].style.zIndex=5;
	now=next;
}
//1楼层左边轮播
//2楼层左边轮播
var img2=getClass("lou02");
for (var i = 1; i < img2.length; i++) {
		img2[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn2=getClass("leftbtn2")[0];
var rightbtn2=getClass("rightbtn2")[0];
leftbtn2.onclick=function(){
	next++;
	if(next>=img2.length){
		next=0;
	}
	animate(img2[now],{left:-159},500);
	img2[next].style.left="159px";
	animate(img2[next],{left:0},500)
	img2[now].style.zIndex=0;
	img2[next].style.zIndex=5;
	now=next;
}
rightbtn2.onclick=function(){
	next--;
	if(next<=-1){
		next=img2.length-1;
	}
	animate(img2[now],{left:159},500);
	img2[next].style.left="-159px";
	animate(img2[next],{left:0},500);
	img2[now].style.zIndex=0;
	img2[next].style.zIndex=5;
	now=next;
}
//2楼层左边轮播
//3楼层左边轮播
var img3=getClass("lou03");
for (var i = 1; i < img3.length; i++) {
		img3[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn3=getClass("leftbtn3")[0];
var rightbtn3=getClass("rightbtn3")[0];
leftbtn3.onclick=function(){
	next++;
	if(next>=img3.length){
		next=0;
	}
	animate(img3[now],{left:-159},500);
	img3[next].style.left="159px";
	animate(img3[next],{left:0},500)
	img3[now].style.zIndex=0;
	img3[next].style.zIndex=5;
	now=next;
}
rightbtn3.onclick=function(){
	next--;
	if(next<=-1){
		next=img3.length-1;
	}
	animate(img3[now],{left:159},500);
	img3[next].style.left="-159px";
	animate(img3[next],{left:0},500);
	img3[now].style.zIndex=0;
	img3[next].style.zIndex=5;
	now=next;
}
//3楼层左边轮播
//4楼层左边轮播
var img4=getClass("lou04");
for (var i = 1; i < img4.length; i++) {
		img4[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn4=getClass("leftbtn4")[0];
var rightbtn4=getClass("rightbtn4")[0];
leftbtn4.onclick=function(){
	next++;
	if(next>=img4.length){
		next=0;
	}
	animate(img4[now],{left:-159},500);
	img4[next].style.left="159px";
	animate(img4[next],{left:0},500)
	img4[now].style.zIndex=0;
	img4[next].style.zIndex=5;
	now=next;
}
rightbtn4.onclick=function(){
	next--;
	if(next<=-1){
		next=img4.length-1;
	}
	animate(img4[now],{left:159},500);
	img4[next].style.left="-159px";
	animate(img4[next],{left:0},500);
	img4[now].style.zIndex=0;
	img4[next].style.zIndex=5;
	now=next;
}
//4楼层左边轮播
//5楼层左边轮播
var img5=getClass("lou05");
for (var i = 1; i < img5.length; i++) {
		img5[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn5=getClass("leftbtn5")[0];
var rightbtn5=getClass("rightbtn5")[0];
leftbtn5.onclick=function(){
	next++;
	if(next>=img5.length){
		next=0;
	}
	animate(img5[now],{left:-159},500);
	img5[next].style.left="159px";
	animate(img5[next],{left:0},500)
	img5[now].style.zIndex=0;
	img5[next].style.zIndex=5;
	now=next;
}
rightbtn5.onclick=function(){
	next--;
	if(next<=-1){
		next=img5.length-1;
	}
	animate(img5[now],{left:159},500);
	img5[next].style.left="-159px";
	animate(img5[next],{left:0},500);
	img5[now].style.zIndex=0;
	img5[next].style.zIndex=5;
	now=next;
}
//5楼层左边轮播
//6楼层左边轮播
var img6=getClass("lou06");
for (var i = 1; i < img6.length; i++) {
		img6[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn6=getClass("leftbtn6")[0];
var rightbtn6=getClass("rightbtn6")[0];
leftbtn6.onclick=function(){
	next++;
	if(next>=img6.length){
		next=0;
	}
	animate(img6[now],{left:-159},500);
	img6[next].style.left="159px";
	animate(img6[next],{left:0},500)
	img6[now].style.zIndex=0;
	img6[next].style.zIndex=5;
	now=next;
}
rightbtn6.onclick=function(){
	next--;
	if(next<=-1){
		next=img6.length-1;
	}
	animate(img6[now],{left:159},500);
	img6[next].style.left="-159px";
	animate(img6[next],{left:0},500);
	img6[now].style.zIndex=0;
	img6[next].style.zIndex=5;
	now=next;
}
//6楼层左边轮播
//7楼层左边轮播
var img7=getClass("lou07");
for (var i = 1; i < img7.length; i++) {
		img7[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn7=getClass("leftbtn7")[0];
var rightbtn7=getClass("rightbtn7")[0];
leftbtn7.onclick=function(){
	next++;
	if(next>=img7.length){
		next=0;
	}
	animate(img7[now],{left:-159},500);
	img7[next].style.left="159px";
	animate(img7[next],{left:0},500)
	img7[now].style.zIndex=0;
	img7[next].style.zIndex=5;
	now=next;
}
rightbtn7.onclick=function(){
	next--;
	if(next<=-1){
		next=img7.length-1;
	}
	animate(img7[now],{left:159},500);
	img7[next].style.left="-159px";
	animate(img7[next],{left:0},500);
	img7[now].style.zIndex=0;
	img7[next].style.zIndex=5;
	now=next;
}
//7楼层左边轮播
//8楼层左边轮播
var img8=getClass("lou08");
for (var i = 1; i < img8.length; i++) {
		img8[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn8=getClass("leftbtn8")[0];
var rightbtn8=getClass("rightbtn8")[0];
leftbtn8.onclick=function(){
	next++;
	if(next>=img8.length){
		next=0;
	}
	animate(img8[now],{left:-159},500);
	img8[next].style.left="159px";
	animate(img8[next],{left:0},500)
	img8[now].style.zIndex=0;
	img8[next].style.zIndex=5;
	now=next;
}
rightbtn8.onclick=function(){
	next--;
	if(next<=-1){
		next=img8.length-1;
	}
	animate(img8[now],{left:159},500);
	img8[next].style.left="-159px";
	animate(img8[next],{left:0},500);
	img8[now].style.zIndex=0;
	img8[next].style.zIndex=5;
	now=next;
}
//8楼层左边轮播
//9楼层左边轮播
var img9=getClass("lou09");
for (var i = 1; i < img9.length; i++) {
		img9[i].style.left="159px"
	};
var now=0;
var next=0;
var leftbtn9=getClass("leftbtn9")[0];
var rightbtn9=getClass("rightbtn9")[0];
leftbtn9.onclick=function(){
	next++;
	if(next>=img9.length){
		next=0;
	}
	animate(img9[now],{left:-159},500);
	img9[next].style.left="159px";
	animate(img9[next],{left:0},500)
	img9[now].style.zIndex=0;
	img9[next].style.zIndex=5;
	now=next;
}
rightbtn9.onclick=function(){
	next--;
	if(next<=-1){
		next=img9.length-1;
	}
	animate(img9[now],{left:159},500);
	img9[next].style.left="-159px";
	animate(img9[next],{left:0},500);
	img9[now].style.zIndex=0;
	img9[next].style.zIndex=5;
	now=next;
}
//9楼层左边轮播


















//楼层中部轮播
var imgboxs1=getClass("imgboxs1")[0];
var imgs1=imgboxs1.getElementsByTagName('a');
var btnboxs1=getClass("loucengbtns1")[0];
var btns1=btnboxs1.getElementsByTagName('li');

for (var i = 1; i < imgs1.length; i++) {
		imgs1[i].style.left="390px"
};
var now=0;
var next=0;
function moveLeft(){
	next++;
	if(next>=imgs1.length){
		next=0;
	}
	animate(imgs1[now],{left:-390},500);
	imgs1[next].style.left="390px";
	animate(imgs1[next],{left:0},500)
	imgs1[now].style.zIndex=0;
	imgs1[next].style.zIndex=5;
	btns1[next].id="active";
	btns1[now].id="";
	now=next;
}
// var t=setInterval(moveLeft,2000);
var leftbtn=getClass("leftbtns")[0];
var rightbtn=getClass("rightbtns")[0];
leftbtn.onclick=function(){
	moveLeft()
}
rightbtn.onclick=function(){
	next--;
	if(next<=-1){
		next=imgs1.length-1;
	}
	animate(imgs1[now],{left:390},500);
	imgs1[next].style.left="-390px";
	animate(imgs1[next],{left:0},500);
	imgs1[now].style.zIndex=0;
	imgs1[next].style.zIndex=5;
	btns1[next].id="active";
	btns1[now].id="";
	now=next;
}
for (var i = 0; i < btns1.length; i++) {
	btns1[i].aa=i;
	btns1[i].onclick=function(){
		next=this.aa
		imgs1[next].style.left="390px";
		animate(imgs1[next],{left:0})
		imgs1[now].style.zIndex=0;
		imgs1[next].style.zIndex=5;
		btns1[now].id="";
		btns1[next].id="active";
		now=next;
	}
};
//楼层中部轮播






//banner划过出现二级菜单
var list=$("li",$(".sidenav")[0])
var ycbox=$(".ycbox")
for (var i = 0; i < list.length; i++) {
	list[i].zz=i;
	list[i].onmouseover=function(){
		for (var j = 0; j < ycbox.length; j++) {
			ycbox[j].style.display="none"
		};
		ycbox[this.zz].style.display="block";
	}
	for (var k = 0; k < ycbox.length; k++) {
		ycbox[k].kk=k;
		ycbox[k].onmouseover=function(){

			ycbox[this.kk].style.display="block";
		}
		ycbox[k].onmouseout=function(){
			ycbox[this.kk].style.display="none";
		}
	};

	list[i].onmouseout=function(){
		ycbox[this.zz].style.display="none"
	}
};
//banner划过出现二级菜单