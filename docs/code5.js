gdjs.ButtonMasherEndCode = {};
gdjs.ButtonMasherEndCode.GDp1Objects1= [];
gdjs.ButtonMasherEndCode.GDp1Objects2= [];
gdjs.ButtonMasherEndCode.GDp2Objects1= [];
gdjs.ButtonMasherEndCode.GDp2Objects2= [];
gdjs.ButtonMasherEndCode.GDp3Objects1= [];
gdjs.ButtonMasherEndCode.GDp3Objects2= [];
gdjs.ButtonMasherEndCode.GDp4Objects1= [];
gdjs.ButtonMasherEndCode.GDp4Objects2= [];
gdjs.ButtonMasherEndCode.GDsprite_95crossObjects1= [];
gdjs.ButtonMasherEndCode.GDsprite_95crossObjects2= [];
gdjs.ButtonMasherEndCode.GDsprite_95aObjects1= [];
gdjs.ButtonMasherEndCode.GDsprite_95aObjects2= [];
gdjs.ButtonMasherEndCode.GDtxt_95keysdevObjects1= [];
gdjs.ButtonMasherEndCode.GDtxt_95keysdevObjects2= [];
gdjs.ButtonMasherEndCode.GDtxt_95controlsslashObjects1= [];
gdjs.ButtonMasherEndCode.GDtxt_95controlsslashObjects2= [];
gdjs.ButtonMasherEndCode.GDGameOverTextObjects1= [];
gdjs.ButtonMasherEndCode.GDGameOverTextObjects2= [];
gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects1= [];
gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects2= [];
gdjs.ButtonMasherEndCode.GDWinnerLabelObjects1= [];
gdjs.ButtonMasherEndCode.GDWinnerLabelObjects2= [];
gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1= [];
gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects2= [];
gdjs.ButtonMasherEndCode.GDScoreLabelObjects1= [];
gdjs.ButtonMasherEndCode.GDScoreLabelObjects2= [];
gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects1= [];
gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects2= [];

gdjs.ButtonMasherEndCode.conditionTrue_0 = {val:false};
gdjs.ButtonMasherEndCode.condition0IsTrue_0 = {val:false};
gdjs.ButtonMasherEndCode.condition1IsTrue_0 = {val:false};


gdjs.ButtonMasherEndCode.asyncCallback11104052 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TransitionScreen", false);
}}
gdjs.ButtonMasherEndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.ButtonMasherEndCode.asyncCallback11104052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ButtonMasherEndCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = false;
{
gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ButtonMasherEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WinnerPlayerID"), gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1);
{for(var i = 0, len = gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1[i].setString("Player ");
}
}{for(var i = 0, len = gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1[i].setString(gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1[i].getString() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1[i].setString(gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1[i].getString() + ("!"));
}
}}

}


{


gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = false;
{
gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ButtonMasherEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreLabelText"), gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects1);
{for(var i = 0, len = gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{



}


{


gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = false;
{
gdjs.ButtonMasherEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ButtonMasherEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DynamicWinnerSprite"), gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects1);
{for(var i = 0, len = gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects1[i].setAnimation(gdjs.evtTools.common.toNumber(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))) - 1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}
{ //Subevents
gdjs.ButtonMasherEndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ButtonMasherEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ButtonMasherEndCode.GDp1Objects1.length = 0;
gdjs.ButtonMasherEndCode.GDp1Objects2.length = 0;
gdjs.ButtonMasherEndCode.GDp2Objects1.length = 0;
gdjs.ButtonMasherEndCode.GDp2Objects2.length = 0;
gdjs.ButtonMasherEndCode.GDp3Objects1.length = 0;
gdjs.ButtonMasherEndCode.GDp3Objects2.length = 0;
gdjs.ButtonMasherEndCode.GDp4Objects1.length = 0;
gdjs.ButtonMasherEndCode.GDp4Objects2.length = 0;
gdjs.ButtonMasherEndCode.GDsprite_95crossObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDsprite_95crossObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDsprite_95aObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDsprite_95aObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDGameOverTextObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDGameOverTextObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDDynamicWinnerSpriteObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDWinnerLabelObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDWinnerLabelObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDWinnerPlayerIDObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDScoreLabelObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDScoreLabelObjects2.length = 0;
gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects1.length = 0;
gdjs.ButtonMasherEndCode.GDScoreLabelTextObjects2.length = 0;

gdjs.ButtonMasherEndCode.eventsList1(runtimeScene);
return;

}

gdjs['ButtonMasherEndCode'] = gdjs.ButtonMasherEndCode;
