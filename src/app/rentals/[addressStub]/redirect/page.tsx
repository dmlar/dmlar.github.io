import rentalsData from '@/data/rentals.json';
import { redirect } from 'next/navigation'



export async function generateStaticParams() {
  return rentalsData.map(rental => {
    return {addressStub: rental.addressStub}
  });
}

const getPreferredListingUrl = (stub: string|undefined|string[]) => {
    if (Array.isArray(stub)) return;
    const rental = rentalsData.find((rental) => {
        return rental.addressStub.toLowerCase() === stub?.toLowerCase();
    })
    return rental?.zillowListingUrl;
}

export default async function RedirectRental({
  params,
}: {
  params: Promise<{ addressStub: string }>
}) {
  const listingUrl = getPreferredListingUrl((await params).addressStub);
  // Perform logic to determine redirect
  if (listingUrl != null) {
    redirect(listingUrl);
    return null;
  }
  return <div>No listing found</div>;
}