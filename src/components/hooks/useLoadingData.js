import {useEffect, useState} from 'react';

const useLoadingData = (url) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setItems(res);
            setLoading(false);
        })
        .catch(() => {
            setError(true);
            setLoading(false);
        });
    }, [url]);
    
    return {
        items,
        loading,
        error
    }
};

export default useLoadingData;
