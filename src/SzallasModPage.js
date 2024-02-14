import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SzallasModPage(){
    const param = useParams();
    const navigate = useNavigate();
    const id = param.szallasId;
    const [modname, setModname] = useState("");
    const [modlocation, setModlocation] = useState("");
    const [modprice, setModprice] = useState("");
    const [modminimum_nights, setModminimum_nights] = useState("");
    const [modhostname, setModhostname] = useState("");


    useEffect(() => {

        (async () => {
            try {
            const res = await fetch(`https://nodejs.sulla.hu/data/${id}`, {});
            const szallasData = await res.json();
            setModname(szallasData.name);
            setModlocation(szallasData.location);
            setModprice(szallasData.price);
            setModminimum_nights(szallasData.minimum_nights);
            setModhostname(szallasData.hostname);
        } catch (error) {
            console.log(error);   
        } 
    })();
}, [id, modname,modlocation, modprice, modminimum_nights, modhostname]);

const modName = (e) => {
    setModname(e.target.value);
}
const modLocation = (e) => {
    setModlocation(e.target.value);
}
const modPrice = (e) => {
    setModprice(e.target.value);
}
const modMinimum_nights = (e) => {
    setModminimum_nights(e.target.value);
}
const modHostname = (e) => {
    setModhostname(e.target.value);
}
return(
    <div className='p-5 content bg-lavender text-center'>
        <h2>Szállás módosítás</h2>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            fetch(`https://nodejs.sulla.hu/data/${id}`, {
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id": id,
                    "name": e.target.elements.name.value,
                    "hostname": e.target.elements.hostname.value,
                    "location": e.target.elements.location.value,
                    "price": parseInt(e.target.elements.price.value),
                    "minimum_nights": e.target.elements.minimum_nights.value,
                }),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='form-group row pb-3'>
                    <label htmlFor="name" className='text-start col-sm-3 col-form-label'> Név: </label>
                        <div className=''>
                            <input type="text" id="name" name="name" className="form-control w-75" defaultValue={modname} onChange={modName} autoComplete='off' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="hostname" className=' text-start col-sm-3 col-form-label'> Hoszt neve: </label>
                        <div>
                            <input type="text" id="hostname" name="hostname" className="form-control" defaultValue={modhostname} onChange={modHostname} autoComplete='off' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="location" className='text-start col-sm-3 col-form-label'> Város: </label>
                        <div>
                            <input type="text" id="location" name="location" className="form-control" defaultValue={modlocation} onChange={modLocation} autoComplete='off' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="price" className='text-start col-sm-3 col-form-label'> Ár: </label>
                        <div>
                            <input type="text" id="price" name="price" className="form-control" defaultValue={modprice} onChange={modPrice} autoComplete='off' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="minimum_nights" className='text-start col-sm-3 col-form-label'> Minimum éjszaka: </label>
                        <div>
                            <input type="text" id="minimum_nights" name="minimum_nights" className="form-control" defaultValue={modminimum_nights} onChange={modMinimum_nights} autoComplete='off' />
                        </div>
                </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
    </div>
);
    
}