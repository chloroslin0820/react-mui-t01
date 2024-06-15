import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        const storage = localStorage.getItem('myCart');
        const cart = storage != undefined ? JSON.parse(storage) : [];
        const cartAmount = cart.length;

        this.state = {
            items: cart,
            size: cartAmount,
            increment : (value) => {
                const { items } = this.state;
                const updatedItems = [...items, value];
                this.setState({ 
                    items: updatedItems, 
                    size: this.state.items.length 
                }),
                this.state.saveToLocalCache();
            },
            saveToLocalCache: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.items));
            }
        };
    }
    
    render() {

        return ( 
            <CartContext.Provider value={{...this.state, ...this.increment}}>
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;