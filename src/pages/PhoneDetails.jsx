import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import './phonedetails.css';
import Button from '../components/ui/Button';
import { MdBookmarkAdd, MdShoppingCartCheckout } from 'react-icons/md';

const PhoneDetails = () => {
  const phones = useLoaderData();
  const { phoneId } = useParams();

  const singlePhone = phones.find(phone => phone.id === parseInt(phoneId));
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = singlePhone || {};

  return (
    <div className="w-11/12 mx-auto my-8 flex justify-center">
      <div className="md:flex gap-12 font-worksans">
        <div className="flex-[4] p-8 bg-gray-200 flex justify-center items-center rounded-lg">
          <img className="card-img" width="550px" src={image} />
        </div>
        <div className="flex-[6] max-md:mt-4">
          <h1 className="text-4xl font-semibold">{name}</h1>
          <p className=" text-gray-700 font-medium">{brand}</p>
          <p className="my-4 border-y py-2 border-gray-300 font-medium">
            {model}
          </p>
          <p>
            <b>Storage : </b>
            <span className="ml-4 text-indigo-500">
              <span className="p-1 bg-gray-100 mr-2 rounded-2xl">
                {storage[0]}
              </span>
              <span className="p-1 bg-gray-100 rounded-2xl">{storage[1]}</span>
            </span>
          </p>
          <p className="my-4 border-b pb-4 border-gray-300">
            <b>Price :</b>
            <span className="ml-4 text-green-600">
              <span className="p-1 bg-gray-100 mr-2 rounded-2xl">
                {price['256GB'] && `256GB / ${price['256GB']}`}
              </span>
              <span className="p-1 bg-gray-100 rounded-2xl">
                {price['512GB'] && `512GB / ${price['512GB']}`}
              </span>
            </span>
          </p>

          <div>
            <p>
              <b>Description: </b>
              {description}
            </p>
            <p>
              <b>Camera Info: </b>
              {camera_info}
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <Button label={<MdShoppingCartCheckout />} />
            <Button label={<MdBookmarkAdd />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
