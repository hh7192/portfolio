parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cEKC":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=function(){function t(){e(this,t),this.budgetFeedback=document.querySelector(".budget-feedback"),this.expenseFeedback=document.querySelector(".expense-feedback"),this.budgetForm=document.getElementById("budget-form"),this.budgetInput=document.getElementById("budget-input"),this.budgetAmount=document.getElementById("budget-amount"),this.expenseAmount=document.getElementById("expense-amount"),this.balance=document.getElementById("balance"),this.balanceAmount=document.getElementById("balance-amount"),this.expenseForm=document.getElementById("expense-form"),this.expenseInput=document.getElementById("expense-input"),this.amountInput=document.getElementById("amount-input"),this.expenseList=document.getElementById("expense-list"),this.itemList=[],this.itemID=0}return n(t,[{key:"submitBudgetForm",value:function(){var e=this,t=this.budgetInput.value;""===t||t<0?(this.budgetFeedback.classList.add("showItem"),this.budgetFeedback.innerHTML="<p>مقدار خالی یا منفی<p>",setTimeout(function(){e.budgetFeedback.classList.remove("showItem")},4e3)):(this.budgetAmount.textContent=t,this.budgetInput.value="",this.showBalance())}},{key:"showBalance",value:function(){var e=this.totalExpense(),t=parseInt(this.budgetAmount.textContent)-e;this.balanceAmount.textContent=t,t<0?(this.balance.classList.remove("showGreen","showBlack"),this.balance.classList.add("showRed")):t>0?(this.balance.classList.remove("showRed","showBlack"),this.balance.classList.add("showGreen")):(this.balance.classList.remove("showRed","showGreen"),this.balance.classList.add("showBlack"))}},{key:"submitExpenseForm",value:function(){var e=this,t=this.expenseInput.value,n=this.amountInput.value;if(""===t||""==n||n<0)this.expenseFeedback.classList.add("showItem"),this.expenseFeedback.innerHTML="<p>مقدار خالی یا منفی<p>",setTimeout(function(){e.expenseFeedback.classList.remove("showItem")},4e3);else{var s=parseInt(n);this.expenseInput.value="",this.amountInput.value="";var i={id:this.itemID,title:t,amount:s};this.itemID++,this.itemList.push(i),this.addExpense(i),this.showBalance()}}},{key:"addExpense",value:function(e){var t=document.createElement("div");t.classList.add("expense"),t.innerHTML='\n    <div class="expense-item d-flex justify-content-between align-items-baseline">\n\n    <h6 class="expense-title mb-0 text-uppercase list-item"> '.concat(e.title,'</h6>\n    <h5 class="expense-amount mb-0 list-item">').concat(e.amount,'</h5>\n\n    <div class="expense-icons list-item">\n\n     <a href="#" class="edit-icon mx-2" data-id="').concat(e.id,'">\n      <i class="fas fa-edit"></i>\n     </a>\n     <a href="#" class="delete-icon" data-id="').concat(e.id,'">\n      <i class="fas fa-trash"></i>\n     </a>\n    </div>\n   </div>'),this.expenseList.appendChild(t)}},{key:"totalExpense",value:function(){var e=0;return this.itemList.length>0&&(e=this.itemList.reduce(function(e,t){return e+=t.amount},0)),this.expenseAmount.textContent=e,e}},{key:"editExpense",value:function(e){var t=parseInt(e.dataset.id),n=e.parentElement.parentElement.parentElement;this.expenseList.removeChild(n);var s=this.itemList.filter(function(e){return e.id===t}),i=this.itemList.filter(function(e){return e.id!==t});this.itemList=i,this.showBalance(),this.expenseInput.value=s[0].title,this.amountInput.value=s[0].amount}},{key:"deleteExpense",value:function(e){var t=parseInt(e.dataset.id),n=e.parentElement.parentElement.parentElement;this.expenseList.removeChild(n);this.itemList.filter(function(e){return e.id===t});var s=this.itemList.filter(function(e){return e.id!==t});this.itemList=s,this.showBalance()}}]),t}();function i(){var e=document.getElementById("budget-form"),t=document.getElementById("expense-form"),n=document.getElementById("expense-list"),i=new s;e.addEventListener("submit",function(e){e.preventDefault(),i.submitBudgetForm()}),t.addEventListener("submit",function(e){e.preventDefault(),i.submitExpenseForm()}),n.addEventListener("click",function(e){e.target.parentElement.classList.contains("edit-icon")?i.editExpense(e.target.parentElement):e.target.parentElement.classList.contains("delete-icon")&&i.deleteExpense(e.target.parentElement)})}document.addEventListener("DOMContentLoaded",function(){i()});
},{}]},{},["cEKC"], null)
//# sourceMappingURL=/app.7e60eb92.js.map