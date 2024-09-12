import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=6');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=6');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=6');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Hero Section */}
      <div className='flex flex-col gap-6 p-8 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-800 font-extrabold text-4xl lg:text-6xl'>
          Discover Your <span className='text-blue-600'>Dream Home</span>
          <br />
          Right Here
        </h1>
        <div className='text-gray-500 text-sm lg:text-lg'>
          Explore our wide range of properties. Whether you are  looking to rent or buy, we have got you covered with exclusive offers and incredible deals.
        </div>
        <Link
          to={'/search'}
          className='text-sm lg:text-base text-blue-800 font-bold hover:underline'
        >
          Start Exploring
        </Link>
      </div>

      {/* Swiper for Offers */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[400px] w-full rounded-lg shadow-lg'
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listings Section */}
      <div className='max-w-6xl mx-auto p-5 flex flex-col gap-12 my-12'>

        {/* Offers Section */}
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='flex justify-between items-center'>
              <h2 className='text-3xl font-bold text-slate-800'>Exclusive Offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                View All Offers
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {offerListings.slice(0, 6).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent Section */}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='flex justify-between items-center'>
              <h2 className='text-3xl font-bold text-slate-800'>Latest Rentals</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                View All Rentals
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {rentListings.slice(0, 6).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Sale Section */}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='flex justify-between items-center'>
              <h2 className='text-3xl font-bold text-slate-800'>Homes for Sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
                View All Homes for Sale
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {saleListings.slice(0, 6).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
