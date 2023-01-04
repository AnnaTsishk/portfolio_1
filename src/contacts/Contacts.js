import React from 'react';
import style from './Contacts.module.css';


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.containerContacts}>
                <div className={style.text}>
                    <span>Contacts</span>

                </div>

                <form>
                    <div className={style.info}>
                        <label> name
                            <input className={style.input}/>
                        </label>
                        <label>phone number
                            <input className={style.input}/>
                        </label>
                        <label>additional Information
                            <textarea className={style.input}></textarea>
                        </label>
                    </div>
                </form>





                <button className={style.button}>send</button>
            </div>
        </div>
    );
}

export default Contacts;