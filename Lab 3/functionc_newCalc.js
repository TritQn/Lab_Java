function funcNewCalc(){
    function Calculator(){

        this.read = function(){
            this.a = +prompt("Введите 1 значение");
            this.b = +prompt("Введите 2 значение")
        };
    
        this.sum = function(){
            return this.a + this.b;
        };
    
        this.mul = function(){
            return this.a * this.b;
        }; 
    }
    
    var calculator = new Calculator();
    calculator.read();
    
    alert( "Сумма=" + calculator.sum() );
    alert( "Произведение=" + calculator.mul() )

}
