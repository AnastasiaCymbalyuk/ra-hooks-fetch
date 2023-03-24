import React from "react";
import useJsonFetch from "./useJsonFetch";

export default function Component ({ endpoint }) {
    const [data, error, loading] = useJsonFetch(`http://localhost:7070/${endpoint}`);
    return (
        <div>
            {(loading && 'Loding') || (data && data.status) || (error && 'Error')} 
        </div>
    )
}