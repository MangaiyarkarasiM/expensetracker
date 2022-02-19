import React, {useState, useContext} from "react";
import TransactionList from "../components/TransactionList/TransactionList";
import Form from "../components/Form/Form";
import { GlobalContext } from "../context/globalContext";

const Incomes = () =>{
const {transaction} = useContext(GlobalContext);
const [showEdit, setShowEdit] = useState(false);
const [id, setId] = useState(0);

const income = transaction?.filter((t)=> !t.isExpense);

    return(
        <>
            <div className="row">
                <TransactionList income incomes={income} setShowEdit={setShowEdit} setId={setId}></TransactionList>
            </div>
            <div className="row">
                <div className="mb-4 ml-4">
                    <button className="btn btn-success" onClick={()=>{setShowEdit(true)}}>Add Income</button>
                </div>
            </div>
            <div className="row">
                {showEdit ?
                id ? <div>
                <Form id={id} income setShowEdit={setShowEdit} setId={setId}></Form>
                </div> : <div>
                    <Form income setShowEdit={setShowEdit} setId={setId}></Form>
                </div>
                : null}
            </div>
        </>
    );
}

export default Incomes;