function nName(){
    var name =prompt ("Hey what's your name?")
    return name
}

alert(nName()) // inoke



do{

    var computer=0;
    var human=0;

    do{

        var randomNumer=Math.floor(Math.random()*10)+1


        computer=computer+randomNumer;
    //       7       0        7 
        console.log(`the new computer number is ${r}.Computer new total is ${computer}`)
    

    }while(computer<16)


    do{

        var randomNumer=Math.floor(Math.random()*10)+1


        human=human+randomNumer;

        if(human>20){
            break
        }
       

        console.log(`the new computernumber is ${randomNumer}.Computer mew total is ${computer}`)

        var desicion=prompt("would you like another number?")

    }while((human<16))&&(desicion=="y"))

    if((computer>human)&&(desicion=="y"))









}while()