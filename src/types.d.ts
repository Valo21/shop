interface ProductProps {
    id: string
    name: string
    imageURL: string
    price: number
}

interface CartProduct {
    id: string | string[]
    name: string
    price: number
}

interface UserCredentials {
    id: string
}