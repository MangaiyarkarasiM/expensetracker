import React,{useContext,useEffect, useState} from "react";
import {GlobalContext} from '../../context/globalContext';

function Form(props){
const {transaction, editTransactions, addTransactions} = useContext(GlobalContext);
const [trans,setTrans] = useState({});
useEffect(()=>{
let trans = transaction?.filter((t)=> t.id===props.id);
 if(trans){setTrans(...trans)};
},[props.id])

function onChangeInput(e){
        setTrans((oldstate)=>{
            return {
                ...oldstate,
                [e.target.name] : e.target.value
            }
        })
}

    return(
        <div className="bg-white rounded p-4 ml-2">
            <div className="d-flex justify-content-between mb-4">
                <label className="mr-3">{props.income?'Income Title':'Expense Title'}</label>
                <input type="text" name='title' value={trans?trans.title : ''} placeholder="Enter the title" onChange={onChangeInput}></input>
            </div>
            <div className="d-flex justify-content-between mb-4">
                <label className="mr-3">Amount</label>
                <input type="text" name='amount' value={trans?trans.amount: ''} placeholder="Enter the amount" onChange={onChangeInput}></input>
            </div>
            <div className="d-flex justify-content-between">
                {props.id? <button className="btn btn-info" onClick={()=>{editTransactions(trans); props.setShowEdit(false); props.setId(0)}}>Update</button>
                : <button className="btn btn-info" onClick={()=>{ let isExpense = props.income ? false : true; addTransactions({...trans, isExpense}); props.setShowEdit(false)}}>Add</button>}
                
                <button className="btn btn-info" onClick={()=>{props.setShowEdit(false); props.setId(0)}}>Cancel</button>
            </div>
        </div>
    )
}

export default Form;