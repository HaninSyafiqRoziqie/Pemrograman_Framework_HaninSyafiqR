import React, { Component } from 'react';
import CartItem from '../cart-item/Cart-item';
import CurrencyFormat from 'react-currency-format';
import { connect } from 'react-redux';
import './Cart.css';

class Cart extends Component {

    state = {
        totalPrice: 0
    }

    componentDidMount() {
        this.updateTotal();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.cartItems !== this.props.cartItems) {
            this.updateTotal();
        }
    }

    updateTotal() {
        let price = 0;
        if (this.props.cartItems.products && this.props.cartItems.products.length > 0) {
            this.props.cartItems.products.map((item) => price = price + item.product.price * item.count);
        }
        this.setState({ totalPrice: price });
    }

    render() {
        return (
            <div className="cart">
                <div className="container">
                    <h1>Keranjang saya</h1>
                    <div className="cart-list">
                        {this.props.cartItems.products && this.props.cartItems.products.length > 0 ? this.props.cartItems.products.map((item) =>
                            <CartItem item={item} />
                        ) : <p>Belum ada yang dimasukkan Keranjang</p>}
                        {this.state.totalPrice > 0 ? <div className="total">
                            {<CurrencyFormat value={this.state.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <p className="price">Total: {value}</p>} />}
                        </div> : null}
                    </div>

                </div>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        products: store.ItemListReducer,
        cartItems: store.CartItemReducer
    }
};

export default connect(mapStoreToProps)(Cart);
