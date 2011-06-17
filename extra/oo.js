function Video(){};   
function Movie(){};   
Movie.prototype = new Video();   
Movie.prototype.constructor = Movie; // don't miss constructor

