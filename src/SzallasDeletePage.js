import { useState, useEffect } from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";

export function SzallasDeletePage(){
    const navigate = useNavigate();
    const param = useParams();
    const id = param.szallasId;
    const [szallas, setSzallas] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, {});
            const szallas = await res.json();
            setSzallas(szallas);
        } catch (error) {
            console.log(error);   
        }
        finally {
            setPending(false);
        }
    })();
    }, [id]);
    return (
             <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !szallas.id ? ( <div className='spinner-border'></div>) : (       
                <div>
                    <h2>Szállás törlése</h2>
                    <div className='card p-3'>
                        <div className='card-body'>
                        <h5 className='card-title'>{szallas.name}</h5>
                </div>
                        <form onSubmit={async (e) => {
                            try{
                            e.preventDefault();
                            await fetch(`https://nodejs.sulla.hu/data/${id}`, {
                                method: "DELETE",
                                
                            });
                            navigate("/");}
                        catch(error) {
                            console.log(error);
                        };
                        }}>
                        <div>
                            <NavLink  to={"/"}>
                                <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                            </NavLink>
                            <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                        </div>
                        </form>
                    </div>
                </div>
            )} </div>
    ); 
}