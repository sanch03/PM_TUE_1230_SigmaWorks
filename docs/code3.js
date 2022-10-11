gdjs.SigmasaysCode = {};
gdjs.SigmasaysCode.GDp1Objects1= [];
gdjs.SigmasaysCode.GDp1Objects2= [];
gdjs.SigmasaysCode.GDp1Objects3= [];
gdjs.SigmasaysCode.GDp2Objects1= [];
gdjs.SigmasaysCode.GDp2Objects2= [];
gdjs.SigmasaysCode.GDp2Objects3= [];
gdjs.SigmasaysCode.GDp3Objects1= [];
gdjs.SigmasaysCode.GDp3Objects2= [];
gdjs.SigmasaysCode.GDp3Objects3= [];
gdjs.SigmasaysCode.GDp4Objects1= [];
gdjs.SigmasaysCode.GDp4Objects2= [];
gdjs.SigmasaysCode.GDp4Objects3= [];
gdjs.SigmasaysCode.GDsprite_95crossObjects1= [];
gdjs.SigmasaysCode.GDsprite_95crossObjects2= [];
gdjs.SigmasaysCode.GDsprite_95crossObjects3= [];
gdjs.SigmasaysCode.GDsprite_95aObjects1= [];
gdjs.SigmasaysCode.GDsprite_95aObjects2= [];
gdjs.SigmasaysCode.GDsprite_95aObjects3= [];
gdjs.SigmasaysCode.GDtxt_95keysdevObjects1= [];
gdjs.SigmasaysCode.GDtxt_95keysdevObjects2= [];
gdjs.SigmasaysCode.GDtxt_95keysdevObjects3= [];
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects1= [];
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects2= [];
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects3= [];
gdjs.SigmasaysCode.GDcircleObjects1= [];
gdjs.SigmasaysCode.GDcircleObjects2= [];
gdjs.SigmasaysCode.GDcircleObjects3= [];
gdjs.SigmasaysCode.GDNewSpriteObjects1= [];
gdjs.SigmasaysCode.GDNewSpriteObjects2= [];
gdjs.SigmasaysCode.GDNewSpriteObjects3= [];
gdjs.SigmasaysCode.GDp1healthObjects1= [];
gdjs.SigmasaysCode.GDp1healthObjects2= [];
gdjs.SigmasaysCode.GDp1healthObjects3= [];
gdjs.SigmasaysCode.GDp2healthObjects1= [];
gdjs.SigmasaysCode.GDp2healthObjects2= [];
gdjs.SigmasaysCode.GDp2healthObjects3= [];
gdjs.SigmasaysCode.GDp3healthObjects1= [];
gdjs.SigmasaysCode.GDp3healthObjects2= [];
gdjs.SigmasaysCode.GDp3healthObjects3= [];
gdjs.SigmasaysCode.GDp4healthObjects1= [];
gdjs.SigmasaysCode.GDp4healthObjects2= [];
gdjs.SigmasaysCode.GDp4healthObjects3= [];
gdjs.SigmasaysCode.GDNewTiledSpriteObjects1= [];
gdjs.SigmasaysCode.GDNewTiledSpriteObjects2= [];
gdjs.SigmasaysCode.GDNewTiledSpriteObjects3= [];
gdjs.SigmasaysCode.GDtile_95backgroundObjects1= [];
gdjs.SigmasaysCode.GDtile_95backgroundObjects2= [];
gdjs.SigmasaysCode.GDtile_95backgroundObjects3= [];
gdjs.SigmasaysCode.GDtxt_95devObjects1= [];
gdjs.SigmasaysCode.GDtxt_95devObjects2= [];
gdjs.SigmasaysCode.GDtxt_95devObjects3= [];

