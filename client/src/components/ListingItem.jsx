import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function ListingItem({ listing }) {
  const {
    imageUrls = [],
    name = 'Unnamed listing',
    address = 'Unknown location',
    description = 'No description available',
    offer,
    discountPrice,
    regularPrice,
    type,
    bedrooms = 0,
    bathrooms = 0,
    _id = '',
  } = listing;

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${_id}`}>
        <img
          src={
            imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt={`${name} cover`}
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>{address}</p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>{description}</p>
          <p className='text-slate-500 mt-2 font-semibold'>
            $
            {offer
              ? discountPrice?.toLocaleString('en-US') || 'N/A'
              : regularPrice?.toLocaleString('en-US') || 'N/A'}
            {type === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {bedrooms > 1 ? `${bedrooms} beds` : `${bedrooms} bed`}
            </div>
            <div className='font-bold text-xs'>
              {bathrooms > 1 ? `${bathrooms} baths` : `${bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Define PropTypes for validation
ListingItem.propTypes = {
  listing: PropTypes.shape({
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
    offer: PropTypes.bool,
    discountPrice: PropTypes.number,
    regularPrice: PropTypes.number,
    type: PropTypes.string,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    _id: PropTypes.string,
  }),
};

// Default props in case some are missing
ListingItem.defaultProps = {
  listing: {
    imageUrls: [],
    name: 'Unnamed listing',
    address: 'Unknown location',
    description: 'No description available',
    offer: false,
    discountPrice: null,
    regularPrice: null,
    type: 'sale',
    bedrooms: 0,
    bathrooms: 0,
    _id: '',
  },
};
