
import  imageUrlBuilder  from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client  = createClient({
    apiVersion : '2023-05-03',
    dataset: 'production',
    projectId: 'yky1q0nd',
    useCdn:false
})

const buider  = imageUrlBuilder(client)

export function urlFor(source:any){
    return buider.image(source)
}