gdjs.SigmasaysCode.conditionTrue_0 = {val:false};
gdjs.SigmasaysCode.condition0IsTrue_0 = {val:false};
gdjs.SigmasaysCode.condition1IsTrue_0 = {val:false};
gdjs.SigmasaysCode.condition2IsTrue_0 = {val:false};
gdjs.SigmasaysCode.condition3IsTrue_0 = {val:false};
gdjs.SigmasaysCode.condition4IsTrue_0 = {val:false};
gdjs.SigmasaysCode.condition5IsTrue_0 = {val:false};
gdjs.SigmasaysCode.conditionTrue_1 = {val:false};
gdjs.SigmasaysCode.condition0IsTrue_1 = {val:false};
gdjs.SigmasaysCode.condition1IsTrue_1 = {val:false};
gdjs.SigmasaysCode.condition2IsTrue_1 = {val:false};
gdjs.SigmasaysCode.condition3IsTrue_1 = {val:false};
gdjs.SigmasaysCode.condition4IsTrue_1 = {val:false};
gdjs.SigmasaysCode.condition5IsTrue_1 = {val:false};


gdjs.SigmasaysCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.SigmasaysCode.GDcircleObjects2 */

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SigmasaysCode.GDcircleObjects2 */
{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects2[i].setAnimationFrame(5);
}
}}

}


};gdjs.SigmasaysCode.asyncCallback11012444 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);
{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects2[i].setAnimationFrame((gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame()) + 4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonclicktime");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}{gdjs.evtTools.debuggerTools.log("keypress wait" + gdjs.evtTools.common.toString((( gdjs.SigmasaysCode.GDcircleObjects2.length === 0 ) ? 0 :gdjs.SigmasaysCode.GDcircleObjects2[0].getAnimationFrame())), "", "");
}
{ //Subevents
gdjs.SigmasaysCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.SigmasaysCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 10)), (runtimeScene) => (gdjs.SigmasaysCode.asyncCallback11012444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SigmasaysCode.asyncCallback11017852 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects3);

