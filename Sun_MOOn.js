(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Sun_MOOn_atlas_", frames: [[0,0,1668,1113]]},
		{name:"Sun_MOOn_atlas_2", frames: [[1240,1070,161,74],[1919,81,35,35],[1667,252,244,244],[1667,842,279,173],[1069,1070,169,114],[1667,1017,279,173],[898,1070,169,114],[500,1070,194,121],[1919,0,117,79],[0,0,1665,1068],[1667,0,250,250],[1667,670,307,170],[0,1070,248,114],[1667,498,307,170],[250,1070,248,114],[696,1070,200,111]]}
];


// symbols:



(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_11 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_14 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["Sun_MOOn_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_6 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_7 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_8 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_9 = function() {
	this.initialize(ss["Sun_MOOn_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SunButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_14();
	this.instance.parent = this;
	this.instance.setTransform(20.85,7.45,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_16();
	this.instance_2.parent = this;
	this.instance_2.setTransform(20.85,7.45,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_18();
	this.instance_4.parent = this;
	this.instance_4.setTransform(35.65,18.25,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(20.7,12.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,139.5,86.5);


(lib.Sun_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sun_Слой_1, null, null);


(lib.star_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_11();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star_Слой_1, null, null);


(lib.MoonButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_6();
	this.instance.parent = this;
	this.instance.setTransform(14.25,13.55,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.25,13.55,0.5,0.5);

	this.instance_3 = new lib.CachedTexturedBitmap_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_4 = new lib.CachedTexturedBitmap_10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(36.15,23.65,0.5,0.5);

	this.instance_5 = new lib.CachedTexturedBitmap_9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(26.45,14.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,153.5,85);


(lib.Moon_bg_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Moon_bg_Слой_1, null, null);


(lib.Moon_Слой_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Moon_Слой_1, null, null);


(lib.Монтажный_кадр_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(-85.05,-37.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();


(lib.Sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Sun_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(61,61,1,1,0,0,0,61,61);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sun, new cjs.Rectangle(0,0,122,122), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.star_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(8.3,8.3,1,1,0,0,0,8.3,8.3);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-0.5,-0.5,17.5,17.5), null);


(lib.Moon_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Moon_bg_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(417,278.3,1,1,0,0,0,417,278.3);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Moon_bg, new cjs.Rectangle(0,0,834,556.5), null);


(lib.Moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1_obj_
	this.Слой_1 = new lib.Moon_Слой_1();
	this.Слой_1.name = "Слой_1";
	this.Слой_1.parent = this;
	this.Слой_1.setTransform(62.5,62.5,1,1,0,0,0,62.5,62.5);
	this.Слой_1.depth = 0;
	this.Слой_1.isAttachedToCamera = 0
	this.Слой_1.isAttachedToMask = 0
	this.Слой_1.layerDepth = 0
	this.Слой_1.layerIndex = 0
	this.Слой_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Слой_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Moon, new cjs.Rectangle(0,0,125,125), null);


(lib.Монтажный_кадр_1_Sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Sun
	this.movieClip_2 = new lib.Sun();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(-62.8,378.5,1,1,0,0,0,61.1,61.1);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1).to({regX:61,regY:61,x:-55,y:370.6},0).wait(1).to({x:-47.15,y:362.8},0).wait(1).to({x:-39.25,y:355},0).wait(1).to({x:-31.4,y:347.2},0).wait(1).to({x:-23.5,y:339.4},0).wait(1).to({x:-15.65,y:331.6},0).wait(1).to({x:-7.75,y:323.8},0).wait(1).to({x:0.1,y:316},0).wait(1).to({x:8,y:308.2},0).wait(1).to({x:15.85,y:300.4},0).wait(1).to({x:23.75,y:292.6},0).wait(1).to({x:31.6,y:284.85},0).wait(1).to({x:39.5,y:277.05},0).wait(1).to({x:47.35,y:269.25},0).wait(1).to({x:55.25,y:261.45},0).wait(1).to({x:63.05,y:253.65},0).wait(1).to({x:70.95,y:245.85},0).wait(1).to({x:78.65,y:239.2},0).wait(1).to({x:86.35,y:232.55},0).wait(1).to({x:94.1,y:225.9},0).wait(1).to({x:101.8,y:219.25},0).wait(1).to({x:109.55,y:212.6},0).wait(1).to({x:117.25,y:205.95},0).wait(1).to({x:124.95,y:199.3},0).wait(1).to({x:132.7,y:192.65},0).wait(1).to({x:140.4,y:186},0).wait(1).to({x:148.15,y:179.35},0).wait(1).to({x:155.85,y:172.7},0).wait(1).to({x:163.6,y:166.05},0).wait(1).to({x:171.3,y:159.35},0).wait(1).to({x:179.2,y:157.05},0).wait(1).to({x:187.05,y:154.7},0).wait(1).to({x:194.95,y:152.4},0).wait(1).to({x:202.8,y:150.05},0).wait(1).to({x:210.7,y:147.75},0).wait(1).to({x:218.55,y:145.4},0).wait(1).to({x:226.45,y:143.1},0).wait(1).to({x:234.3,y:140.75},0).wait(1).to({x:242.2,y:138.4},0).wait(1).to({x:250.05,y:136.1},0).wait(1).to({x:257.95,y:133.75},0).wait(1).to({x:265.8,y:131.45},0).wait(1).to({x:273.65,y:129.1},0).wait(1).to({x:281.55,y:126.8},0).wait(1).to({x:289.4,y:124.45},0).wait(1).to({x:297.3,y:122.1},0).wait(1).to({x:305.15,y:119.8},0).wait(1).to({x:314.15,y:121.85},0).wait(1).to({x:323.2,y:123.9},0).wait(1).to({x:332.2,y:125.95},0).wait(1).to({x:341.2,y:128},0).wait(1).to({x:350.2,y:130.05},0).wait(1).to({x:359.2,y:132.1},0).wait(1).to({x:368.2,y:134.15},0).wait(1).to({x:377.2,y:136.2},0).wait(1).to({x:386.2,y:138.3},0).wait(1).to({x:395.25,y:140.35},0).wait(1).to({x:404.25,y:142.4},0).wait(1).to({x:413.25,y:144.45},0).wait(1).to({x:422.25,y:146.5},0).wait(1).to({x:431.25,y:148.55},0).wait(1).to({x:440.25,y:150.6},0).wait(1).to({x:449.25,y:152.65},0).wait(1).to({x:458.25,y:154.7},0).wait(1).to({x:464.95,y:159.2},0).wait(1).to({x:471.65,y:163.65},0).wait(1).to({x:478.4,y:168.15},0).wait(1).to({x:485.1,y:172.6},0).wait(1).to({x:491.8,y:177.1},0).wait(1).to({x:498.5,y:181.55},0).wait(1).to({x:505.2,y:186.05},0).wait(1).to({x:511.9,y:190.5},0).wait(1).to({x:518.6,y:195},0).wait(1).to({x:525.3,y:199.45},0).wait(1).to({x:532,y:203.95},0).wait(1).to({x:538.7,y:208.4},0).wait(1).to({x:545.4,y:212.9},0).wait(1).to({x:552.1,y:217.35},0).wait(1).to({x:558.8,y:221.85},0).wait(1).to({x:565.5,y:226.3},0).wait(1).to({x:572.2,y:230.8},0).wait(1).to({x:578.9,y:235.25},0).wait(1).to({x:586.4,y:243.95},0).wait(1).to({x:593.95,y:252.65},0).wait(1).to({x:601.45,y:261.4},0).wait(1).to({x:608.95,y:270.1},0).wait(1).to({x:616.5,y:278.8},0).wait(1).to({x:624,y:287.5},0).wait(1).to({x:631.55,y:296.2},0).wait(1).to({x:639.05,y:304.9},0).wait(1).to({x:646.55,y:313.6},0).wait(1).to({x:654.1,y:322.3},0).wait(1).to({x:661.6,y:331},0).wait(1).to({x:669.15,y:339.7},0).wait(1).to({x:676.65,y:348.4},0).wait(1).to({x:684.15,y:357.1},0).wait(1).to({x:691.7,y:365.8},0).wait(1).to({x:699.2,y:374.5},0).wait(1).to({x:706.75,y:383.25},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.movieClip_16 = new lib.star();
	this.movieClip_16.name = "movieClip_16";
	this.movieClip_16.parent = this;
	this.movieClip_16.setTransform(384.75,51.35,1,1,0,0,0,8.3,8.3);

	this.movieClip_15 = new lib.star();
	this.movieClip_15.name = "movieClip_15";
	this.movieClip_15.parent = this;
	this.movieClip_15.setTransform(222.3,72.7,1,1,0,0,0,8.3,8.3);

	this.movieClip_12 = new lib.star();
	this.movieClip_12.name = "movieClip_12";
	this.movieClip_12.parent = this;
	this.movieClip_12.setTransform(507.25,149.65,1,1,0,0,0,8.3,8.3);

	this.movieClip_11 = new lib.star();
	this.movieClip_11.name = "movieClip_11";
	this.movieClip_11.parent = this;
	this.movieClip_11.setTransform(323.45,209.5,1,1,0,0,0,8.3,8.3);

	this.movieClip_10 = new lib.star();
	this.movieClip_10.name = "movieClip_10";
	this.movieClip_10.parent = this;
	this.movieClip_10.setTransform(99.1,167.4,1,1,0,0,0,8.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_10},{t:this.movieClip_11},{t:this.movieClip_12},{t:this.movieClip_15},{t:this.movieClip_16}]}).wait(100));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Moon_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Moon_bg
	this.button_5 = new lib.Moon_bg();
	this.button_5.name = "button_5";
	this.button_5.parent = this;
	this.button_5.setTransform(332.35,775,1,1,0,0,0,416.9,278.4);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_5).wait(1).to({regX:417,regY:278.3,x:332.45,y:769},0).wait(1).to({y:763.15},0).wait(1).to({y:757.3},0).wait(1).to({y:751.45},0).wait(1).to({y:745.6},0).wait(1).to({y:739.7},0).wait(1).to({y:733.85},0).wait(1).to({y:728},0).wait(1).to({y:722.15},0).wait(1).to({y:716.3},0).wait(1).to({y:710.4},0).wait(1).to({y:704.55},0).wait(1).to({y:698.7},0).wait(1).to({y:692.85},0).wait(1).to({y:687},0).wait(1).to({y:681.15},0).wait(1).to({y:675.25},0).wait(1).to({y:669.4},0).wait(1).to({y:663.55},0).wait(1).to({y:657.7},0).wait(1).to({y:651.85},0).wait(1).to({y:645.95},0).wait(1).to({y:640.1},0).wait(1).to({y:634.25},0).wait(1).to({y:628.4},0).wait(1).to({y:622.55},0).wait(1).to({y:616.65},0).wait(1).to({y:610.8},0).wait(1).to({y:604.95},0).wait(1).to({y:599.1},0).wait(1).to({y:593.25},0).wait(1).to({y:587.4},0).wait(1).to({y:581.5},0).wait(1).to({y:575.65},0).wait(1).to({y:569.8},0).wait(1).to({y:563.95},0).wait(1).to({y:558.1},0).wait(1).to({y:552.2},0).wait(1).to({y:546.35},0).wait(1).to({y:540.5},0).wait(1).to({y:534.65},0).wait(1).to({y:528.8},0).wait(1).to({y:522.9},0).wait(1).to({y:517.05},0).wait(1).to({y:511.2},0).wait(1).to({y:505.35},0).wait(1).to({y:499.5},0).wait(1).to({y:493.65},0).wait(1).to({y:487.75},0).wait(1).to({y:481.9},0).wait(1).to({y:476.05},0).wait(1).to({y:470.2},0).wait(1).to({y:464.35},0).wait(1).to({y:458.45},0).wait(1).to({y:452.6},0).wait(1).to({y:446.75},0).wait(1).to({y:440.9},0).wait(1).to({y:435.05},0).wait(1).to({y:429.15},0).wait(1).to({y:423.3},0).wait(1).to({y:417.45},0).wait(1).to({y:411.6},0).wait(1).to({y:405.75},0).wait(1).to({y:399.9},0).wait(1).to({y:394},0).wait(1).to({y:388.15},0).wait(1).to({y:382.3},0).wait(1).to({y:376.45},0).wait(1).to({y:370.6},0).wait(1).to({y:364.7},0).wait(1).to({y:358.85},0).wait(1).to({y:353},0).wait(1).to({y:347.15},0).wait(1).to({y:341.3},0).wait(1).to({y:335.45},0).wait(1).to({y:329.55},0).wait(1).to({y:323.7},0).wait(1).to({y:317.85},0).wait(1).to({y:312},0).wait(1).to({y:306.15},0).wait(1).to({y:300.25},0).wait(1).to({y:294.4},0).wait(1).to({y:288.55},0).wait(1).to({y:282.7},0).wait(1).to({y:276.9},0).wait(1).to({y:271},0).wait(1).to({y:265.15},0).wait(1).to({y:259.3},0).wait(1).to({y:253.45},0).wait(1).to({y:247.6},0).wait(1).to({y:241.7},0).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Moon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Moon
	this.movieClip_4 = new lib.Moon();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(721.6,380,1,1,0,0,0,62.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_4).wait(1).to({regX:62.5,regY:62.5,x:712.55,y:372.1},0).wait(1).to({x:703.6,y:364.3},0).wait(1).to({x:694.65,y:356.5},0).wait(1).to({x:685.7,y:348.7},0).wait(1).to({x:676.8,y:340.9},0).wait(1).to({x:667.85,y:333.1},0).wait(1).to({x:658.9,y:325.3},0).wait(1).to({x:649.95,y:317.5},0).wait(1).to({x:641.05,y:309.7},0).wait(1).to({x:632.1,y:301.95},0).wait(1).to({x:623.15,y:294.15},0).wait(1).to({x:614.2,y:286.35},0).wait(1).to({x:605.25,y:278.55},0).wait(1).to({x:596.35,y:270.75},0).wait(1).to({x:587.4,y:262.95},0).wait(1).to({x:578.45,y:255.15},0).wait(1).to({x:569.5,y:247.35},0).wait(1).to({x:560.75,y:240.7},0).wait(1).to({x:552,y:234.05},0).wait(1).to({x:543.2,y:227.4},0).wait(1).to({x:534.45,y:220.75},0).wait(1).to({x:525.7,y:214.1},0).wait(1).to({x:516.9,y:207.45},0).wait(1).to({x:508.15,y:200.8},0).wait(1).to({x:499.4,y:194.15},0).wait(1).to({x:490.6,y:187.5},0).wait(1).to({x:481.85,y:180.8},0).wait(1).to({x:473.1,y:174.15},0).wait(1).to({x:464.3,y:167.5},0).wait(1).to({x:455.55,y:160.85},0).wait(1).to({x:446.6,y:158.55},0).wait(1).to({x:437.65,y:156.2},0).wait(1).to({x:428.75,y:153.9},0).wait(1).to({x:419.8,y:151.55},0).wait(1).to({x:410.85,y:149.25},0).wait(1).to({x:401.9,y:146.9},0).wait(1).to({x:393,y:144.6},0).wait(1).to({x:384.05,y:142.25},0).wait(1).to({x:375.1,y:139.95},0).wait(1).to({x:366.15,y:137.6},0).wait(1).to({x:357.2,y:135.3},0).wait(1).to({x:348.3,y:132.95},0).wait(1).to({x:339.35,y:130.65},0).wait(1).to({x:330.4,y:128.3},0).wait(1).to({x:321.45,y:126},0).wait(1).to({x:312.55,y:123.65},0).wait(1).to({x:303.6,y:121.35},0).wait(1).to({x:296.05,y:123.4},0).wait(1).to({x:288.5,y:125.45},0).wait(1).to({x:281,y:127.5},0).wait(1).to({x:273.45,y:129.55},0).wait(1).to({x:265.9,y:131.6},0).wait(1).to({x:258.4,y:133.65},0).wait(1).to({x:250.85,y:135.7},0).wait(1).to({x:243.3,y:137.75},0).wait(1).to({x:235.8,y:139.8},0).wait(1).to({x:228.25,y:141.85},0).wait(1).to({x:220.7,y:143.9},0).wait(1).to({x:213.15,y:145.95},0).wait(1).to({x:205.65,y:148},0).wait(1).to({x:198.1,y:150.05},0).wait(1).to({x:190.55,y:152.1},0).wait(1).to({x:183.05,y:154.15},0).wait(1).to({x:175.5,y:156.2},0).wait(1).to({x:168.2,y:160.5},0).wait(1).to({x:160.95,y:164.8},0).wait(1).to({x:153.65,y:169.1},0).wait(1).to({x:146.35,y:173.45},0).wait(1).to({x:139.1,y:177.75},0).wait(1).to({x:131.8,y:182.05},0).wait(1).to({x:124.5,y:186.35},0).wait(1).to({x:117.25,y:190.65},0).wait(1).to({x:109.95,y:194.95},0).wait(1).to({x:102.65,y:199.3},0).wait(1).to({x:95.4,y:203.6},0).wait(1).to({x:88.1,y:207.9},0).wait(1).to({x:80.85,y:212.2},0).wait(1).to({x:73.55,y:216.5},0).wait(1).to({x:66.25,y:220.85},0).wait(1).to({x:59.05,y:225.15},0).wait(1).to({x:51.75,y:229.45},0).wait(1).to({x:44.45,y:233.75},0).wait(1).to({x:37.1,y:242.65},0).wait(1).to({x:29.75,y:251.5},0).wait(1).to({x:22.4,y:260.4},0).wait(1).to({x:15.05,y:269.3},0).wait(1).to({x:7.65,y:278.15},0).wait(1).to({x:0.3,y:287.05},0).wait(1).to({x:-7.05,y:295.9},0).wait(1).to({x:-14.4,y:304.8},0).wait(1).to({x:-21.75,y:313.7},0).wait(1).to({x:-29.1,y:322.55},0).wait(1).to({x:-36.5,y:331.45},0).wait(1).to({x:-43.85,y:340.3},0).wait(1).to({x:-51.2,y:349.2},0).wait(1).to({x:-58.55,y:358.1},0).wait(1).to({x:-65.9,y:366.95},0).wait(1).to({x:-73.25,y:375.85},0).wait(1).to({x:-80.65,y:384.75},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Монтажный_кадр_1_Actions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.button_3 = new lib.MoonButton();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(428.7,412.5,1,1,0,0,0,76.4,42.1);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2);

	this.button_1 = new lib.SunButton();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(194.25,413,1,1,0,0,0,69.2,42.6);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1},{t:this.button_3}]}).to({state:[{t:this.button_1},{t:this.button_3}]},3).to({state:[{t:this.button_1},{t:this.button_3}]},42).to({state:[{t:this.button_1},{t:this.button_3}]},53).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.SunMOOn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.button_1 = this.Actions.button_1;
		this.button_3 = this.Actions.button_3;
		this.movieClip_2 = this.Sun.movieClip_2;
		this.movieClip_4 = this.Moon.movieClip_4;
		this.movieClip_10 = this.star.movieClip_10;
		this.movieClip_11 = this.star.movieClip_11;
		this.movieClip_12 = this.star.movieClip_12;
		this.movieClip_15 = this.star.movieClip_15;
		this.movieClip_16 = this.star.movieClip_16;
		this.button_5 = this.Moon_bg.button_5;
		this.stop();
		
		this.button_5.visible = false;
		this.movieClip_10.visible = false;
		this.movieClip_11.visible = false;
		this.movieClip_12.visible = false;
		this.movieClip_15.visible = false;
		this.movieClip_16.visible = false;
		
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.play();
			this.movieClip_4.visible = false;
			this.movieClip_2.visible = true;
			this.button_5.visible = false;
			this.movieClip_10.visible = false;
			this.movieClip_11.visible = false;
			this.movieClip_12.visible = false;
			this.movieClip_15.visible = false;
			this.movieClip_16.visible = false;
		}
		
		this.button_3.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.play();
			this.button_5.visible = true;
			this.movieClip_4.visible = true;
			this.movieClip_2.visible = false;
			this.movieClip_10.visible = true;
			this.movieClip_11.visible = true;
			this.movieClip_12.visible = true;
			this.movieClip_15.visible = true;
			this.movieClip_16.visible = true;
		}
		
		
		this.addEventListener("tick", fl_AnimateVertically.bind(this));
		var k = 0;
		
		var step = 0.05;
		
		var flag = 0;
		
		function fl_AnimateVertically()
		{
			if(k == 0){
				this.movieClip_10.x=Math.floor((Math.random() * 640) + 1);
				this.movieClip_10.y=Math.floor((Math.random() * 300) + 1);
				k = 1;
				this.movieClip_10.alpha = Math.floor((Math.random() * 100) + 31) / 100;
			}
			
			if(this.movieClip_10.alpha > 0.95)
				flag = 1;
			if(this.movieClip_10.alpha < 0.3)
				flag = 0;
			if(flag == 0 && this.movieClip_10.alpha < 1)
				this.movieClip_10.alpha += step;
			if(flag == 1 && this.movieClip_10.alpha > 0.2)
				this.movieClip_10.alpha -= step;
		}
		
		this.addEventListener("tick", fl_AnimateVertically_2.bind(this));
		var flag1 = 0;
		
		function fl_AnimateVertically_2()
		{
			if(k == 1){
				this.movieClip_11.x=Math.floor((Math.random() * 640) + 1);
				this.movieClip_11.y=Math.floor((Math.random() * 300) + 1);
				k = 2;
				this.movieClip_11.alpha = Math.floor((Math.random() * 100) + 31) / 100;
			}
			if(this.movieClip_11.alpha > 0.95)
				flag1 = 1;
			if(this.movieClip_11.alpha < 0.3)
				flag1 = 0;
			if(flag1 == 0 && this.movieClip_11.alpha < 1)
				this.movieClip_11.alpha += step;
			if(flag1 == 1 && this.movieClip_11.alpha > 0.2)
				this.movieClip_11.alpha -= step;
		}
		
		this.addEventListener("tick", fl_AnimateHorizontally_4.bind(this));
		var flag2 = 0;
		
		function fl_AnimateHorizontally_4()
		{
			if(k == 2){
				this.movieClip_15.x=Math.floor((Math.random() * 640) + 1);
				this.movieClip_15.y=Math.floor((Math.random() * 300) + 1);
				k = 3;
				this.movieClip_15.alpha = Math.floor((Math.random() * 100) + 31) / 100;
			}
			if(this.movieClip_15.alpha > 0.95)
				flag2 = 1;
			if(this.movieClip_15.alpha < 0.3)
				flag2 = 0;
			if(flag2 == 0 && this.movieClip_15.alpha < 1)
				this.movieClip_15.alpha += step;
			if(flag2 == 1 && this.movieClip_15.alpha > 0.2)
				this.movieClip_15.alpha -= step;
		}
		
		this.addEventListener("tick", fl_AnimateHorizontally_5.bind(this));
		var flag3 = 0;
		
		function fl_AnimateHorizontally_5()
		{
			if(k == 3){
				this.movieClip_16.x=Math.floor((Math.random() * 640) + 1);
				this.movieClip_16.y=Math.floor((Math.random() * 300) + 1);
				k = 4;
				this.movieClip_16.alpha = Math.floor((Math.random() * 100) + 31) / 100;
			}
			if(this.movieClip_16.alpha > 0.95)
				flag3 = 1;
			if(this.movieClip_16.alpha < 0.3)
				flag3 = 0;
			if(flag3 == 0 && this.movieClip_16.alpha < 1)
				this.movieClip_16.alpha += step;
			if(flag3 == 1 && this.movieClip_16.alpha > 0.2)
				this.movieClip_16.alpha -= step;
		}
		
		this.addEventListener("tick", fl_AnimateHorizontally_6.bind(this));
		var flag4 = 0;
		
		function fl_AnimateHorizontally_6()
		{
			if(k == 4){
				this.movieClip_12.x=Math.floor((Math.random() * 640) + 1);
				this.movieClip_12.y=Math.floor((Math.random() * 300) + 1);
				k = 5;
				this.movieClip_12.alpha = Math.floor((Math.random() * 100) + 31) / 100;
			}
			if(this.movieClip_12.alpha > 0.95)
				flag4 = 1;
			if(this.movieClip_12.alpha < 0.3)
				flag4 = 0;
			if(flag4 == 0 && this.movieClip_12.alpha < 1)
				this.movieClip_12.alpha += step;
			if(flag4 == 1 && this.movieClip_12.alpha > 0.2)
				this.movieClip_12.alpha -= step;
		}
	}
	this.frame_3 = function() {
		this.button_1 = undefined;this.button_3 = undefined;this.button_1 = this.Actions.button_1;
		this.button_3 = this.Actions.button_3;
	}
	this.frame_45 = function() {
		this.button_1 = undefined;this.button_3 = undefined;this.button_1 = this.Actions.button_1;
		this.button_3 = this.Actions.button_3;
		this.movieClip_7.visible = false;
		this.button_1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.movieClip_7.visible = false;
		}
		
		this.button_3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.movieClip_7.visible = true;
		}
	}
	this.frame_98 = function() {
		this.button_1 = undefined;this.button_3 = undefined;this.button_1 = this.Actions.button_1;
		this.button_3 = this.Actions.button_3;
	}
	this.frame_99 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(42).call(this.frame_45).wait(53).call(this.frame_98).wait(1).call(this.frame_99).wait(1));

	// Actions_obj_
	this.Actions = new lib.Монтажный_кадр_1_Actions();
	this.Actions.name = "Actions";
	this.Actions.parent = this;
	this.Actions.setTransform(314.9,413.2,1,1,0,0,0,314.9,413.2);
	this.Actions.depth = 0;
	this.Actions.isAttachedToCamera = 0
	this.Actions.isAttachedToMask = 0
	this.Actions.layerDepth = 0
	this.Actions.layerIndex = 0
	this.Actions.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Actions).wait(100));

	// Sun_obj_
	this.Sun = new lib.Монтажный_кадр_1_Sun();
	this.Sun.name = "Sun";
	this.Sun.parent = this;
	this.Sun.setTransform(-62.9,378.4,1,1,0,0,0,-62.9,378.4);
	this.Sun.depth = 0;
	this.Sun.isAttachedToCamera = 0
	this.Sun.isAttachedToMask = 0
	this.Sun.layerDepth = 0
	this.Sun.layerIndex = 1
	this.Sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Sun).wait(1).to({regX:321.9,regY:251.5,x:321.9,y:251.5},0).wait(99));

	// Moon_obj_
	this.Moon = new lib.Монтажный_кадр_1_Moon();
	this.Moon.name = "Moon";
	this.Moon.parent = this;
	this.Moon.setTransform(721.5,379.9,1,1,0,0,0,721.5,379.9);
	this.Moon.depth = 0;
	this.Moon.isAttachedToCamera = 0
	this.Moon.isAttachedToMask = 0
	this.Moon.layerDepth = 0
	this.Moon.layerIndex = 2
	this.Moon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Moon).wait(1).to({regX:320.4,regY:253.1,x:320.4,y:253.1},0).wait(99));

	// star_obj_
	this.star = new lib.Монтажный_кадр_1_star();
	this.star.name = "star";
	this.star.parent = this;
	this.star.setTransform(303.1,130.3,1,1,0,0,0,303.1,130.3);
	this.star.depth = 0;
	this.star.isAttachedToCamera = 0
	this.star.isAttachedToMask = 0
	this.star.layerDepth = 0
	this.star.layerIndex = 3
	this.star.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.star).wait(100));

	// Moon_bg_obj_
	this.Moon_bg = new lib.Монтажный_кадр_1_Moon_bg();
	this.Moon_bg.name = "Moon_bg";
	this.Moon_bg.parent = this;
	this.Moon_bg.setTransform(332.4,774.9,1,1,0,0,0,332.4,774.9);
	this.Moon_bg.depth = 0;
	this.Moon_bg.isAttachedToCamera = 0
	this.Moon_bg.isAttachedToMask = 0
	this.Moon_bg.layerDepth = 0
	this.Moon_bg.layerIndex = 4
	this.Moon_bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Moon_bg).wait(1).to({regX:332.5,regY:508.2,x:332.5,y:508.2},0).wait(99));

	// bg_obj_
	this.bg = new lib.Монтажный_кадр_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(331.2,229.9,1,1,0,0,0,331.2,229.9);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 5
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(176.9,202.9,607.1,850.1999999999999);
// library properties:
lib.properties = {
	id: '6F37490AB695614AA2189F40F7A80820',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Sun_MOOn_atlas_.png?1575192132668", id:"Sun_MOOn_atlas_"},
		{src:"images/Sun_MOOn_atlas_2.png?1575192132669", id:"Sun_MOOn_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6F37490AB695614AA2189F40F7A80820'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;