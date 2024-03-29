import React from 'react'
// import SquarePaymentsForm, {
//   CreditCardInput,
// } from 'react-square-web-payments-sdk'

// import { payments } from '@square/web-sdk'


const PaymentForm = () =>{

//   const appId='sq0idp-pRA3qbHrNP1kwMjXoyVAcg'
//   const locationId='L406FWBNYF9AE'

//   async function initializeCard(payments) {
//     const card = await payments.card();
//     await card.attach('#card-container'); 
//     return card; 
//   }

//    // Call this function to send a payment token, buyer name, and other details
//  // to the project server code so that a payment can be created with 
//  // Payments API
//  async function createPayment(token) {
//    debugger
//   const body = JSON.stringify({
//     locationId,
//     sourceId: token,
//   });
//   const paymentResponse = await fetch('/payment', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body,
//   });
//   if (paymentResponse.ok) {
//     return paymentResponse.json();
//   }
//   const errorBody = await paymentResponse.text();
//   throw new Error(errorBody);
// }

// // This function tokenizes a payment method. 
// // The ‘error’ thrown from this async function denotes a failed tokenization,
// // which is due to buyer error (such as an expired card). It is up to the
// // developer to handle the error and provide the buyer the chance to fix
// // their mistakes.
// async function tokenize(paymentMethod) {
//   const tokenResult = await paymentMethod.tokenize();
//   if (tokenResult.status === 'OK') {
//     return tokenResult.token;
//   } else {
//     let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
//     if (tokenResult.errors) {
//       errorMessage += ` and errors: ${JSON.stringify(
//         tokenResult.errors
//       )}`;
//     }
//     throw new Error(errorMessage);
//   }
// }

// // Helper method for displaying the Payment Status on the screen.
// // status is either SUCCESS or FAILURE;
// function displayPaymentResults(status) {
//   const statusContainer = document.getElementById(
//     'payment-status-container'
//   );
//   if (status === 'SUCCESS') {
//     statusContainer.classList.remove('is-failure');
//     statusContainer.classList.add('is-success');
//   } else {
//     statusContainer.classList.remove('is-success');
//     statusContainer.classList.add('is-failure');
//   }

//   statusContainer.style.visibility = 'visible';
// }    

 
//   document.addEventListener('DOMContentLoaded', async function () {
//     if (!window.Square) {
//       throw new Error('Square.js failed to load properly');
//     }
//     const payments = window.Square.payments(appId, locationId);
//     let card;
//     try {
//       card = await initializeCard(payments);
//     } catch (e) {
//       console.error('Initializing Card failed', e);
//       return;
//     }
  
//     async function handlePaymentMethodSubmission(event, paymentMethod) {
//       event.preventDefault();
//       debugger
//       try {
//         // disable the submit button as we await tokenization and make a
//         // payment request.
//         cardButton.disabled = true;
//         const token = await tokenize(paymentMethod);
//         const paymentResults = await createPayment(token);
//         displayPaymentResults('SUCCESS');
   
//         console.debug('Payment Success', paymentResults);
//       } catch (e) {
//         cardButton.disabled = false;
//         displayPaymentResults('FAILURE');
//         console.error(e.message);
//       }
//     }
   
//     const cardButton = document.getElementById(
//       'card-button'
//     );
//     cardButton.addEventListener('click', async function (event) {
//       debugger
//       await handlePaymentMethodSubmission(event, card);
//     });
   
//   });


  

      

  return (
    <div>
      <form id="payment-form">
        <div id="card-container"></div>
        <button id="card-button" type="button">Pay $1.00</button>
      </form>
      <div id="payment-status-container"></div>
    </div>
  )


}

export default PaymentForm

