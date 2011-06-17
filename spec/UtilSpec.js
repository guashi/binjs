describe("Util module", function(){
    
  it("Util log test", function(){
    var message = log("message");
    expect(message).toEqual("log: message");
  });

});
