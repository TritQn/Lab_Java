function funcSumSkob(){
    function sum(a) {
        var SumSk = a;    
        function f(b) {
            SumSk += b;
          return f;
        }     
        f.toString = function() {
          return SumSk;
        };    
        return f;
      }  
      alert( sum(1)(2) );
      alert( sum(5)(-1)(2) ); 
      alert( sum(6)(-1)(-2)(-3) ); 
      alert( sum(0)(1)(2)(3)(4)(5) ); 
}
