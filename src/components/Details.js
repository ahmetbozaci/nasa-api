/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import getData from '../redux/searchResult/API';

const Details = () => {
  const oneData = useSelector((state) => state.nasaData.oneData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {oneData && oneData.map((item) => (

        <div key={item.data[0].nasa_id}>
          <p>
            <b>title:</b>
            {item.data[0].title !== undefined ? item.data[0].title : 'Not found'}
          </p>
          <p>
            <b>Photographer&apos;s Name:</b>
            {item.data[0].photographer !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <p>
            <b>İMAGES</b>
            {item.data[0].date_created !== undefined ? item.data[0].date_created : 'Not found'}
            {/* <img alt={item.data[0].title} src={item.href.json()[0]} width="50%" /> */}

          </p>
          <img alt={item.data[0].title} src={item.links[0].href} width="50%" />
          <p>
            <b>Location:</b>
            {item.data[0].location !== undefined ? item.data[0].photographer : 'Not found'}
          </p>
          <p>
            <b>Description:</b>
            {item.data[0].description !== undefined ? item.data[0].description : 'Not found'}
          </p>
          <p>
            <b>Date Created:</b>
            {item.data[0].date_created !== undefined ? item.data[0].date_created : 'Not found'}
          </p>
          <p>
            <b>Keywords:</b>
            {item.data[0].keywords !== undefined ? item.data[0].keywords.join(', ') : 'Not found'}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Details;
