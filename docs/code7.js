gdjs.RLGLEndCode = {};
gdjs.RLGLEndCode.GDp1Objects1= [];
gdjs.RLGLEndCode.GDp1Objects2= [];
gdjs.RLGLEndCode.GDp2Objects1= [];
gdjs.RLGLEndCode.GDp2Objects2= [];
gdjs.RLGLEndCode.GDp3Objects1= [];
gdjs.RLGLEndCode.GDp3Objects2= [];
gdjs.RLGLEndCode.GDp4Objects1= [];
gdjs.RLGLEndCode.GDp4Objects2= [];
gdjs.RLGLEndCode.GDsprite_95crossObjects1= [];
gdjs.RLGLEndCode.GDsprite_95crossObjects2= [];
gdjs.RLGLEndCode.GDsprite_95aObjects1= [];
gdjs.RLGLEndCode.GDsprite_95aObjects2= [];
gdjs.RLGLEndCode.GDtxt_95keysdevObjects1= [];
gdjs.RLGLEndCode.GDtxt_95keysdevObjects2= [];
gdjs.RLGLEndCode.GDtxt_95controlsslashObjects1= [];
gdjs.RLGLEndCode.GDtxt_95controlsslashObjects2= [];
gdjs.RLGLEndCode.GDGameOverTextObjects1= [];
gdjs.RLGLEndCode.GDGameOverTextObjects2= [];
gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects1= [];
gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects2= [];
gdjs.RLGLEndCode.GDWinnerLabelObjects1= [];
gdjs.RLGLEndCode.GDWinnerLabelObjects2= [];
gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1= [];
gdjs.RLGLEndCode.GDWinnerPlayerIDObjects2= [];
gdjs.RLGLEndCode.GDScoreLabelObjects1= [];
gdjs.RLGLEndCode.GDScoreLabelObjects2= [];
gdjs.RLGLEndCode.GDScoreLabelTextObjects1= [];
gdjs.RLGLEndCode.GDScoreLabelTextObjects2= [];

gdjs.RLGLEndCode.conditionTrue_0 = {val:false};
gdjs.RLGLEndCode.condition0IsTrue_0 = {val:false};
gdjs.RLGLEndCode.condition1IsTrue_0 = {val:false};


gdjs.RLGLEndCode.asyncCallback11159924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TransitionScreen", false);
}}
gdjs.RLGLEndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.RLGLEndCode.asyncCallback11159924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.RLGLEndCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.RLGLEndCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RLGLEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreLabelText"), gdjs.RLGLEndCode.GDScoreLabelTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinnerPlayerID"), gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1);
{for(var i = 0, len = gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1[i].setString("Player ");
}
}{for(var i = 0, len = gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1[i].setString(gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1[i].getString() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("RLGLWinner")))));
}
}{for(var i = 0, len = gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1[i].setString(gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1[i].getString() + ("!"));
}
}{for(var i = 0, len = gdjs.RLGLEndCode.GDScoreLabelTextObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDScoreLabelTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("RLGLTimer")), 2)));
}
}{for(var i = 0, len = gdjs.RLGLEndCode.GDScoreLabelTextObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDScoreLabelTextObjects1[i].setString(gdjs.RLGLEndCode.GDScoreLabelTextObjects1[i].getString() + ("s"));
}
}}

}


{



}


{


gdjs.RLGLEndCode.condition0IsTrue_0.val = false;
{
gdjs.RLGLEndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RLGLEndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DynamicWinnerSprite"), gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects1);
{for(var i = 0, len = gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects1.length ;i < len;++i) {
    gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects1[i].setAnimation(gdjs.evtTools.common.toNumber(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("RLGLWinner")))) - 1);
}
}
{ //Subevents
gdjs.RLGLEndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.RLGLEndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RLGLEndCode.GDp1Objects1.length = 0;
gdjs.RLGLEndCode.GDp1Objects2.length = 0;
gdjs.RLGLEndCode.GDp2Objects1.length = 0;
gdjs.RLGLEndCode.GDp2Objects2.length = 0;
gdjs.RLGLEndCode.GDp3Objects1.length = 0;
gdjs.RLGLEndCode.GDp3Objects2.length = 0;
gdjs.RLGLEndCode.GDp4Objects1.length = 0;
gdjs.RLGLEndCode.GDp4Objects2.length = 0;
gdjs.RLGLEndCode.GDsprite_95crossObjects1.length = 0;
gdjs.RLGLEndCode.GDsprite_95crossObjects2.length = 0;
gdjs.RLGLEndCode.GDsprite_95aObjects1.length = 0;
gdjs.RLGLEndCode.GDsprite_95aObjects2.length = 0;
gdjs.RLGLEndCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.RLGLEndCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.RLGLEndCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.RLGLEndCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.RLGLEndCode.GDGameOverTextObjects1.length = 0;
gdjs.RLGLEndCode.GDGameOverTextObjects2.length = 0;
gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects1.length = 0;
gdjs.RLGLEndCode.GDDynamicWinnerSpriteObjects2.length = 0;
gdjs.RLGLEndCode.GDWinnerLabelObjects1.length = 0;
gdjs.RLGLEndCode.GDWinnerLabelObjects2.length = 0;
gdjs.RLGLEndCode.GDWinnerPlayerIDObjects1.length = 0;
gdjs.RLGLEndCode.GDWinnerPlayerIDObjects2.length = 0;
gdjs.RLGLEndCode.GDScoreLabelObjects1.length = 0;
gdjs.RLGLEndCode.GDScoreLabelObjects2.length = 0;
gdjs.RLGLEndCode.GDScoreLabelTextObjects1.length = 0;
gdjs.RLGLEndCode.GDScoreLabelTextObjects2.length = 0;

gdjs.RLGLEndCode.eventsList1(runtimeScene);
return;

}

gdjs['RLGLEndCode'] = gdjs.RLGLEndCode;
