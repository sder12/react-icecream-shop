import React, { useState, useEffect } from 'react';
import Item from './Item';
import Loading from './Loading';
import Error from './Error';
import Filter from './Filter';
import axios from 'axios';
const urlApi = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {

    //State: data, loading, error
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const [icecream, setIcecream] = useState([]);
    const [filterIcecream, setFilterIcecream] = useState([]);
    const [clickedFilter, setClickedFilter] = useState('all');
    const btnFilter = (value) => {
        getData()
        setClickedFilter(value);
    }
    const filterProducts = (clickedFilter, icecream) => {
        if (clickedFilter !== "all") {
            const filteredProd = icecream.filter((el) =>
                el.categoria === clickedFilter ? el : ""
            );
            setFilterIcecream(filteredProd);
        }
    }

    //Function call api
    const getData = async () => {
        //prima della chiamata
        setIsLoading(true);
        setIsErr(false);

        //chiamo e salvo dati NB:err
        try {
            const resp = await axios.get(urlApi);
            setIcecream(resp.data.data);
            if (clickedFilter == 'all') {
                setFilterIcecream(resp.data.data);
            }
            filterProducts(clickedFilter, icecream);
        } catch (error) {
            setIsErr(error)
        }
        //dopo chiamata
        setIsLoading(false);
    }
    //Avvio funzione al primo render -> al created
    useEffect(() => {
        getData()
    }, []);

    //Se non ho ancora finito di chiamre = LOADING
    if (isLoading) {
        return <Loading />
    }
    //Se ho chiamto e c'è errore = ERROR
    if (isErr) {
        return <Error />
    }
    //Se tutto è andato a buon fine = map the data
    {
        return (
            <>
                <Filter btnFilter={btnFilter} clickedFilter={clickedFilter} />
                <section className="columns is-centered">
                    <div className="column is-four-fifths">
                        <div className="columns is-flex-direction-row is-flex-wrap-wrap">
                            {
                                filterIcecream.map((el) => {
                                    return (
                                        <Item key={el.id} {...el} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}



export default Menu