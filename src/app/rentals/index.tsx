import rentalsData from '@/data/rentals.json';

export default function RentalsIndex() {
    return <div>{
        rentalsData.map(rental => {
            return <a key={rental.addressStub} href={`rentals/${rental.addressStub}/redirect`}> {rental.address.street} - {rental.title}</a>
        })
    }</div>
}