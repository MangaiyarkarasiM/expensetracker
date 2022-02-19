import React, {useState, useContext} from "react";
import Form from "../components/Form/Form";
import TransactionList from "../components/TransactionList/TransactionList";
import { GlobalContext } from "../context/globalContext";

const Expenses = () =>{
const {transaction} = useContext(GlobalContext);
const [showEdit, setShowEdit] = useState(false);
const [id, setId] = useState(0);


const expense = transaction?.filter((t)=> t.isExpense);

    return(
        <div>
            <div className="row">
                <div>
                    <TransactionList expenses={expense} setShowEdit={setShowEdit} setId={setId}></TransactionList>
                </div>
            </div>
            <div className="row">
                <div className="mb-4 ml-4">
                    <button className="btn btn-warning" onClick={()=>{setShowEdit(true)}}>Add Expense</button>
                </div>
            </div>
            <div className="row">
            {showEdit ?
                id ? <div>
                <Form id={id} setShowEdit={setShowEdit} setId={setId}></Form>
                </div> : <div>
                    <Form setShowEdit={setShowEdit} setId={setId}></Form>
                </div>
                : null}
            </div>
        </div>
    );
}

export default Expenses;