(function(doc){
  // Save a reference to the global object
  var root = this;
  var loader = {}, head = document.getElementsByTagName('head')[0];

 loader.loadscript = function(url, callback){
    var script = createNode("script", {url:url, type:'text/javascript'});
    if (script.readystate) { // IE
      script.onreadystatechange = function(){
        //if (script.readystate == 'loaded' ||
            //script.readystate == 'complete'){
        if (/loaded|complete/.test(script.readystate)){
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
    head.appendChild(script);
  };

  // Defines a module
  //loader.define = function(id, deps, factory){
  //if (isString(id) && isArray(deps) && isFunction(factory)) {
  //var mod = { id:id, dependencies:deps||[], factory: factory};
  //deps = parseDependencies(factory.toSting());
  //loader.quene.push(mod);
  //}
  //else {
  //console.error(" incorrect define format");
  //}

  //};
  //loader.use = function(ids, callback){
  //if(isString(ids)){
  //ids= [ids];
  //}

  //var args = map(ids, function(id){
  //return require(id);
  //});

  //if (callback){
  //callback.apply(root, args);
  //}
  //}

  //function require(id){

  //}

  //function parseDependencies(code) {
  //var pattern = /[^.]\brequire\s*\(\s*['"]?([^'")]*)/g;
  //var ret = [], match;

  //code = removeComments(code);
  //while ((match = pattern.exec(code))) {
  //if (match[1]) {
  //ret.push(match[1]);
  //}
  //}
  //return ret;
  //};


 function createNode(name, attrs) {
    var node = doc.createElement(name), attr;

    for (attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }

    return node;
  }
root.loadscript = loader.loadscript;

})(this.document);
