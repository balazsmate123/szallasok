import { useNavigate } from 'react-router-dom';


export function SzallasCreatePage(){
    const navigate = useNavigate();

    return (
        <div className='p-5 content bg-whitesmoke text-center'>
            <h2>Új szállás</h2>
            <form
            onSubmit={(e) => {
                e.persist();
                e.preventDefault();
                fetch("https://nodejs.sulla.hu/data", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    
                    body: JSON.stringify({
                        "name": e.target.elements.name.value,
                        "hostname": e.target.elements.hostname.value,
                        "location": e.target.elements.location.value,
                        "price": parseInt(e.target.elements.price.value),
                        "minimum_nights": e.target.elements.minimum_nights.value
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
                            <input type="text" id="name" name="name" className="form-control w-75" autoComplete='name' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="hostname" className=' text-start col-sm-3 col-form-label'> Hoszt neve: </label>
                        <div>
                            <input type="text" id="hostname" name="hostname" className="form-control" autoComplete='hostname' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="location" className='text-start col-sm-3 col-form-label'> Város: </label>
                        <div>
                            <input type="text" id="location" name="location" className="form-control" autoComplete='location' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="price" className='text-start col-sm-3 col-form-label'> Ár: </label>
                        <div>
                            <input type="text" id="price" name="price" className="form-control" autoComplete='price' />
                        </div>
                </div>
                <div className='form-group row pb-3'>
                    <label htmlFor="minimum_nights" className='text-start col-sm-3 col-form-label'> Minimum éjszaka: </label>
                        <div>
                            <input type="text" id="minimum_nights" name="minimum_nights" className="form-control" autoComplete='minimum_nights' />
                        </div>
                </div>
                <button type="submit" className='btn btn-success'>Küldés</button>
                </form>
            
        </div>
    );
}