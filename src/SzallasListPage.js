import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

export function SzallasListPage() {

    const [szallasok, setSzallasok] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        
        document.title = "Szallas";
        setFetchPending(true);
        fetch("https://nodejs.sulla.hu/data", {})
        .then((res) => res.json())
        .then((szallasok) => setSzallasok(szallasok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
 }, []);
 return (
   <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Szállások</h2>      
            {szallasok.map((szallas) => (
                <div key={szallas.id + 4} className={'card col-sm-3 d-inline-block m-1 p-2'}>
                    <h5 className='text-warning'>{szallas.name}</h5>
                    <div className='small'>Hoszt neve: {szallas.hostname}</div>
                    <NavLink key={szallas.id} to={"/get/" + szallas.id}>
                        <h5 className='text-warning'>Város: {szallas.location}</h5>
                    </NavLink>
                    <h6 className='text-danger'>Ár:{szallas.price}</h6>
                    <h6 className='text-secondary'>Minimum esték: {szallas.minimum_nights}</h6>
                    <br />
                    <NavLink key={szallas.id+1} to={"/put/" + szallas.id}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink key={szallas.id+2} to={"/delete/" + szallas.id} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}