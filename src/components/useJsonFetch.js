import {useState, useEffect} from "react";

export default function useJsonFetch (url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => { setData(data) })
        .catch((error) => { setError(error) })
        .finally(() => { setLoading(false) })
    }, [url])
    return [data, error, loading];
}