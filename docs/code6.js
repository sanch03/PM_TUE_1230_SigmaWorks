gdjs.RLGLMainCode = {};
gdjs.RLGLMainCode.GDEarthObjects1_1final = [];

gdjs.RLGLMainCode.GDPlayer1Objects1_1final = [];

gdjs.RLGLMainCode.GDPlayer2Objects1_1final = [];

gdjs.RLGLMainCode.GDPlayer3Objects1_1final = [];

gdjs.RLGLMainCode.GDPlayer4Objects1_1final = [];

gdjs.RLGLMainCode.GDp1Objects1= [];
gdjs.RLGLMainCode.GDp1Objects2= [];
gdjs.RLGLMainCode.GDp2Objects1= [];
gdjs.RLGLMainCode.GDp2Objects2= [];
gdjs.RLGLMainCode.GDp3Objects1= [];
gdjs.RLGLMainCode.GDp3Objects2= [];
gdjs.RLGLMainCode.GDp4Objects1= [];
gdjs.RLGLMainCode.GDp4Objects2= [];
gdjs.RLGLMainCode.GDsprite_95crossObjects1= [];
gdjs.RLGLMainCode.GDsprite_95crossObjects2= [];
gdjs.RLGLMainCode.GDsprite_95aObjects1= [];
gdjs.RLGLMainCode.GDsprite_95aObjects2= [];
gdjs.RLGLMainCode.GDtxt_95keysdevObjects1= [];
gdjs.RLGLMainCode.GDtxt_95keysdevObjects2= [];
gdjs.RLGLMainCode.GDtxt_95controlsslashObjects1= [];
gdjs.RLGLMainCode.GDtxt_95controlsslashObjects2= [];
gdjs.RLGLMainCode.GDEarthObjects1= [];
gdjs.RLGLMainCode.GDEarthObjects2= [];
gdjs.RLGLMainCode.GDPlayer1Objects1= [];
gdjs.RLGLMainCode.GDPlayer1Objects2= [];
gdjs.RLGLMainCode.GDP1LightObjects1= [];
gdjs.RLGLMainCode.GDP1LightObjects2= [];
gdjs.RLGLMainCode.GDPlayer2Objects1= [];
gdjs.RLGLMainCode.GDPlayer2Objects2= [];
gdjs.RLGLMainCode.GDP2LightObjects1= [];
gdjs.RLGLMainCode.GDP2LightObjects2= [];
gdjs.RLGLMainCode.GDPlayer3Objects1= [];
gdjs.RLGLMainCode.GDPlayer3Objects2= [];
gdjs.RLGLMainCode.GDP3LightObjects1= [];
gdjs.RLGLMainCode.GDP3LightObjects2= [];
gdjs.RLGLMainCode.GDPlayer4Objects1= [];
gdjs.RLGLMainCode.GDPlayer4Objects2= [];
gdjs.RLGLMainCode.GDP4LightObjects1= [];
gdjs.RLGLMainCode.GDP4LightObjects2= [];
gdjs.RLGLMainCode.GDTrafficLightObjects1= [];
gdjs.RLGLMainCode.GDTrafficLightObjects2= [];
gdjs.RLGLMainCode.GDRedLightObjects1= [];
gdjs.RLGLMainCode.GDRedLightObjects2= [];
gdjs.RLGLMainCode.GDGreenLightObjects1= [];
gdjs.RLGLMainCode.GDGreenLightObjects2= [];
gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects1= [];
gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects2= [];
gdjs.RLGLMainCode.GDActionTextObjects1= [];
gdjs.RLGLMainCode.GDActionTextObjects2= [];
gdjs.RLGLMainCode.GDdebugtextObjects1= [];
gdjs.RLGLMainCode.GDdebugtextObjects2= [];

