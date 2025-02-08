// sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import order from '../sanity/schemaTypes/order'; // Import your order schema

const client = createClient({
  projectId: 'olcp0fa1', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2025-01-14',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;

// Add the order schema to the schema list if needed
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems(),
      S.documentTypeListItem('order').title('Orders'), // Add the Order schema to the list
    ]);
