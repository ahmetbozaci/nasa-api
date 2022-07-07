import React from 'react';
import { useSelector } from 'react-redux';

const Show = () => {
  const nasa = useSelector((state) => state);
  console.log(nasa);
  return (
    <div>Show</div>);
};

export default Show;