gdjs.RLGLMainCode.conditionTrue_0 = {val:false};
gdjs.RLGLMainCode.condition0IsTrue_0 = {val:false};
gdjs.RLGLMainCode.condition1IsTrue_0 = {val:false};
gdjs.RLGLMainCode.condition2IsTrue_0 = {val:false};
gdjs.RLGLMainCode.condition3IsTrue_0 = {val:false};
gdjs.RLGLMainCode.condition4IsTrue_0 = {val:false};
gdjs.RLGLMainCode.conditionTrue_1 = {val:false};
gdjs.RLGLMainCode.condition0IsTrue_1 = {val:false};
gdjs.RLGLMainCode.condition1IsTrue_1 = {val:false};
gdjs.RLGLMainCode.condition2IsTrue_1 = {val:false};
gdjs.RLGLMainCode.condition3IsTrue_1 = {val:false};
gdjs.RLGLMainCode.condition4IsTrue_1 = {val:false};
gdjs.RLGLMainCode.conditionTrue_2 = {val:false};
gdjs.RLGLMainCode.condition0IsTrue_2 = {val:false};
gdjs.RLGLMainCode.condition1IsTrue_2 = {val:false};
gdjs.RLGLMainCode.condition2IsTrue_2 = {val:false};
gdjs.RLGLMainCode.condition3IsTrue_2 = {val:false};
gdjs.RLGLMainCode.condition4IsTrue_2 = {val:false};


gdjs.RLGLMainCode.eventsList0 = function(runtimeScene) {

};gdjs.RLGLMainCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.RLGLMainCode.GDPlayer1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Red") ) {
        gdjs.RLGLMainCode.condition0IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer1Objects1[i].getY() <= 500 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer1Objects1[k] = gdjs.RLGLMainCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer1Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDP1LightObjects1 */
/* Reuse gdjs.RLGLMainCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer1Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer1Objects1[i].getY() + (4));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].setY(gdjs.RLGLMainCode.GDP1LightObjects1[i].getY() + (4));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].setColor("208;2;27");
}
}}

}


};gdjs.RLGLMainCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.RLGLMainCode.GDPlayer2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Red") ) {
        gdjs.RLGLMainCode.condition0IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer2Objects1[i].getY() <= 500 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer2Objects1[k] = gdjs.RLGLMainCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer2Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDP2LightObjects1 */
/* Reuse gdjs.RLGLMainCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer2Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer2Objects1[i].getY() + (4));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].setY(gdjs.RLGLMainCode.GDP2LightObjects1[i].getY() + (4));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].setColor("208;2;27");
}
}}

}


};gdjs.RLGLMainCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.RLGLMainCode.GDPlayer3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Red") ) {
        gdjs.RLGLMainCode.condition0IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer3Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer3Objects1[i].getY() <= 500 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer3Objects1[k] = gdjs.RLGLMainCode.GDPlayer3Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer3Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDP3LightObjects1 */
/* Reuse gdjs.RLGLMainCode.GDPlayer3Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer3Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer3Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer3Objects1[i].getY() + (4));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].setY(gdjs.RLGLMainCode.GDP3LightObjects1[i].getY() + (4));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].setColor("208;2;27");
}
}}

}


};gdjs.RLGLMainCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.RLGLMainCode.GDPlayer4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Red") ) {
        gdjs.RLGLMainCode.condition0IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer4Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer4Objects1[i].getY() <= 500 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer4Objects1[k] = gdjs.RLGLMainCode.GDPlayer4Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer4Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDP4LightObjects1 */
