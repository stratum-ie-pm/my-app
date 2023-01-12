import React, { DetailedHTMLProps, FormHTMLAttributes, useState } from 'react'

const MyForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setName("");
        console.log("From submitted");
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className='Field'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            id='name'
                            type='texr'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default MyForm