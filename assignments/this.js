/* The for principles of "this"; //my initial commit comment
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window._ = {};

// Principle 2

// code example for Implicit Binding

function foo() {
    console.log(this.a);
}

const obj2 = {
    a: 10,
    foo: foo
};

const obj1 = {
    a: 4,
    obj2: obj2
};

obj1.obj2.foo();

// Principle 3

// code example for New Binding

function foo(a) {
    this.a = a;
}

var bar = new foo ( 2 );
console.log( bar.a );

// Principle 4

// code example for Explicit Binding

function foo(something) {
    console.log( this.a, something );
    return this.a + something;
  }
  
   // simple `bind` helper
  function bind(fn, obj) {
    return function() {
      return fn.apply( obj, arguments );
    };
  }
  
   var obj = {
    a: 2
  };
  
   var bar = bind( foo, obj );
  
   var b = bar( 3 );
  console.log( b );