import React, {useContext} from "react";
import { GlobalContext } from "../../context/globalContext";
import './Transaction.css';

const Transaction = (props) =>{
    const {deleteTransactions} = useContext(GlobalContext);
 
    return(
        <div className="d-flex felx-row onhover">
            <span className="deletetrans mt-4">
                <button className="btn btn-danger text-light py-1 px-2" onClick={()=>{deleteTransactions(props.transaction.id)}}>✕</button>
            </span>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                <div className="cardstyle py-3 px-3 mb-3 justify-content-between ml-4">
                    <div className="title">
                        <div className="font-weight-bold text-uppercase text-secondary">{props.transaction.title}</div>
                        <div className="text-dark">₹{props.transaction.amount}</div>
                    </div>
                    <div> 
                        <button className="btn btn-info py-1 px-2" onClick={()=>{props.setShowEdit(true); props.setId(props.transaction.id)}}>Edit</button>
                    </div>                    
                </div>            
            </div>
            
        </div>
    );
}

export default Transaction;