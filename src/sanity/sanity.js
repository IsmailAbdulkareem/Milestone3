import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; // Make sure this is imported

const client = createClient({
  projectId: 'olcp0fa1', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  apiVersion: '2025-01-14',    // Use the API version (set to today's date)
  useCdn: true,                // `true` for faster performance with cached data
});


const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
