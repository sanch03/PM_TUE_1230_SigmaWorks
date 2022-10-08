gdjs.ButtonMasherCountdownCode = {};
gdjs.ButtonMasherCountdownCode.repeatCount2 = 0;

gdjs.ButtonMasherCountdownCode.repeatIndex2 = 0;

gdjs.ButtonMasherCountdownCode.GDp1Objects1= [];
gdjs.ButtonMasherCountdownCode.GDp1Objects2= [];
gdjs.ButtonMasherCountdownCode.GDp1Objects3= [];
gdjs.ButtonMasherCountdownCode.GDp1Objects4= [];
gdjs.ButtonMasherCountdownCode.GDp1Objects5= [];
gdjs.ButtonMasherCountdownCode.GDp2Objects1= [];
gdjs.ButtonMasherCountdownCode.GDp2Objects2= [];
gdjs.ButtonMasherCountdownCode.GDp2Objects3= [];
gdjs.ButtonMasherCountdownCode.GDp2Objects4= [];
gdjs.ButtonMasherCountdownCode.GDp2Objects5= [];
gdjs.ButtonMasherCountdownCode.GDp3Objects1= [];
gdjs.ButtonMasherCountdownCode.GDp3Objects2= [];
gdjs.ButtonMasherCountdownCode.GDp3Objects3= [];
gdjs.ButtonMasherCountdownCode.GDp3Objects4= [];
gdjs.ButtonMasherCountdownCode.GDp3Objects5= [];
gdjs.ButtonMasherCountdownCode.GDp4Objects1= [];
gdjs.ButtonMasherCountdownCode.GDp4Objects2= [];
gdjs.ButtonMasherCountdownCode.GDp4Objects3= [];
gdjs.ButtonMasherCountdownCode.GDp4Objects4= [];
gdjs.ButtonMasherCountdownCode.GDp4Objects5= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects1= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects2= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects3= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects4= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects5= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects1= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects2= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects3= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects4= [];
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects5= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects1= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects2= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects3= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects4= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects5= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects1= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects2= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects3= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects4= [];
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects5= [];
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects1= [];
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects2= [];
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects3= [];
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects4= [];
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects5= [];
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects1= [];
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects2= [];
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects3= [];
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects4= [];
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects5= [];

gdjs.ButtonMasherCountdownCode.conditionTrue_0 = {val:false};
gdjs.ButtonMasherCountdownCode.condition0IsTrue_0 = {val:false};
gdjs.ButtonMasherCountdownCode.condition1IsTrue_0 = {val:false};


gdjs.ButtonMasherCountdownCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val = false;
{
gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "main") >= 10;
}if (gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "main");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ButtonMasherMain", false);
}}

}


};gdjs.ButtonMasherCountdownCode.asyncCallback10922260 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.ButtonMasherCountdownCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.ButtonMasherCountdownCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.ButtonMasherCountdownCode.asyncCallback10922260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.ButtonMasherCountdownCode.eventsList2 = function(runtimeScene) {

{


gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val = false;
{
gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ButtonMasherCountdownCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CountdownTime"), gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "main");
}{for(var i = 0, len = gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects1.length ;i < len;++i) {
    gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "main") - 10))));
}
}}

}


{


gdjs.ButtonMasherCountdownCode.repeatCount2 = 10;
for(gdjs.ButtonMasherCountdownCode.repeatIndex2 = 0;gdjs.ButtonMasherCountdownCode.repeatIndex2 < gdjs.ButtonMasherCountdownCode.repeatCount2;++gdjs.ButtonMasherCountdownCode.repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("CountdownTime"), gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects2);

if (true)
{
{for(var i = 0, len = gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects2.length ;i < len;++i) {
    gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects2[i].setString(gdjs.evtTools.common.toString(Math.round(Math.abs(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "main") - 10))));
}
}
{ //Subevents: 
gdjs.ButtonMasherCountdownCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


};

gdjs.ButtonMasherCountdownCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ButtonMasherCountdownCode.GDp1Objects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDp1Objects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDp1Objects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDp1Objects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDp1Objects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDp2Objects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDp2Objects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDp2Objects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDp2Objects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDp2Objects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDp3Objects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDp3Objects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDp3Objects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDp3Objects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDp3Objects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDp4Objects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDp4Objects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDp4Objects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDp4Objects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDp4Objects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95crossObjects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDsprite_95aObjects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95keysdevObjects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDtxt_95controlsslashObjects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownIntroLabelObjects5.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects1.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects2.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects3.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects4.length = 0;
gdjs.ButtonMasherCountdownCode.GDCountdownTimeObjects5.length = 0;

gdjs.ButtonMasherCountdownCode.eventsList2(runtimeScene);
return;

}

gdjs['ButtonMasherCountdownCode'] = gdjs.ButtonMasherCountdownCode;
