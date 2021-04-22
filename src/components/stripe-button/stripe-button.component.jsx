import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForSripe = price * 100;
    const publishableKey = 'pk_test_51Ij1PmCHgxfjxO2LJIt6CuyKXIJ3kh3sRJU8KQQr0HRJpJ3iY7XrbGmL6OR83T8nVMu5cl1oBt45F2OqYdXECMtt00NkOYARzm';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForSripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;