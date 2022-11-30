import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
   let stripePromise = null

   const getStripe = () => {
      if(!stripePromise) {
         stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
      }
      return stripePromise
   }

   const stripe = await getStripe()

   await stripe.redirectToCheckout({
      shipping_address_collection: {allowed_countries: ['CZ', 'SK']},
      shipping_options: [
         {
           shipping_rate_data: {
             fixed_amount: {amount: 0, currency: 'czk'},
             display_name: 'Doprava zdarma',
             delivery_estimate: {
               minimum: {unit: 'business_day', value: 3},
               maximum: {unit: 'business_day', value: 5},
             },
           },
         },
       ],
      mode: 'payment',
      lineItems,
      successUrl: `${window.location.origin}/objednavka-prijata`,
      cancelUrl: window.location.origin
   })
}