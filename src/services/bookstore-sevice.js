export default class BookStoreSevice {

    data = [
        { 
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fow',
            price: 200
        },
        {
            id: 2,
            title: 'Release It',
            author: 'Mikle',
            price: 300
        }
    ]

    getBooks() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}