import { useState } from 'react'

function Form() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [card, setCard] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);

    }
    const handleMail = (e) => {
        setMail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCard(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="box-form">

                    <div>
                        <label htmlFor="email" class="">Email: </label>
                        <input type="email" onChange={handleMail} className="" id="email" placeholder="mario@rossi.com" />
                    </div>
                    <div>
                        <label htmlFor="text" class="">Nome: </label>
                        <input type="text" onChange={handleName} className="text-input" id="text" placeholder="Inserisci il tuo nome" />
                    </div>
                    <button id="submitBtn" type="submit">Invia</button>
                </div>
            </form>
            {card && (
                <div className="card">
                    <h3>{name}</h3>
                    <p>{mail}</p>
                </div>
            )}
        </>
    )

}

export default Form;

