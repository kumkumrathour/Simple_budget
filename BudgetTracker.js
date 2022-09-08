
export default class BudgetTracker {
    constructor(querySelectorString){
        this.root = document.querySelector(querySelectorString);
        this.root.innerHTML = BudgetTracker.html();
        this.root.querySelector(".new-entry").addEventListener("click",()=>{
            this.onNewEntryBtnClick();
        });
        this.load();
    }
    static html(){
        return `
        <table class="budget-tracker">
        <thead>
            <tr>
                <th>Date</th>
                <th>description</th>
                <th>Type</th>
                <th>Amount</th>
                <th></th>
            </tr>
        </thead>
        <tbody class="entries">
            <!-- <tr>
                <td>
                  <input type="date" class="input input-date">
                </td>
                <td>
                    <input type="text" class="input input-description" type="text" placeholder="Add (e.g. wages,bills, etc)">
                  </td>
                  <td>
                    <select class="input input-type">
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                  </td>
                  <td>
                    <input type="number" class="input input-amount">
                  </td>
                  <td>
                    <button type="button" class="delete-entry">&#10005;</button>
                  </td> -->
            <!-- </tr> -->
        </tbody>
        <tbody>
        <tr>
            <td colspan="5" class="controls">
                <button type="button" class="new -entry">New Entry</button>
            </td>
        </tr>
       </tbody>
       <tfoot>
        <tr>
            <td colspan="5" class="summary">
                   <strong>Total:</strong>
                   <span class="Total">$0.00</span>
            </td>
        </tr>
       </tfoot>
    </table>
            `;
          
    }
    static htmlHTML(){
                  ` 
                    <tr>
                        <td>
                            <input type="date" class="input input-date">
                        </td>
                        <td>
                            <input type="text" class="input input-description" type="text" placeholder="Add (e.g. wages,bills, etc)">
                            </td>
                            <td>
                            <select class="input input-type">
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
                            </select>
                            </td>
                            <td>
                            <input type="number" class="input input-amount">
                            </td>
                            <td>
                            <button type="button" class="delete-entry">&#10005;</button>
                            </td> 
                </tr> 
                   `;
    }
    load(){
        const entries = JSON.parse(localStorage.getItem("budget-tracker-entries-dev")||"[]");
        console.log(entries);
        for(const entry of entries){
            this.addEntry(entry);
        }
    }
    updateSummary(){

    }
    save(){

    }
    addEntry(entry = {}){

    }
    getEntryRows(){

    }
    onNewEntryBtnClick(){

    }
    onDeleteEntryBtnClick(){

    }
}
     