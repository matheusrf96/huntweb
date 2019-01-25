import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

export default class Main extends Component {
    state = {
        products: [],
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({products: response.data.docs});
    };

    render(){
        const { products } = this.state;

        return (
            <div className="product-list">
                {products.map(item => (
                    <article key={item._id}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                        <a href='{item.url}'>Acessar</a>
                    </article>
                ))}
            </div>
        );
    }
}