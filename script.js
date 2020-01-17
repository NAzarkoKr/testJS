'use strict';

let money, time;
function start() {
    money = +prompt("Your budget?");
    time  = prompt("Choose date like YYYY-MM-DD");
 

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Your budget?");

    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for(let i = 0; i < 2; i++){
            let a = +prompt("Money for month", ''),
                b = prompt("How much it cost?", '');
        
            if(typeof(a) === 'string' && (typeof(a) != null) 
            && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ){
        
            appData.expenses[a] = b;
            } else{
                i = i - 1;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Money per day: "  + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100){
            console.log("Minimum");
          } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
             console.log("Midium");
          } else if (appData.moneyPerDay > 2000){
              console.log("Hight");
          } else {
              console.log("Retry")
          }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("What savings do you have?"),
                percent = +prompt("Persent?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Your income: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 3; i++) {
            let opt = promt("For something?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = prompt("What give income?(Use ,)", "");
        appData.income = items.split(', ');
        appData.income.push(prompt('Maybe something else?'));
        appData.income.sort();
    }
};



