// src/components/RentalHouseList.tsx
"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchRentalHouses } from '@/redux/features/rental/rentalAPI';

const RentalHouseList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rentalHouses, loading, error } = useSelector(
    (state: RootState) => state.rental
  );

  useEffect(() => {
    dispatch(fetchRentalHouses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Rental Houses</h2>
      {rentalHouses.length > 0 ? (
        <ul>
          {rentalHouses.map((house, index) => (
            <li key={index}>
              <h3>{house.location}</h3>
              <p>{house.description}</p>
              <p>Rent: ${house.rentAmount}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No rental houses found.</p>
      )}
    </div>
  );
};

export default RentalHouseList;