{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects3.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects3.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects3[i].setAnimationFrame((gdjs.SigmasaysCode.GDcircleObjects3[i].getAnimationFrame()) + 4);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "buttonclicktime");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}{gdjs.evtTools.debuggerTools.log("keypress wait" + gdjs.evtTools.common.toString((( gdjs.SigmasaysCode.GDcircleObjects3.length === 0 ) ? 0 :gdjs.SigmasaysCode.GDcircleObjects3[0].getAnimationFrame())), "", "");
}}
gdjs.SigmasaysCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.SigmasaysCode.GDcircleObjects2) asyncObjectsList.addObject("circle", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(gdjs.randomInRange(1, 10)), (runtimeScene) => (gdjs.SigmasaysCode.asyncCallback11017852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SigmasaysCode.eventsList3 = function(runtimeScene) {

{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 0;
}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1000);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) != 0;
}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1000);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 0;
}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1000);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) != 0;
}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1000);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);
{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects2[i].playAnimation();
}
}
{ //Subevents
gdjs.SigmasaysCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SigmasaysCode.GDcircleObjects1 */
{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects1.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects1[i].setAnimationFrame(5);
}
}}

}


};gdjs.SigmasaysCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 6 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 7 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 8 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


};gdjs.SigmasaysCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 6 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 7 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 8 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


};gdjs.SigmasaysCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "h");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 6 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 7 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 8 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


};gdjs.SigmasaysCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "l");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 6 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects2);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects2.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects2[i].getAnimationFrame() == 7 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects2[k] = gdjs.SigmasaysCode.GDcircleObjects2[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects2.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 8 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "buttonclicktime"));
}}

}


};gdjs.SigmasaysCode.eventsList8 = function(runtimeScene) {

{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
gdjs.SigmasaysCode.condition3IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if ( gdjs.SigmasaysCode.condition2IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) != 0;
}}
}
}
if (gdjs.SigmasaysCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p1health"), gdjs.SigmasaysCode.GDp1healthObjects2);
{for(var i = 0, len = gdjs.SigmasaysCode.GDp1healthObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDp1healthObjects2[i].setWidth(gdjs.SigmasaysCode.GDp1healthObjects2[i].getWidth() - (32));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(5), true);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
gdjs.SigmasaysCode.condition3IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if ( gdjs.SigmasaysCode.condition2IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) != 0;
}}
}
}
if (gdjs.SigmasaysCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2health"), gdjs.SigmasaysCode.GDp2healthObjects2);
{for(var i = 0, len = gdjs.SigmasaysCode.GDp2healthObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDp2healthObjects2[i].setWidth(gdjs.SigmasaysCode.GDp2healthObjects2[i].getWidth() - (32));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(5), true);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
gdjs.SigmasaysCode.condition3IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if ( gdjs.SigmasaysCode.condition2IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) != 0;
}}
}
}
if (gdjs.SigmasaysCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p3health"), gdjs.SigmasaysCode.GDp3healthObjects2);
{for(var i = 0, len = gdjs.SigmasaysCode.GDp3healthObjects2.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDp3healthObjects2[i].setWidth(gdjs.SigmasaysCode.GDp3healthObjects2[i].getWidth() - (32));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(5), true);
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
gdjs.SigmasaysCode.condition3IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.SigmasaysCode.condition2IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) != 0;
}}
}
}
if (gdjs.SigmasaysCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p4health"), gdjs.SigmasaysCode.GDp4healthObjects1);
{for(var i = 0, len = gdjs.SigmasaysCode.GDp4healthObjects1.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDp4healthObjects1[i].setWidth(gdjs.SigmasaysCode.GDp4healthObjects1[i].getWidth() - (32));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(5), true);
}}

}


};gdjs.SigmasaysCode.userFunc0x95aac0 = function(runtimeScene) {
"use strict";
function gvar(variable){
    return runtimeScene.getVariables().get(variable).getAsString()
}
let scores = gvar('totals').split('')
scores.shift();

console.log(scores);
let first;
if (!scores.includes('1')){
    first = 1
} else if (!scores.includes('2')){
    first = 2
} else if (!scores.includes('3')){
    first = 3
} else if (!scores.includes('4')){
    first = 4
}

let globalvar = runtimeScene.getGame().getVariables().get("p"+first+"_global")
globalvar.setNumber(globalvar.getAsNumber()+3)
console.log("First ="+(first));

let second = scores[2]
globalvar = runtimeScene.getGame().getVariables().get("p"+second+"_global")
globalvar.setNumber(globalvar.getAsNumber()+2)
console.log("Second ="+(second));

let third = scores[1]
globalvar = runtimeScene.getGame().getVariables().get("p"+third+"_global")
globalvar.setNumber(globalvar.getAsNumber()+1)
console.log("Third ="+(third));

};
gdjs.SigmasaysCode.eventsList9 = function(runtimeScene) {

{


gdjs.SigmasaysCode.userFunc0x95aac0(runtimeScene);

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TransitionScreen", false);
}}

}


};gdjs.SigmasaysCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("circle"), gdjs.SigmasaysCode.GDcircleObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( !(gdjs.SigmasaysCode.GDcircleObjects1[i].animationPaused()) ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDcircleObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDcircleObjects1[i].getAnimationFrame() == 5 ) {
        gdjs.SigmasaysCode.condition1IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDcircleObjects1[k] = gdjs.SigmasaysCode.GDcircleObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDcircleObjects1.length = k;}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SigmasaysCode.GDcircleObjects1 */
{for(var i = 0, len = gdjs.SigmasaysCode.GDcircleObjects1.length ;i < len;++i) {
    gdjs.SigmasaysCode.GDcircleObjects1[i].setAnimationFrame(1);
}
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.SigmasaysCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(5), true);
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11014548);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(5), false);
}
{ //Subevents
gdjs.SigmasaysCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition2IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11020116);
}
}}
}
if (gdjs.SigmasaysCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SigmasaysCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition2IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11024004);
}
}}
}
if (gdjs.SigmasaysCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SigmasaysCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition2IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11027948);
}
}}
}
if (gdjs.SigmasaysCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SigmasaysCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
gdjs.SigmasaysCode.condition1IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition2IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11031836);
}
}}
}
if (gdjs.SigmasaysCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.SigmasaysCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
gdjs.SigmasaysCode.condition2IsTrue_0.val = false;
gdjs.SigmasaysCode.condition3IsTrue_0.val = false;
gdjs.SigmasaysCode.condition4IsTrue_0.val = false;
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition0IsTrue_0;
gdjs.SigmasaysCode.condition0IsTrue_1.val = false;
gdjs.SigmasaysCode.condition1IsTrue_1.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 1000;
if( gdjs.SigmasaysCode.condition0IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
gdjs.SigmasaysCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
if( gdjs.SigmasaysCode.condition1IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.condition0IsTrue_1.val = false;
gdjs.SigmasaysCode.condition1IsTrue_1.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 0;
if( gdjs.SigmasaysCode.condition0IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
gdjs.SigmasaysCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 1000;
if( gdjs.SigmasaysCode.condition1IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SigmasaysCode.condition1IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition2IsTrue_0;
gdjs.SigmasaysCode.condition0IsTrue_1.val = false;
gdjs.SigmasaysCode.condition1IsTrue_1.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 0;
if( gdjs.SigmasaysCode.condition0IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
gdjs.SigmasaysCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) < 1000;
if( gdjs.SigmasaysCode.condition1IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SigmasaysCode.condition2IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition3IsTrue_0;
gdjs.SigmasaysCode.condition0IsTrue_1.val = false;
gdjs.SigmasaysCode.condition1IsTrue_1.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 0;
if( gdjs.SigmasaysCode.condition0IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
gdjs.SigmasaysCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) < 1000;
if( gdjs.SigmasaysCode.condition1IsTrue_1.val ) {
    gdjs.SigmasaysCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.SigmasaysCode.condition3IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition4IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11038028);
}
}}
}
}
}
if (gdjs.SigmasaysCode.condition4IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), false);
}{gdjs.evtTools.debuggerTools.log("p1h= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(6))), "", "");
}{gdjs.evtTools.debuggerTools.log("p2h= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(7))), "", "");
}{gdjs.evtTools.debuggerTools.log("totals= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(10))), "", "");
}{gdjs.evtTools.debuggerTools.log("totalslen= " + gdjs.evtTools.common.toString(gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(10))))), "", "");
}
{ //Subevents
gdjs.SigmasaysCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11045204);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).concatenateString("1");
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 0;
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11045980);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).concatenateString("2");
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 0;
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11046532);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).concatenateString("3");
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
gdjs.SigmasaysCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 0;
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11047420);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).concatenateString("4");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p1health"), gdjs.SigmasaysCode.GDp1healthObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDp1healthObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDp1healthObjects1[i].getWidth() == 0 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDp1healthObjects1[k] = gdjs.SigmasaysCode.GDp1healthObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDp1healthObjects1.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p2health"), gdjs.SigmasaysCode.GDp2healthObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDp2healthObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDp2healthObjects1[i].getWidth() == 0 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDp2healthObjects1[k] = gdjs.SigmasaysCode.GDp2healthObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDp2healthObjects1.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p3health"), gdjs.SigmasaysCode.GDp3healthObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDp3healthObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDp3healthObjects1[i].getWidth() == 0 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDp3healthObjects1[k] = gdjs.SigmasaysCode.GDp3healthObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDp3healthObjects1.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(-(1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("p4health"), gdjs.SigmasaysCode.GDp4healthObjects1);

gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SigmasaysCode.GDp4healthObjects1.length;i<l;++i) {
    if ( gdjs.SigmasaysCode.GDp4healthObjects1[i].getWidth() == 0 ) {
        gdjs.SigmasaysCode.condition0IsTrue_0.val = true;
        gdjs.SigmasaysCode.GDp4healthObjects1[k] = gdjs.SigmasaysCode.GDp4healthObjects1[i];
        ++k;
    }
}
gdjs.SigmasaysCode.GDp4healthObjects1.length = k;}if (gdjs.SigmasaysCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(-(1));
}}

}


{


gdjs.SigmasaysCode.condition0IsTrue_0.val = false;
gdjs.SigmasaysCode.condition1IsTrue_0.val = false;
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition0IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)))) >= 3);
}
}if ( gdjs.SigmasaysCode.condition0IsTrue_0.val ) {
{
{gdjs.SigmasaysCode.conditionTrue_1 = gdjs.SigmasaysCode.condition1IsTrue_0;
gdjs.SigmasaysCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11051188);
}
}}
if (gdjs.SigmasaysCode.condition1IsTrue_0.val) {
{gdjs.evtTools.debuggerTools.log("totalmove= " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(10))), "", "");
}
{ //Subevents
gdjs.SigmasaysCode.eventsList9(runtimeScene);} //End of subevents
}

}


};

