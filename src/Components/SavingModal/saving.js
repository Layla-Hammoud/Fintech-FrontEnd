import { useState, useEffect } from "react";

const addSavingModal = ({isOpen, OnClose, fetchSavingData}) => {

    const [title, setTitle] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [amount, setAmount] = useState('');

    const handleSave = async () => {

        try{
            const response = await fetch('/api/savings/${walletId}',{
                method: "POST",
                headers:{
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({title,goalAmount,amount}),

            });

            if(!response.ok){

                onclose();
                fetchSavingData();
            } else {
                console.error('Fialed to add saving');
            }
        } catch(error) {
            console.error('Error adding saving', error);
        }
    };

    useEffect(() => {
        setTitle('');
        setGoalAmount('');
        setAmount('');
    }, [isOpen] );

    return (
        <Modal isOpen={isOpen} OnClose={OnClose}>
            <h2>Add saving</h2>
            <label>
                Title: 
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>

            <label>
                Goal Amount: 
                <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)}/>
            </label>

            <label>
                Amount: 
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </label>

            <button onClick={handleSave}>Save</button>
        </Modal>
    );

};

export default addSavingModal;
