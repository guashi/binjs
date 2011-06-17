describe("Class module", function(){
  var Class;
  var Person, Ninja;
  var person, ninja;

  beforeEach(function(){
    seajs.use("../lib/class.js", function(class){
      Class=class;
      Person = Class.extend({
        init: function(isDancing){
          this.dancing = isDancing;
        },
        dance: function(){
          return this.dancing;
        }
      });

      Ninja = Person.extend({
        init: function(){
          this._super( false );
        },
        dance: function(){
          // Call the inherited version of dance()
          return this._super();
        },
        swingSword: function(){
          return true;
        }
      });
      person = new Person(true);
      ninja = new Ninja();
    });
    wait(200);
  });

  it("new class should be able to instance new object", function(){
    expect(person.dance()).toEqual(true);
  });

  it("chird instance should overwrite parent's behavior", function(){
    expect(ninja.dance()).toEqual(false);
  });
  it("chird instance should have their own's behavior", function(){
    expect(ninja.swingSword()).toEqual(true);
  });
  it("chird instance instanceof root the class:Class", function(){
    expect(person instanceof Person && person instanceof Class).toEqual(true);
  });
  it("chird instance instanceof parent the class", function(){
    expect(ninja instanceof Ninja && ninja instanceof Person && ninja instanceof Class).toEqual(true);
  });
});
