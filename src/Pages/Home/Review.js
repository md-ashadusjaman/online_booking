import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card bg-base-100 lg:max-w-lg shadow-xl">
        <div class="card-body">
          
          <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he chooseIf a dog chews shoes whose shoes does he choose</p>
          
         <div className="flex items-center">
         <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-16 rounded-full ring mr-5">
    <img src={review.img} alt="" />
  </div>
</div>
<div>
        <h4 className="text-xl">{review.name}</h4>   
        <p>{review.location}</p> 
          </div>
         </div>
        </div>
      </div>
    );
};

export default Review;