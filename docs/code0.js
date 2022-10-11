gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.GDp1Objects1= [];
gdjs.TitleScreenCode.GDp1Objects2= [];
gdjs.TitleScreenCode.GDp2Objects1= [];
gdjs.TitleScreenCode.GDp2Objects2= [];
gdjs.TitleScreenCode.GDp3Objects1= [];
gdjs.TitleScreenCode.GDp3Objects2= [];
gdjs.TitleScreenCode.GDp4Objects1= [];
gdjs.TitleScreenCode.GDp4Objects2= [];
gdjs.TitleScreenCode.GDsprite_95crossObjects1= [];
gdjs.TitleScreenCode.GDsprite_95crossObjects2= [];
gdjs.TitleScreenCode.GDsprite_95aObjects1= [];
gdjs.TitleScreenCode.GDsprite_95aObjects2= [];
gdjs.TitleScreenCode.GDtxt_95keysdevObjects1= [];
gdjs.TitleScreenCode.GDtxt_95keysdevObjects2= [];
gdjs.TitleScreenCode.GDtxt_95controlsslashObjects1= [];
gdjs.TitleScreenCode.GDtxt_95controlsslashObjects2= [];
gdjs.TitleScreenCode.GDtitlelogoObjects1= [];
gdjs.TitleScreenCode.GDtitlelogoObjects2= [];
gdjs.TitleScreenCode.GDtitlelogo2Objects1= [];
gdjs.TitleScreenCode.GDtitlelogo2Objects2= [];
gdjs.TitleScreenCode.GDtxt_95player1Objects1= [];
gdjs.TitleScreenCode.GDtxt_95player1Objects2= [];
gdjs.TitleScreenCode.GDtxt_95player2Objects1= [];
gdjs.TitleScreenCode.GDtxt_95player2Objects2= [];
gdjs.TitleScreenCode.GDtxt_95player3Objects1= [];
gdjs.TitleScreenCode.GDtxt_95player3Objects2= [];
gdjs.TitleScreenCode.GDtxt_95player4Objects1= [];
gdjs.TitleScreenCode.GDtxt_95player4Objects2= [];
gdjs.TitleScreenCode.GDtxt_95devkeysObjects1= [];
gdjs.TitleScreenCode.GDtxt_95devkeysObjects2= [];
gdjs.TitleScreenCode.GDtxt_95playObjects1= [];
gdjs.TitleScreenCode.GDtxt_95playObjects2= [];
gdjs.TitleScreenCode.GDtxt_95play2Objects1= [];
gdjs.TitleScreenCode.GDtxt_95play2Objects2= [];
gdjs.TitleScreenCode.GDtxt_95play3Objects1= [];
gdjs.TitleScreenCode.GDtxt_95play3Objects2= [];
gdjs.TitleScreenCode.GDtile_95backgroundObjects1= [];
gdjs.TitleScreenCode.GDtile_95backgroundObjects2= [];
gdjs.TitleScreenCode.GDsprite_95platformObjects1= [];
gdjs.TitleScreenCode.GDsprite_95platformObjects2= [];
gdjs.TitleScreenCode.GDp1_95gravityObjects1= [];
gdjs.TitleScreenCode.GDp1_95gravityObjects2= [];
gdjs.TitleScreenCode.GDp2_95gravityObjects1= [];
gdjs.TitleScreenCode.GDp2_95gravityObjects2= [];
gdjs.TitleScreenCode.GDp3_95gravityObjects1= [];
gdjs.TitleScreenCode.GDp3_95gravityObjects2= [];
gdjs.TitleScreenCode.GDp4_95gravityObjects1= [];
gdjs.TitleScreenCode.GDp4_95gravityObjects2= [];

gdjs.TitleScreenCode.conditionTrue_0 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition3IsTrue_0 = {val:false};
gdjs.TitleScreenCode.condition4IsTrue_0 = {val:false};
gdjs.TitleScreenCode.conditionTrue_1 = {val:false};
gdjs.TitleScreenCode.condition0IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition1IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition2IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition3IsTrue_1 = {val:false};
gdjs.TitleScreenCode.condition4IsTrue_1 = {val:false};


gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
gdjs.TitleScreenCode.condition1IsTrue_0.val = false;
gdjs.TitleScreenCode.condition2IsTrue_0.val = false;
gdjs.TitleScreenCode.condition3IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleScreenCode.condition0IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition1IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition2IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TitleScreenCode.condition2IsTrue_0.val ) {
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition3IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
}
}
if (gdjs.TitleScreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TransitionScreen", false);
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p1_gravity"), gdjs.TitleScreenCode.GDp1_95gravityObjects1);
{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDp1_95gravityObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDp1_95gravityObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2_gravity"), gdjs.TitleScreenCode.GDp2_95gravityObjects1);
{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 2, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDp2_95gravityObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDp2_95gravityObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p3_gravity"), gdjs.TitleScreenCode.GDp3_95gravityObjects1);
{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 3, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDp3_95gravityObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDp3_95gravityObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleScreenCode.conditionTrue_1 = gdjs.TitleScreenCode.condition0IsTrue_0;
gdjs.TitleScreenCode.condition0IsTrue_1.val = false;
gdjs.TitleScreenCode.condition1IsTrue_1.val = false;
gdjs.TitleScreenCode.condition2IsTrue_1.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if( gdjs.TitleScreenCode.condition0IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition1IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
gdjs.TitleScreenCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.TitleScreenCode.condition2IsTrue_1.val ) {
    gdjs.TitleScreenCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p4_gravity"), gdjs.TitleScreenCode.GDp4_95gravityObjects1);
{gdjs.evtsExt__Gamepads__A_Vibrate_controller.func(runtimeScene, 4, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.TitleScreenCode.GDp4_95gravityObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDp4_95gravityObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.TitleScreenCode.condition0IsTrue_0.val = false;
{
gdjs.TitleScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleScreenCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDp1Objects1.length = 0;
gdjs.TitleScreenCode.GDp1Objects2.length = 0;
gdjs.TitleScreenCode.GDp2Objects1.length = 0;
gdjs.TitleScreenCode.GDp2Objects2.length = 0;
gdjs.TitleScreenCode.GDp3Objects1.length = 0;
gdjs.TitleScreenCode.GDp3Objects2.length = 0;
gdjs.TitleScreenCode.GDp4Objects1.length = 0;
gdjs.TitleScreenCode.GDp4Objects2.length = 0;
gdjs.TitleScreenCode.GDsprite_95crossObjects1.length = 0;
gdjs.TitleScreenCode.GDsprite_95crossObjects2.length = 0;
gdjs.TitleScreenCode.GDsprite_95aObjects1.length = 0;
gdjs.TitleScreenCode.GDsprite_95aObjects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.TitleScreenCode.GDtitlelogoObjects1.length = 0;
gdjs.TitleScreenCode.GDtitlelogoObjects2.length = 0;
gdjs.TitleScreenCode.GDtitlelogo2Objects1.length = 0;
gdjs.TitleScreenCode.GDtitlelogo2Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95player1Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95player1Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95player2Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95player2Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95player3Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95player3Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95player4Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95player4Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95devkeysObjects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95devkeysObjects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95playObjects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95playObjects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95play2Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95play2Objects2.length = 0;
gdjs.TitleScreenCode.GDtxt_95play3Objects1.length = 0;
gdjs.TitleScreenCode.GDtxt_95play3Objects2.length = 0;
gdjs.TitleScreenCode.GDtile_95backgroundObjects1.length = 0;
gdjs.TitleScreenCode.GDtile_95backgroundObjects2.length = 0;
gdjs.TitleScreenCode.GDsprite_95platformObjects1.length = 0;
gdjs.TitleScreenCode.GDsprite_95platformObjects2.length = 0;
gdjs.TitleScreenCode.GDp1_95gravityObjects1.length = 0;
gdjs.TitleScreenCode.GDp1_95gravityObjects2.length = 0;
gdjs.TitleScreenCode.GDp2_95gravityObjects1.length = 0;
gdjs.TitleScreenCode.GDp2_95gravityObjects2.length = 0;
gdjs.TitleScreenCode.GDp3_95gravityObjects1.length = 0;
gdjs.TitleScreenCode.GDp3_95gravityObjects2.length = 0;
gdjs.TitleScreenCode.GDp4_95gravityObjects1.length = 0;
gdjs.TitleScreenCode.GDp4_95gravityObjects2.length = 0;

gdjs.TitleScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