/* Reuse gdjs.RLGLMainCode.GDPlayer4Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer4Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer4Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer4Objects1[i].getY() + (4));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].setY(gdjs.RLGLMainCode.GDP4LightObjects1[i].getY() + (4));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].setColor("208;2;27");
}
}}

}


};gdjs.RLGLMainCode.eventsList5 = function(runtimeScene) {

};gdjs.RLGLMainCode.eventsList6 = function(runtimeScene) {

{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StageTimer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 3;
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDTrafficLightObjects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDTrafficLightObjects1[i].setAnimationName("Green");
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(3, 5));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageTimer");
}}

}


};gdjs.RLGLMainCode.eventsList7 = function(runtimeScene) {

{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StageTimer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1;
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
/* Reuse gdjs.RLGLMainCode.GDTrafficLightObjects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDTrafficLightObjects1[i].setAnimationName("Red");
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.RLGLMainCode.eventsList8 = function(runtimeScene) {

};gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects = Hashtable.newFrom({"Earth": gdjs.RLGLMainCode.GDEarthObjects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer1Objects2Objects = Hashtable.newFrom({"Player1": gdjs.RLGLMainCode.GDPlayer1Objects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects = Hashtable.newFrom({"Earth": gdjs.RLGLMainCode.GDEarthObjects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer2Objects2Objects = Hashtable.newFrom({"Player2": gdjs.RLGLMainCode.GDPlayer2Objects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects = Hashtable.newFrom({"Earth": gdjs.RLGLMainCode.GDEarthObjects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer3Objects2Objects = Hashtable.newFrom({"Player3": gdjs.RLGLMainCode.GDPlayer3Objects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects = Hashtable.newFrom({"Earth": gdjs.RLGLMainCode.GDEarthObjects2});
gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer4Objects2Objects = Hashtable.newFrom({"Player4": gdjs.RLGLMainCode.GDPlayer4Objects2});
gdjs.RLGLMainCode.userFunc0x993660 = function(runtimeScene) {
"use strict";

// Get the raw gdjs player score array
const playerScoreArray = runtimeScene.getVariables().get('distance').getAllChildrenArray()
// Map it to a workable array of numbers
const playerScoreValues = playerScoreArray.map((arrayValue) => arrayValue.getAsNumber())

let playerScoresWithNames = [
    ['p1', playerScoreValues[0]],
    ['p2', playerScoreValues[1]],
    ['p3', playerScoreValues[2]],
    ['p4', playerScoreValues[3]]
]

playerScoresWithNames = playerScoresWithNames.sort((a, b) => {
    if (a[1] > b[1]) {
        return 1
    } else {
        return -1
    }
})

console.log(playerScoresWithNames)

const firstplace = runtimeScene.getGame().getVariables().get(playerScoresWithNames[0][0] + "_global")
firstplace.setNumber(firstplace.getValue() + 3)
const secondplace = runtimeScene.getGame().getVariables().get(playerScoresWithNames[1][0]+ "_global")
secondplace.setNumber(secondplace.getValue() + 2)
const thirdplace = runtimeScene.getGame().getVariables().get(playerScoresWithNames[2][0] + "_global")
thirdplace.setNumber(thirdplace.getValue() + 1)

};
gdjs.RLGLMainCode.eventsList9 = function(runtimeScene) {

{


gdjs.RLGLMainCode.userFunc0x993660(runtimeScene);

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TransitionScreen", false);
}}

}


};gdjs.RLGLMainCode.eventsList10 = function(runtimeScene) {

{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11098020);
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RLGLMainCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.RLGLMainCode.eventsList11 = function(runtimeScene) {

{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P1Light"), gdjs.RLGLMainCode.GDP1LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P2Light"), gdjs.RLGLMainCode.GDP2LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P3Light"), gdjs.RLGLMainCode.GDP3LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P4Light"), gdjs.RLGLMainCode.GDP4LightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameDurationTimer");
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


{


gdjs.RLGLMainCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RLGLMainCode.GDPlayer1Objects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_2 = gdjs.RLGLMainCode.condition0IsTrue_1;
gdjs.RLGLMainCode.condition0IsTrue_2.val = false;
gdjs.RLGLMainCode.condition1IsTrue_2.val = false;
gdjs.RLGLMainCode.condition2IsTrue_2.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if( gdjs.RLGLMainCode.condition0IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
}
}
}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer1Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer1Objects1[i].getY() <= 510 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer1Objects1[k] = gdjs.RLGLMainCode.GDPlayer1Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer1Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P1Light"), gdjs.RLGLMainCode.GDP1LightObjects1);
/* Reuse gdjs.RLGLMainCode.GDPlayer1Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer1Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer1Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer1Objects1[i].getY() - (1));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].setY(gdjs.RLGLMainCode.GDP1LightObjects1[i].getY() - (1));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
gdjs.RLGLMainCode.condition2IsTrue_1.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P1Light"), gdjs.RLGLMainCode.GDP1LightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RLGLMainCode.GDPlayer2Objects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_2 = gdjs.RLGLMainCode.condition0IsTrue_1;
gdjs.RLGLMainCode.condition0IsTrue_2.val = false;
gdjs.RLGLMainCode.condition1IsTrue_2.val = false;
gdjs.RLGLMainCode.condition2IsTrue_2.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
if( gdjs.RLGLMainCode.condition0IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 2, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
}
}
}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer2Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer2Objects1[i].getY() <= 510 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer2Objects1[k] = gdjs.RLGLMainCode.GDPlayer2Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer2Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P2Light"), gdjs.RLGLMainCode.GDP2LightObjects1);
/* Reuse gdjs.RLGLMainCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer2Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer2Objects1[i].getY() - (1));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].setY(gdjs.RLGLMainCode.GDP2LightObjects1[i].getY() - (1));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
gdjs.RLGLMainCode.condition2IsTrue_1.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "l");
if( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 2, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 2, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P2Light"), gdjs.RLGLMainCode.GDP2LightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player3"), gdjs.RLGLMainCode.GDPlayer3Objects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_2 = gdjs.RLGLMainCode.condition0IsTrue_1;
gdjs.RLGLMainCode.condition0IsTrue_2.val = false;
gdjs.RLGLMainCode.condition1IsTrue_2.val = false;
gdjs.RLGLMainCode.condition2IsTrue_2.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if( gdjs.RLGLMainCode.condition0IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 3, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
}
}
}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer3Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer3Objects1[i].getY() <= 510 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer3Objects1[k] = gdjs.RLGLMainCode.GDPlayer3Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer3Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P3Light"), gdjs.RLGLMainCode.GDP3LightObjects1);
/* Reuse gdjs.RLGLMainCode.GDPlayer3Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer3Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer3Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer3Objects1[i].getY() - (1));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].setY(gdjs.RLGLMainCode.GDP3LightObjects1[i].getY() - (1));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
gdjs.RLGLMainCode.condition2IsTrue_1.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "v");
if( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 3, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 3, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P3Light"), gdjs.RLGLMainCode.GDP3LightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player4"), gdjs.RLGLMainCode.GDPlayer4Objects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_2 = gdjs.RLGLMainCode.condition0IsTrue_1;
gdjs.RLGLMainCode.condition0IsTrue_2.val = false;
gdjs.RLGLMainCode.condition1IsTrue_2.val = false;
gdjs.RLGLMainCode.condition2IsTrue_2.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_2.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
if( gdjs.RLGLMainCode.condition0IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_2.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 4, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_2.val ) {
    gdjs.RLGLMainCode.conditionTrue_2.val = true;
}
}
{
}
}
}if ( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDPlayer4Objects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDPlayer4Objects1[i].getY() <= 510 ) {
        gdjs.RLGLMainCode.condition1IsTrue_1.val = true;
        gdjs.RLGLMainCode.GDPlayer4Objects1[k] = gdjs.RLGLMainCode.GDPlayer4Objects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDPlayer4Objects1.length = k;}}
gdjs.RLGLMainCode.conditionTrue_1.val = true && gdjs.RLGLMainCode.condition0IsTrue_1.val && gdjs.RLGLMainCode.condition1IsTrue_1.val;
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P4Light"), gdjs.RLGLMainCode.GDP4LightObjects1);
/* Reuse gdjs.RLGLMainCode.GDPlayer4Objects1 */
{for(var i = 0, len = gdjs.RLGLMainCode.GDPlayer4Objects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDPlayer4Objects1[i].setY(gdjs.RLGLMainCode.GDPlayer4Objects1[i].getY() - (1));
}
for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].setY(gdjs.RLGLMainCode.GDP4LightObjects1[i].getY() - (1));
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
gdjs.RLGLMainCode.condition2IsTrue_1.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_1.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
if( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 4, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition1IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
gdjs.RLGLMainCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 4, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.RLGLMainCode.condition2IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("P4Light"), gdjs.RLGLMainCode.GDP4LightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].hide();
}
}}

}


