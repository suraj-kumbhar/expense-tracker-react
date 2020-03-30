import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {v4 as uuid} from 'uuid'

export const AddTransaction = () => {
    const [text, setText]=useState('');
    const [amount, setAmount]=useState(0);
    const {addTransaction } = useContext(GlobalContext);
    
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuid(),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add new transcation</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='text'>Text</label>
                <input type='text' placeholder='Enter Text' value={text} onChange={e=> setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount<br/>(Negative=>expense, Positive=>income)</label>
                <input type='number' placeholder='Enter Amount' value={amount} onChange={e=> setAmount(e.target.value)}/>
            </div>
            <button className='btn'>Add transcation</button>
        </form>   
        </>
   )
}
