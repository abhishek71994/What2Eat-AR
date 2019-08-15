//==============================================================================
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

const Diagnostics = require("Diagnostics");
const Scene = require("Scene");
const TouchGestures = require("TouchGestures");

var planeTracker = Scene.root.find("planeTracker0");
var stroke = Scene.root.find("emitter0");

TouchGestures.onTap().subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location);
});

TouchGestures.onPan(planeTracker).subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location, gesture.state);
});