{


gdjs.RLGLMainCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Green") ) {
        gdjs.RLGLMainCode.condition0IsTrue_0.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActionText"), gdjs.RLGLMainCode.GDActionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLight"), gdjs.RLGLMainCode.GDGreenLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P1Light"), gdjs.RLGLMainCode.GDP1LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P2Light"), gdjs.RLGLMainCode.GDP2LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P3Light"), gdjs.RLGLMainCode.GDP3LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("P4Light"), gdjs.RLGLMainCode.GDP4LightObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLight"), gdjs.RLGLMainCode.GDRedLightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDGreenLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDGreenLightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDRedLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDRedLightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP1LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP1LightObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP2LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP2LightObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP3LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP3LightObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDP4LightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDP4LightObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDActionTextObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDActionTextObjects1[i].setString("GO!");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Idle") ) {
        gdjs.RLGLMainCode.condition0IsTrue_0.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActionText"), gdjs.RLGLMainCode.GDActionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLight"), gdjs.RLGLMainCode.GDGreenLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLight"), gdjs.RLGLMainCode.GDRedLightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDRedLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDRedLightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDGreenLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDGreenLightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDActionTextObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDActionTextObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);

gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RLGLMainCode.GDTrafficLightObjects1.length;i<l;++i) {
    if ( gdjs.RLGLMainCode.GDTrafficLightObjects1[i].isCurrentAnimationName("Red") ) {
        gdjs.RLGLMainCode.condition0IsTrue_0.val = true;
        gdjs.RLGLMainCode.GDTrafficLightObjects1[k] = gdjs.RLGLMainCode.GDTrafficLightObjects1[i];
        ++k;
    }
}
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = k;}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ActionText"), gdjs.RLGLMainCode.GDActionTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenLight"), gdjs.RLGLMainCode.GDGreenLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("RedLight"), gdjs.RLGLMainCode.GDRedLightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDRedLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDRedLightObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDGreenLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDGreenLightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RLGLMainCode.GDActionTextObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDActionTextObjects1[i].setString("STOP");
}
}}

}


