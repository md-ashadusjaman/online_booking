import React from "react";
import quote from '../../assets/quote.jpg';
import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import Review from "./Review";



const Testimonials = () => {

  const reviews = [
    {
      _id:1,
      name: 'Jonson Herry',
      review: '',
      location: 'New York',
      img: people1
    },
    {
      _id:2,
      name: 'Jonson Herry',
      review: '',
      location: 'New York',
      img: people2
    },
    {
      _id:3,
      name: 'Jonson Herry',
      review: '',
      location: 'New York',
      img: people3
    },
    
  ];

  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div><h4 className="text-xl text-primary font-bold">Testimonilas</h4>
        <h2 className="text-3xl">What Our Patients Say</h2>
        </div>
        
        <div><img src={quote} className="w-24 lg:w-42" alt=" "/></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
            ></Review>
          )
        }
      </div>
    </section>
  );
};

export default Testimonials;
