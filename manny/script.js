document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/manny-title.png", actionRadius: 100, timeBetweenNPCs: 3200, npcCollisionRadius: 100, actionDuration:600, jumpHeight: 300, makeResponsive: true, npcSpeed: 500, removeNPCAfterInteracted: false, maxSimultaneousNPCs: 100});
});