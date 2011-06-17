(function(doc){
  // Save a reference to the global object
  var root = this;

 root.loadscript = function(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readystate) { // IE
      script.onreadystatechange = function(){
        if (script.readystate == 'loaded' ||
            script.readystate == 'complete'){
          script.onreadystatechange = null;
        callback();
        }
      };
    } 
    else {
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

})(this.document);
