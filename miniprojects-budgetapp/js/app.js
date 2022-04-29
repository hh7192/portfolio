// cleaner code without prototypes and using just classes.
// Step1: accessing to properties and presetting them by UI class
// Step2: writing eventlisteners function building
// Step3: writing methods for each property we have accessed
// Step4: adding methods to eventlistener function. 
// Step5: calling function when DOM loads.








// Step1:accessing to properties and presetting them by UI class
class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  // Step3: writing methods for each property we have accessed
// 1----------------------------------------------------------------------------
  // submit BudgetForm method
    // getting value from the budgetInput field (budget in $)
      // if: setting error handling for empty and negatives in budgetFeedback.
        // setTimeout: hiding the feedback 
      // else: grabbing entered value and put it in budgetAmount
        // remove the entered value from budgetInput
        // calling the showBalance function
  submitBudgetForm() {
    const budgetValue = this.budgetInput.value;

    if(budgetValue === '' || budgetValue < 0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>مقدار خالی یا منفی<p>`;

      // to prevent refer to global obj in setTimout
      setTimeout(() => {
        this.budgetFeedback.classList.remove('showItem');
      },4000);
    }
    else {
      this.budgetAmount.textContent = budgetValue;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }

// 2----------------------------------------------------------------------------
  // showBalance method to add to balanceAmount
    // expense: storing value from totalExpense func in a variable
      // total: value passed to budgetAmount in submitBudgetForm() and subtract expense from it
        // grabbing calculated total and put it in balanceAmount
          // if, else: set the color of balanceAmount for negative and positive amount
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove('showGreen','showBlack');
      this.balance.classList.add('showRed');
    }
    else if(total > 0){
      this.balance.classList.remove('showRed','showBlack');
      this.balance.classList.add('showGreen');
    }
    else {
      this.balance.classList.remove('showRed','showGreen');
      this.balance.classList.add('showBlack')
    }
  }

// 3----------------------------------------------------------------------------
  // submit ExpenseForm method
    // getting value from the expenseInput field (expense text)
    // getting value from the amountInput field (expense in $)
      // if: setting error handling for empty and negatives in expenseFeedback.
        // setTimeout: hiding the feedback 
      // else: grabbing entered value form amountInput and put it in amount variable
        // remove the entered value from expenseInput
        // remove the entered value from amountInput
        // expense obj: for storing each itemID, expenseValue and amount
      // increment itemID by 1
        // pushing created expense obj to itemList array
          // calling addExpense function
            // calling showBalance function
submitExpenseForm() {
  const expenseValue = this.expenseInput.value;
  const amountValue = this.amountInput.value;

    if(expenseValue === '' || amountValue == '' || amountValue < 0){
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = `<p>مقدار خالی یا منفی<p>`;

      // to prevent refer to global obj in setTimout
      setTimeout(() => {
        this.expenseFeedback.classList.remove('showItem');
      },4000);
    }
    else {
      let amount = parseInt(amountValue);
      this.expenseInput.value = '';
      this.amountInput.value = '';

      let expense = {
        id:this.itemID,
        title:expenseValue,
        amount:amount
      }
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showBalance();
    }
}

// 4----------------------------------------------------------------------------
  // addExpense method to create a div for each single expence and fill it. 
    // adding the expense class to created div
      // building HTML code for created div
        // appending the created single expense to expenseList
  addExpense(expense) {
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">

    <h6 class="expense-title mb-0 text-uppercase list-item"> ${expense.title}</h6>
    <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

    <div class="expense-icons list-item">

     <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
      <i class="fas fa-edit"></i>
     </a>
     <a href="#" class="delete-icon" data-id="${expense.id}">
      <i class="fas fa-trash"></i>
     </a>
    </div>
   </div>`;
    this.expenseList.appendChild(div);
  }

// 5----------------------------------------------------------------------------
  // totalExpense method to calc expanses from expenseList
    // set initial total to 0
      // if: check itemList length to see if there is any expense and calc total
        // selecting itemList to run reduce() to calc total from amount property of itemList
          //  if there is no expense we return total (which is 0)
  totalExpense() {
    let total = 0;
    if(this.itemList.length > 0) {
      total = this.itemList.reduce(function(total,curr){
        total += curr.amount;
        // console.log(`total is ${total} and current value is ${curr.amount}`);
        return total;
      },0);
    }
   this.expenseAmount.textContent = total;
   return total;
  }

// 6----------------------------------------------------------------------------
  // editExpense method for edit icon functionality
    // 
      // element (icon) has 4 parents to reach the expense-list id. 1 covered in eventlistener, 3 here      
  editExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement

      // removing the parent from the expense list (DOM)
    this.expenseList.removeChild(parent);

      // removing from array (itemList)
    let expense = this.itemList.filter(function(item){
      return item.id === id;
    });
    let tempList = this.itemList.filter(function(item){
      return item.id !== id;
    });
    this.itemList = tempList;
    this.showBalance();

      // show selected values in input for editing
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;
  }

  // 7----------------------------------------------------------------------------
    // deleteExpense method for edit icon functionality
  deleteExpense(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement

      // removing the parent from the expense list (DOM)
    this.expenseList.removeChild(parent);

     // removing from array (itemList)
     let expense = this.itemList.filter(function(item){
      return item.id === id;
    });
    let tempList = this.itemList.filter(function(item){
      return item.id !== id;
    });
    this.itemList = tempList;
    this.showBalance();
  }
}






// Step2:writing eventlisteners function building.
  // listening to 3 events in this function (3 inputs).others will be done in the UI CLASS.
function eventListeners() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

    // new instance of UI CLASS
  const ui = new UI();

    // budget form submit
      // preventDefault: prevent from refreshing the page every time user submite
        // Step4: adding BudgetForm method
  budgetForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitBudgetForm();
  });

    // expense form submit
      // preventDefault: prevent from refreshing the page every time user submite
        // Step4: adding BudgetForm method
  expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    ui.submitExpenseForm();
  });

    // expense list click (attaching to existing expense like delete and edit)
      // get items when clicking expenseList
        // if: getting parent element of the link for edit icon
          // create editExpense method
        // else if: getting parent element of the link for delete icon
          // create deleteExpense method
  expenseList.addEventListener('click', function(event){
    if(event.target.parentElement.classList.contains('edit-icon')){
      ui.editExpense(event.target.parentElement);
    }
    else if(event.target.parentElement.classList.contains('delete-icon')){
      ui.deleteExpense(event.target.parentElement);
    }
  });
}








// Step5: calling function when DOM loads.
document.addEventListener('DOMContentLoaded', function() {
  eventListeners();
});


