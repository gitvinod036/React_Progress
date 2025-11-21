import { useState, useEffect } from "react";
import axios from "axios";

export function ClearApi() {
    const [quote, setQuote] = useState()

    useEffect(() => {
        setInterval((signal) => {
            axios.get(" https://dummyjson.com/quotes/random", { signal })
                .then(data => setQuote(data.data.quote))
                // .then(data=>setQuote(data))
                .catch(err => console.log(err))
        }, 5000)
        const apicontroller = new AbortController()
        const { signal } = apicontroller
        return () => {
            apicontroller.abort()
        }
    }, [])
    return <div>
        <h2>
            Rendering
        </h2>
        <h3>Quote For 5 Sec : {quote}</h3>
    </div>
}