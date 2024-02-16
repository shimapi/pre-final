import '@shopify/shopify-api/adapters/node'
import { createAdminRestApiClient } from '@shopify/admin-api-client';



const client = createAdminRestApiClient({
  storeDomain: 'altorrelievecl.myshopify.com',
  apiVersion: '2023-04',
  accessToken: process.env.REACT_APP_SHOPIFY_API_KEY,
});


export async function getProducts() {
  const response = await client.get("products");

  if (response.ok) {
    const body = await response.json();
    console.log(body)
  } else {
    console.error(response.statusText);
  }
  return response;
}
