var DomUtil = (function(doc){
	return {
		getDom : function (id) {
			return doc.getElementById(id);
		},
		getDoms : function (dom, tag) {
			return dom.getElementsByTagName(tag);
		}
	}
})(document);

/*
滑动焦点图
参数：
	cfg = {
	contentBoxId : 'tCarFocusBox',//内容容器id
	contentItemTag : 'li',//内容 item tag
	naviBoxId: 'tCarFocusNavi',//导航容器id
	naviItemTag: 'span',//导航 item tag
	auto : true, // 是否自动播放
	changeImageSpeed: 5000, // item 之间切换是的时间间隔
	moveSpeed: 20,//一个item移动的时间间隔
	moveSpace: 20,//一个item每次移动的距离
	curClass: 'cur',//当前样式
	width:328//容器dom宽度
}
*/
function SohuCarSlide(cfg){
	this.moveSpeed = cfg.moveSpeed || 10;
	this.moveSpace = cfg.moveSpace || 20;
	this.changeImageSpeed = cfg.changeImageSpeed || 5000;
	this.auto = cfg.auto;
	this.contentBoxId = cfg.contentBoxId;
	this.contentItemTag = cfg.contentItemTag;
	this.naviBoxId = cfg.naviBoxId;
	this.naviItemTag = cfg.naviItemTag;
	this.curClass = cfg.curClass || 'cur';
	this.naviClass = 'selected';
	this.fixedWidth = cfg.width || 328;
	this.index = 1;
	this.oldIndex = this.index -1;
	this.switchFlag = null;
	this.moveFlag = null;
	this.contentBox = null;
	this.contentItems = null;
	this.naviBox = null;
	this.naviItems = null;
	this.preBtn = cfg.preBtn;
	this.nextBtn = cfg.nextBtn;
	this.isHaveBtn = cfg.isHaveBtn || false;
	this.init();
}
SohuCarSlide.prototype = {
	destory: function () {//销毁定时器和事件
		var self = this;
		self.moveFlag = null;
		self.switchFlag = null;
		if(self.isHaveBtn){
			self.preBtn.onclick = null;
			self.nextBtn.onclick = null;
		}
		self.naviBox.onmouseover = null;
		self.naviBox.onmouseout = null;
		self.contentBox.onmouseover = null;
		self.contentBox.onmouseout = null;
	},
	init : function (){
		var self = this;
		self.contentBox = DomUtil.getDom(self.contentBoxId);
		self.naviBox = DomUtil.getDom(self.naviBoxId);
		self.contentBoxEvent();
		
		self.contentItems = DomUtil.getDoms(self.contentBox, self.contentItemTag);
		self.naviItems = DomUtil.getDoms(self.naviBox, self.naviItemTag);
		for(var i = 0,len = self.contentItems.length ;i<len ;i++){
			if(i==0){
				self.contentItems.item(i).style.left="0";
				self.contentItems.item(i).style.display="block";
			}else{
				self.contentItems.item(i).style.left="-" + self.fixedWidth + "px";
				self.contentItems.item(i).style.display="block";
			}
		}
		self.naviBoxEvent();
		if (self.isHaveBtn) {
			self.btnFunc();
		}
		if(self.auto){
			self.switchFlag = setInterval(function(){self.change.call(self,null)},self.changeImageSpeed);
		}
	},
	btnFunc: function () {
		var self = this,
			len = self.contentItems.length;
		self.preBtn.onclick = function (e) {
			clearInterval(self.switchFlag);
			self.switchFlag=null;
			self.oldIndex = self.index-1;
			if(self.oldIndex < 0){
				self.oldIndex = len -1;
			}
			self.index = self.oldIndex-1;
			if(self.index < 0){
				self.index = len -1;
			}
			self.change();
			
		};
		
		self.nextBtn.onclick = function (e) {
			clearInterval(self.switchFlag);
			self.switchFlag=null;
			self.oldIndex = self.index-1;
			if(self.oldIndex < 0){
				self.oldIndex = len -1;
			}
			self.index = self.oldIndex+1;
			if(self.index >= len){
				self.index = 0;
			}
			self.change();
		}
		
		
	},
	change: function() {/*切换另一个图片*/
		var self = this,
		len = self.contentItems.length
		if(self.index >= len){
			self.index=0;
			if(self.oldIndex>=len){
				self.oldIndex= len-1;
			}
		}
		self.returnNormal();
		if(self.oldIndex>self.index){
			self.contentItems.item(self.index).style.left = "-" + self.fixedWidth + "px";
			self.contentItems.item(self.oldIndex).style.left ="0";
			self.movenow(0,"return");

		}else{
			self.contentItems.item(self.index).style.left = self.fixedWidth + "px";
			self.contentItems.item(self.oldIndex).style.left ="0";
			self.movenow(0,"normal");
		}
		self.naviItems.item(self.oldIndex).className="fl";
		self.naviItems.item(self.index).className= "fl "+self.naviClass;
		if(self.index >= len)
			self.oldIndex=len-1;
		else
			self.oldIndex= self.index;
		self.index++;
	},
	movenow: function (e,f){/*某一个图片正在移动*/
		var self = this;
		var yushu = self.fixedWidth%self.moveSpace;
		var now = self.contentItems.item(self.index);
		var old = self.contentItems.item(self.oldIndex);
		var nowleft = parseInt(now.style.left);
		var oldleft = parseInt(old.style.left);
		var flength = 0;
		function m(){
			
			//console.log(self.fixedWidth -flength + "   ===  "+yushu)
			if(self.fixedWidth - flength <= yushu){
				flength += 1;
				if(f=="normal"){
					nowleft-= 1;
					oldleft-= 1;
				}else if(f=="return"){
					nowleft += 1;
					oldleft += 1;
				}
			} else {
				flength += self.moveSpace;
				if(f=="normal"){
					nowleft-=self.moveSpace;
					oldleft-=self.moveSpace;
					
				}else if(f=="return"){
					nowleft+=self.moveSpace;
					oldleft+=self.moveSpace;
				}
			}
			now.style.left = nowleft+"px";
			old.style.left = oldleft+"px";
			if(flength == self.fixedWidth){
				flength = 0;
				clearInterval(self.moveFlag);
				self.moveFlag = null;
			}
		}
		if(self.moveFlag == null){
			self.moveFlag = setInterval(m,self.moveSpeed);
		}
	},

	returnNormal : function () {/*恢复初始值*/
		var self = this;
		for(var i=0, len = self.contentItems.length;i< len;i++){
			if(i == self.oldIndex){
				self.contentItems.item(i).style.left="0";
			}else{
				self.contentItems.item(i).style.left="-" + self.fixedWidth + "px";
			}
		}
	},
	naviBoxEvent : function () {/*导航按钮注册*/
		var self = this;
		self.naviBox.onmouseover = function(e){
			e = window.event || e;
			var t = e.srcElement||e.target;
			if(t.tagName.toLowerCase() == 'a'){
				var i = Number(t.innerHTML) - 1;
				clearInterval(self.switchFlag);
				self.switchFlag=null;
				clearInterval(self.moveFlag);
				self.moveFlag = null;
				self.returnNormal();//
				if(t.parentNode.className=="fl selected"){
					return;
				}
				setTimeout(function(){
					self.oldIndex = self.index-1;
					self.index = i;
					self.change();
				},1);
				
			}
			if(e.stopPropagation){
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
		};
		self.naviBox.onmouseout = function(e){
			e = window.event || e;
			var t = e.srcElement||e.target;
			if(t.tagName.toLowerCase() ==  self.naviItemTag){
				clearInterval(self.switchFlag);
				self.switchFlag = null;
				self.switchFlag = setInterval(function(){self.change.call(self,null)},self.changeImageSpeed);
			}
			if(e.stopPropagation){
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
		};
		if(self.isHaveBtn){
			self.naviBox.parentNode.onmouseout = function(e){
				clearInterval(self.switchFlag);
				self.switchFlag = null;
				self.switchFlag = setInterval(function(){self.change.call(self,null)},self.changeImageSpeed);
			}
		}
	},
	contentBoxEvent: function () {
		var self = this;
		self.contentBox.onmouseover = function(){
			clearInterval(self.switchFlag);
			self.switchFlag=null;
		}
		self.contentBox.onmouseout = function(){
			clearInterval(self.switchFlag);
			self.switchFlag = setInterval(function(){self.change.call(self,null)},self.changeImageSpeed);
		}
	}
};

$(document).ready(function(){
	new SohuCarSlide({
		contentBoxId : 'contentBox',
		contentItemTag : 'li',
		naviBoxId: 'naviBox',
		naviItemTag: 'li',
		auto : true,
		width: 582
	});
});
