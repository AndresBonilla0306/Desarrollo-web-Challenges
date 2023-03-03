import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
    
    const {counter, increment, decrement, reset} = useCounter(0);
    const {data, isLoading, hasError} = useFetch (`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    return(
        <>
        <h1>MultipleCustomHooks</h1><br></br>

        {
            isLoading ? (
                <div className="alert">
                    Loading...
                </div>
            ) : (
                <blockquote className="Blockquote">
                    <p className="Pi">{data[0]?.quote}</p>
                    <footer> {data[0]?.author} </footer>
                </blockquote>
            )
        }
        <button onClick={() => increment() }> +1 </button>
        <button onClick = {()=> decrement()}>-1</button>
        <button onClick = {()=> reset()}>Reiniciar</button>
        </>
    )
}