import {createClient} from 'next-sanity';
import  ImageUrlBuilder  from '@sanity/image-url';

export const client = createClient({
    apiVersion: '2024-10-18',
    dataset: 'production',
    projectId: '4w8vqcnp',
    useCdn: false,
})

const builder = ImageUrlBuilder(client)


export function urlFor(source: any){
    return builder.image(source)
}