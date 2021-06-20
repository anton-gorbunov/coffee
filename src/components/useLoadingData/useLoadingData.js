import {useEffect, useState} from 'react';

function useLoadingData (){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:3000/coffee')
        .then(res => res.json())
        .then(res => {
            setItems(res);
            setLoading(false);
        });
    }, []);
    
    return {
        items,
        loading
    }
};

export default useLoadingData;
