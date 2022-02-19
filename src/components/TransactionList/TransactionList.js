import React from "react";
import Transaction from "../Transaction/Transaction";

const TransactionList = (props) =>{

    return(
        <div>
            {
                props.income ? props.incomes?.map((t)=>{
                    return <Transaction key={t.id} transaction={t} setShowEdit={props.setShowEdit} setId={props.setId}></Transaction>}) :
                props.expenses?.map((t)=>{
                        return <Transaction key={t.id} transaction={t} setShowEdit={props.setShowEdit} setId={props.setId}></Transaction> 
                })
            }
        </div>
    );
}

export default TransactionList;