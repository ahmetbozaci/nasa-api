import React from 'react';
import { useSelector } from 'react-redux';

const Show = () => {
  const nasa = useSelector((state) => state.nasaData);
  return (
    <div>

      {nasa && nasa.map((item) => (

        <div key={item.data[0].nasa_id}>
          <p>
            <b>title:</b>
            {item.data[0].title !== undefined ? item.data[0].title : 'Not found'}
          </p>
          <p>
            <b>location:</b>
            {item.data[0].location !== undefined ? item.data[0].location : 'Not found'}
          </p>
          <p>
            <b>Photographer&apos;s Name:</b>
            {item.data[0].photographer !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <a href="www">
            <img alt={item.data[0].title} src={item.links[0].href} width="50%" />
          </a>
          <p>Show Details</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Show;
