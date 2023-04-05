import React from 'react';
import Item from './Item';
import axios from 'axios';
const urlApi = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
    return (
        <div>
            Menu
            <Item />
        </div>
    )
}

export default Menu