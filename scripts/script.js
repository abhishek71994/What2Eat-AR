//////////////////////////////////////////////////////////////////////////
// [EFFECT NAME HERE]
// A Project by: @Abhishek71994 | @EstherKoon | @RachelHow
// Instagram | Spark AR Studio | SDK v62.0
// https://www.instagram.com/a/r/?effect_id=??????
//////////////////////////////////////////////////////////////////////////

const Diagnostics = require("Diagnostics");
const Scene = require("Scene");
const Reactive = require("Reactive");
const TouchGestures = require("TouchGestures");
const Materials = require("Materials");
const Textures = require("Textures");

var planeTracker = Scene.root.find("planeTracker0");
var stroke = Scene.root.find("emitter0");
var blackDot = Materials.get("blackDot");

TouchGestures.onTap().subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location);
});

TouchGestures.onLongPress().subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location);
});

TouchGestures.onPan(planeTracker).subscribe(function(gesture) {
  planeTracker.trackPoint(gesture.location, gesture.state);
});

TouchGestures.onPinch().subscribe(function(gesture) {
  // Store the last known x and y-axis scale values of the plane
  const lastScaleX = planeTracker.scale.x.pinLastValue();
  const lastScaleY = planeTracker.scale.y.pinLastValue();
  const lastScaleZ = planeTracker.scale.z.pinLastValue();

  // Update the scale of the plane by multiplying the last known scale with scale returned by the gesture
  planeTracker.scaleX = gesture.scale.mul(lastScaleX);
  planeTracker.scaleY = gesture.scale.mul(lastScaleY);
  planeTracker.scaleZ = gesture.scale.mul(lastScaleZ);
});
