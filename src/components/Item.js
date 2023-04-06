import React from 'react'

const Item = (props) => {
    //Cambiare nome 
    let nameIcecream;
    if (props.nome === 'Testicolo di Orco') {
        nameIcecream = 'Stracciatella'
    } else {
        nameIcecream = props.nome
    }
    //Custom le card in base alla categoria
    let category;
    let imgCategory;
    if (props.categoria === 'cono') {
        category = 'has-text-primary';
        imgCategory = (<img src="https://i.pinimg.com/564x/1e/8f/36/1e8f36e82cde16ea09dbc7f45828303b.jpg" alt="Placeholder image" />)
    } else if (props.categoria === 'coppetta') {
        category = 'has-text-danger';
        imgCategory = (<img src="https://i.pinimg.com/564x/1c/b0/bd/1cb0bdc807d32dee72cc5e1b8bc1a637.jpg" alt="Placeholder image" />)
    } else if (props.categoria === 'stick') {
        category = "has-text-info";
        imgCategory = (<img src="https://i.pinimg.com/564x/54/3f/ff/543fffc70454276511c3f47345e8b757.jpg" alt="Placeholder image" />)
    } else {
        category = "has-text-warning"
        imgCategory = (<img src="https://i.pinimg.com/564x/1e/8f/36/1e8f36e82cde16ea09dbc7f45828303b.jpg" alt="Placeholder image" />)
    }
    //RETURN
    return (
        <div className="column is-half">
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                {imgCategory}
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className={`title is-4 ${category}`}>   {nameIcecream}</p>
                            <p className="subtitle is-6">{props.prezzo}$</p>
                        </div>
                    </div>

                    <div className="content">
                        <p> {props.descrizione}</p>
                    </div>

                    <div className="card-image ">
                        <figure className="image is-4by3">
                            <img src={props.img} alt={props.nome} />
                        </figure>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Item