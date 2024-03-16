import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(() => data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [url]);

    return [data, isLoading]
}