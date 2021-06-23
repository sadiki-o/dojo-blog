import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abrt = new AbortController();
        setTimeout(() => {
        fetch(url, { signal: abrt.signal }).then(res => {
            if(!res.ok){
                throw Error("Could not fetch the data !!")
            }
            return res.json();
        }).then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            if(err.name === "AbortError"){
                console.log("abort error occured")
            }else{
                setError(err.message);
                setIsPending(false)
            };
            
        });
        }, 1000)
        return () => abrt.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;