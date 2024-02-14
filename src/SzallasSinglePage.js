import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";


export function SzallasSinglePage(){
    const param = useParams();
    const id = param.szallasId;
    const [szallas, setSzallas] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, {})
        const szallas =await res.json();
        setSzallas(szallas);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !szallas.id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                    <div className='card-body'>
                    <h5 className='card-title'>{szallas.name}</h5>
                    <div className='small'>Hoszt neve: {szallas.hostname}</div>
                       <NavLink  to={"/"}>
                       </NavLink>
                       <h5 className='text-warning'>Város: {szallas.location}</h5>
                       <h6 className='text-danger'>Ár:{szallas.price}</h6>
                    <h6 className='text-secondary'>Minimum esték: {szallas.minimum_nights}</h6>
                    <br />
                    </div>
                    <NavLink to={"/"}>
                        <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                    </NavLink>
                </div>
            )}
        </div>
    ); 
}