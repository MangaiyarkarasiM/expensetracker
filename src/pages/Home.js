import React, { useContext} from "react";
import { GlobalContext } from "../context/globalContext";
import Card from "../components/Card/Card";

const Home = () =>{
    const {transaction} = useContext(GlobalContext);
    const expense = transaction?.filter((t)=> t.isExpense)?.map((t)=> parseInt(t.amount))?.reduce((pv,cv)=>pv+cv, 0) || 0;
    const income = transaction?.filter((t)=> !t.isExpense)?.map((t)=> parseInt(t.amount))?.reduce((pv,cv)=>pv+cv, 0) || 0;
    const balance = income-expense || 0;
    console.log(expense, income,balance);
    return(
        <div className="row">
         <Card primaryClassName="col-xl-4 col-md-6 mb-4" className="info" amount={balance} icon={<i className="cardiconcolor fa fa-money fa-3x" aria-hidden="true"></i>}>Balance</Card>
         <Card primaryClassName="col-xl-4 col-md-6 mb-4" className="success" amount={income} icon={<i className="cardiconcolor fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>}>Total Income</Card>
         <Card primaryClassName="col-xl-4 col-md-6 mb-4" className="danger" amount={expense} icon={<i className="cardiconcolor fa fa-cutlery fa-2x" aria-hidden="true"/>} icon1={<i className="cardiconcolor fa fa-bed fa-2x" aria-hidden="true"/>}>Total Expense</Card>
        </div>
    );
}

export default Home;