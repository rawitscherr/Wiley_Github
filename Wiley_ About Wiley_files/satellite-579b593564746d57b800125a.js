_satellite.pushAsyncScript(function(event, target, $variables){
  setTimeout(function () {
    try {
        sessionStorage.setItem('hotJarID', window.hj.pageVisit.property.get('userId').split("-").shift());
    }
    catch (e) {}
}, 2000);
});