{



}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RLGLMainCode.GDPlayer1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RLGLMainCode.GDPlayer2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player3"), gdjs.RLGLMainCode.GDPlayer3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player4"), gdjs.RLGLMainCode.GDPlayer4Objects1);
gdjs.copyArray(runtimeScene.getObjects("SceneTimerTextDebug"), gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects1);
gdjs.copyArray(runtimeScene.getObjects("debugtext"), gdjs.RLGLMainCode.GDdebugtextObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "StageTimer")));
}
}{runtimeScene.getVariables().getFromIndex(1).getChild(0).setNumber((( gdjs.RLGLMainCode.GDPlayer1Objects1.length === 0 ) ? 0 :gdjs.RLGLMainCode.GDPlayer1Objects1[0].getPointY("")));
}{runtimeScene.getVariables().getFromIndex(1).getChild(3).setNumber((( gdjs.RLGLMainCode.GDPlayer4Objects1.length === 0 ) ? 0 :gdjs.RLGLMainCode.GDPlayer4Objects1[0].getPointY("")));
}{runtimeScene.getVariables().getFromIndex(1).getChild(2).setNumber((( gdjs.RLGLMainCode.GDPlayer3Objects1.length === 0 ) ? 0 :gdjs.RLGLMainCode.GDPlayer3Objects1[0].getPointY("")));
}{runtimeScene.getVariables().getFromIndex(1).getChild(1).setNumber((( gdjs.RLGLMainCode.GDPlayer2Objects1.length === 0 ) ? 0 :gdjs.RLGLMainCode.GDPlayer2Objects1[0].getPointY("")));
}{for(var i = 0, len = gdjs.RLGLMainCode.GDdebugtextObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDdebugtextObjects1[i].setString(gdjs.evtsExt__ArrayTools__Join.func(runtimeScene, "distance", "-", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDTrafficLightObjects1[i].setAnimationName("Green");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StageTimer");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.randomFloatInRange(3, 5));
}}

}


{


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLMainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "StageTimer") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs.RLGLMainCode.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs.RLGLMainCode.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs.RLGLMainCode.GDTrafficLightObjects1[i].setAnimationName("Idle");
}
}
{ //Subevents
gdjs.RLGLMainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.RLGLMainCode.eventsList8(runtimeScene);
}


{



}


{



}


{



}


{



}


