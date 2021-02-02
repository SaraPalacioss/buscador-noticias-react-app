import React from 'react';
import styles from './Formuario.module.css';

const Formulario = () => {
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra noticias por cateforía</h2>
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.['btn-block']} btn-large amber darken-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;