gdjs.SigmasaysCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SigmasaysCode.GDp1Objects1.length = 0;
gdjs.SigmasaysCode.GDp1Objects2.length = 0;
gdjs.SigmasaysCode.GDp1Objects3.length = 0;
gdjs.SigmasaysCode.GDp2Objects1.length = 0;
gdjs.SigmasaysCode.GDp2Objects2.length = 0;
gdjs.SigmasaysCode.GDp2Objects3.length = 0;
gdjs.SigmasaysCode.GDp3Objects1.length = 0;
gdjs.SigmasaysCode.GDp3Objects2.length = 0;
gdjs.SigmasaysCode.GDp3Objects3.length = 0;
gdjs.SigmasaysCode.GDp4Objects1.length = 0;
gdjs.SigmasaysCode.GDp4Objects2.length = 0;
gdjs.SigmasaysCode.GDp4Objects3.length = 0;
gdjs.SigmasaysCode.GDsprite_95crossObjects1.length = 0;
gdjs.SigmasaysCode.GDsprite_95crossObjects2.length = 0;
gdjs.SigmasaysCode.GDsprite_95crossObjects3.length = 0;
gdjs.SigmasaysCode.GDsprite_95aObjects1.length = 0;
gdjs.SigmasaysCode.GDsprite_95aObjects2.length = 0;
gdjs.SigmasaysCode.GDsprite_95aObjects3.length = 0;
gdjs.SigmasaysCode.GDtxt_95keysdevObjects1.length = 0;
gdjs.SigmasaysCode.GDtxt_95keysdevObjects2.length = 0;
gdjs.SigmasaysCode.GDtxt_95keysdevObjects3.length = 0;
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects1.length = 0;
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects2.length = 0;
gdjs.SigmasaysCode.GDtxt_95controlsslashObjects3.length = 0;
gdjs.SigmasaysCode.GDcircleObjects1.length = 0;
gdjs.SigmasaysCode.GDcircleObjects2.length = 0;
gdjs.SigmasaysCode.GDcircleObjects3.length = 0;
gdjs.SigmasaysCode.GDNewSpriteObjects1.length = 0;
gdjs.SigmasaysCode.GDNewSpriteObjects2.length = 0;
gdjs.SigmasaysCode.GDNewSpriteObjects3.length = 0;
gdjs.SigmasaysCode.GDp1healthObjects1.length = 0;
gdjs.SigmasaysCode.GDp1healthObjects2.length = 0;
gdjs.SigmasaysCode.GDp1healthObjects3.length = 0;
gdjs.SigmasaysCode.GDp2healthObjects1.length = 0;
gdjs.SigmasaysCode.GDp2healthObjects2.length = 0;
gdjs.SigmasaysCode.GDp2healthObjects3.length = 0;
gdjs.SigmasaysCode.GDp3healthObjects1.length = 0;
gdjs.SigmasaysCode.GDp3healthObjects2.length = 0;
gdjs.SigmasaysCode.GDp3healthObjects3.length = 0;
gdjs.SigmasaysCode.GDp4healthObjects1.length = 0;
gdjs.SigmasaysCode.GDp4healthObjects2.length = 0;
gdjs.SigmasaysCode.GDp4healthObjects3.length = 0;
gdjs.SigmasaysCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.SigmasaysCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.SigmasaysCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.SigmasaysCode.GDtile_95backgroundObjects1.length = 0;
gdjs.SigmasaysCode.GDtile_95backgroundObjects2.length = 0;
gdjs.SigmasaysCode.GDtile_95backgroundObjects3.length = 0;
gdjs.SigmasaysCode.GDtxt_95devObjects1.length = 0;
gdjs.SigmasaysCode.GDtxt_95devObjects2.length = 0;
gdjs.SigmasaysCode.GDtxt_95devObjects3.length = 0;

gdjs.SigmasaysCode.eventsList10(runtimeScene);
return;

}

gdjs['SigmasaysCode'] = gdjs.SigmasaysCode;