{

gdjs.RLGLMainCode.GDEarthObjects1.length = 0;

gdjs.RLGLMainCode.GDPlayer1Objects1.length = 0;

gdjs.RLGLMainCode.GDPlayer2Objects1.length = 0;

gdjs.RLGLMainCode.GDPlayer3Objects1.length = 0;

gdjs.RLGLMainCode.GDPlayer4Objects1.length = 0;


gdjs.RLGLMainCode.condition0IsTrue_0.val = false;
{
{gdjs.RLGLMainCode.conditionTrue_1 = gdjs.RLGLMainCode.condition0IsTrue_0;
gdjs.RLGLMainCode.GDEarthObjects1_1final.length = 0;gdjs.RLGLMainCode.GDPlayer1Objects1_1final.length = 0;gdjs.RLGLMainCode.GDPlayer2Objects1_1final.length = 0;gdjs.RLGLMainCode.GDPlayer3Objects1_1final.length = 0;gdjs.RLGLMainCode.GDPlayer4Objects1_1final.length = 0;gdjs.RLGLMainCode.condition0IsTrue_1.val = false;
gdjs.RLGLMainCode.condition1IsTrue_1.val = false;
gdjs.RLGLMainCode.condition2IsTrue_1.val = false;
gdjs.RLGLMainCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.RLGLMainCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player1"), gdjs.RLGLMainCode.GDPlayer1Objects2);
gdjs.RLGLMainCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects, gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer1Objects2Objects, false, runtimeScene, false);
if( gdjs.RLGLMainCode.condition0IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDEarthObjects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDEarthObjects1_1final.indexOf(gdjs.RLGLMainCode.GDEarthObjects2[j]) === -1 )
            gdjs.RLGLMainCode.GDEarthObjects1_1final.push(gdjs.RLGLMainCode.GDEarthObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDPlayer1Objects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDPlayer1Objects1_1final.indexOf(gdjs.RLGLMainCode.GDPlayer1Objects2[j]) === -1 )
            gdjs.RLGLMainCode.GDPlayer1Objects1_1final.push(gdjs.RLGLMainCode.GDPlayer1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.RLGLMainCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.RLGLMainCode.GDPlayer2Objects2);
gdjs.RLGLMainCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects, gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer2Objects2Objects, false, runtimeScene, false);
if( gdjs.RLGLMainCode.condition1IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDEarthObjects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDEarthObjects1_1final.indexOf(gdjs.RLGLMainCode.GDEarthObjects2[j]) === -1 )
            gdjs.RLGLMainCode.GDEarthObjects1_1final.push(gdjs.RLGLMainCode.GDEarthObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDPlayer2Objects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDPlayer2Objects1_1final.indexOf(gdjs.RLGLMainCode.GDPlayer2Objects2[j]) === -1 )
            gdjs.RLGLMainCode.GDPlayer2Objects1_1final.push(gdjs.RLGLMainCode.GDPlayer2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.RLGLMainCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player3"), gdjs.RLGLMainCode.GDPlayer3Objects2);
gdjs.RLGLMainCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects, gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer3Objects2Objects, false, runtimeScene, false);
if( gdjs.RLGLMainCode.condition2IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDEarthObjects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDEarthObjects1_1final.indexOf(gdjs.RLGLMainCode.GDEarthObjects2[j]) === -1 )
            gdjs.RLGLMainCode.GDEarthObjects1_1final.push(gdjs.RLGLMainCode.GDEarthObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDPlayer3Objects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDPlayer3Objects1_1final.indexOf(gdjs.RLGLMainCode.GDPlayer3Objects2[j]) === -1 )
            gdjs.RLGLMainCode.GDPlayer3Objects1_1final.push(gdjs.RLGLMainCode.GDPlayer3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Earth"), gdjs.RLGLMainCode.GDEarthObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player4"), gdjs.RLGLMainCode.GDPlayer4Objects2);
gdjs.RLGLMainCode.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDEarthObjects2Objects, gdjs.RLGLMainCode.mapOfGDgdjs_46RLGLMainCode_46GDPlayer4Objects2Objects, false, runtimeScene, false);
if( gdjs.RLGLMainCode.condition3IsTrue_1.val ) {
    gdjs.RLGLMainCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDEarthObjects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDEarthObjects1_1final.indexOf(gdjs.RLGLMainCode.GDEarthObjects2[j]) === -1 )
            gdjs.RLGLMainCode.GDEarthObjects1_1final.push(gdjs.RLGLMainCode.GDEarthObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.RLGLMainCode.GDPlayer4Objects2.length;j<jLen;++j) {
        if ( gdjs.RLGLMainCode.GDPlayer4Objects1_1final.indexOf(gdjs.RLGLMainCode.GDPlayer4Objects2[j]) === -1 )
            gdjs.RLGLMainCode.GDPlayer4Objects1_1final.push(gdjs.RLGLMainCode.GDPlayer4Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.RLGLMainCode.GDEarthObjects1_1final, gdjs.RLGLMainCode.GDEarthObjects1);
gdjs.copyArray(gdjs.RLGLMainCode.GDPlayer1Objects1_1final, gdjs.RLGLMainCode.GDPlayer1Objects1);
gdjs.copyArray(gdjs.RLGLMainCode.GDPlayer2Objects1_1final, gdjs.RLGLMainCode.GDPlayer2Objects1);
gdjs.copyArray(gdjs.RLGLMainCode.GDPlayer3Objects1_1final, gdjs.RLGLMainCode.GDPlayer3Objects1);
gdjs.copyArray(gdjs.RLGLMainCode.GDPlayer4Objects1_1final, gdjs.RLGLMainCode.GDPlayer4Objects1);
}
}
}if (gdjs.RLGLMainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RLGLMainCode.eventsList10(runtimeScene);} //End of subevents
}

}


};

