import React, { useState } from 'react';
import style from './Shopping.module.css'

function Shopping() {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [arrs, setArrs] = useState([]);

    const handleChange = (event) => {
        setItem(event.target.value);
    };

    const handleChange2 = (event) => {
        setPrice(event.target.value);
    };

    const handleClick = () => {
        if (item && price) {
            setArrs([...arrs, { item: item, price: price }]); // Add new object with item and price
            setItem(''); // Clear input fields after adding
            setPrice('');
        }
    };

    return (
        <>
            <div className={style.div}>
                <div id="secgment">
                    <input type="text" placeholder='Add item' className={style.item} value={item} onChange={handleChange} />
                    <input type="number" placeholder='Price' className={style.price} value={price} onChange={handleChange2} /><br />
                    <button onClick={handleClick} className={style.btn}>Add</button>
                    <div>
                        <ul>
                            {arrs.map((arr, index) => (
                                <li key={index}>
                                    {arr.item} - ${arr.price}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shopping;