gdjs.RLGLMainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RLGLMainCode.GDp1Objects1.length = 0;
gdjs.RLGLMainCode.GDp1Objects2.length = 0;
gdjs.RLGLMainCode.GDp2Objects1.length = 0;
gdjs.RLGLMainCode.GDp2Objects2.length = 0;
gdjs.RLGLMainCode.GDp3Objects1.length = 0;
gdjs.RLGLMainCode.GDp3Objects2.length = 0;
gdjs.RLGLMainCode.GDp4Objects1.length = 0;
gdjs.RLGLMainCode.GDp4Objects2.length = 0;
gdjs.RLGLMainCode.GDsprite_95crossObjects1.length = 0;
gdjs.RLGLMainCode.GDsprite_95crossObjects2.length = 0;
gdjs.RLGLMainCode.GDsprite_95aObjects1.length = 0;
gdjs.RLGLMainCode.GDsprite_95aObjects2.length = 0;
gdjs.RLGLMainCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.RLGLMainCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.RLGLMainCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.RLGLMainCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.RLGLMainCode.GDEarthObjects1.length = 0;
gdjs.RLGLMainCode.GDEarthObjects2.length = 0;
gdjs.RLGLMainCode.GDPlayer1Objects1.length = 0;
gdjs.RLGLMainCode.GDPlayer1Objects2.length = 0;
gdjs.RLGLMainCode.GDP1LightObjects1.length = 0;
gdjs.RLGLMainCode.GDP1LightObjects2.length = 0;
gdjs.RLGLMainCode.GDPlayer2Objects1.length = 0;
gdjs.RLGLMainCode.GDPlayer2Objects2.length = 0;
gdjs.RLGLMainCode.GDP2LightObjects1.length = 0;
gdjs.RLGLMainCode.GDP2LightObjects2.length = 0;
gdjs.RLGLMainCode.GDPlayer3Objects1.length = 0;
gdjs.RLGLMainCode.GDPlayer3Objects2.length = 0;
gdjs.RLGLMainCode.GDP3LightObjects1.length = 0;
gdjs.RLGLMainCode.GDP3LightObjects2.length = 0;
gdjs.RLGLMainCode.GDPlayer4Objects1.length = 0;
gdjs.RLGLMainCode.GDPlayer4Objects2.length = 0;
gdjs.RLGLMainCode.GDP4LightObjects1.length = 0;
gdjs.RLGLMainCode.GDP4LightObjects2.length = 0;
gdjs.RLGLMainCode.GDTrafficLightObjects1.length = 0;
gdjs.RLGLMainCode.GDTrafficLightObjects2.length = 0;
gdjs.RLGLMainCode.GDRedLightObjects1.length = 0;
gdjs.RLGLMainCode.GDRedLightObjects2.length = 0;
gdjs.RLGLMainCode.GDGreenLightObjects1.length = 0;
gdjs.RLGLMainCode.GDGreenLightObjects2.length = 0;
gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects1.length = 0;
gdjs.RLGLMainCode.GDSceneTimerTextDebugObjects2.length = 0;
gdjs.RLGLMainCode.GDActionTextObjects1.length = 0;
gdjs.RLGLMainCode.GDActionTextObjects2.length = 0;
gdjs.RLGLMainCode.GDdebugtextObjects1.length = 0;
gdjs.RLGLMainCode.GDdebugtextObjects2.length = 0;

gdjs.RLGLMainCode.eventsList11(runtimeScene);
return;

}

gdjs['RLGLMainCode'] = gdjs.RLGLMainCode;
