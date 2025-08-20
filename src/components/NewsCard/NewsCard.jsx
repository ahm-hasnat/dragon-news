import React from 'react';
import { HiOutlineBookmark } from "react-icons/hi2";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import moment from 'moment';
import { useState } from 'react';

const NewsCard = ({news}) => {
  const [showFullText, setShowFullText] = useState(false);

   const {title, image_url, details, author, total_view,rating} = news;

 
    return (
        <div>
            <div className='flex bg-[#F3F3F3] rounded-xs gap-2 p-2 
            justify-between items-center mb-3'>
               <div className='flex gap-4 items-center'>
                 <img className='w-12 rounded-full' src={author.img} alt="" />
                 <div>
                    <h2 className='text-primary text-base font-semibold'>
                        {author.name}
                    </h2>
                    <p className='text-secondary text-sm font-light'>
                       {moment(author?.published_date).format("YYYY-MM-DD")}
                    </p>
                 </div>
               </div>
               <div className='flex gap-2 text-lg'>
                 <HiOutlineBookmark />
                 <CiShare2 />
               </div>
            </div>
            <div className='card mb-1'>
              <h1 className='text-xl text-primary mb-3 font-bold'>{title}</h1>
              <img src={image_url} alt="" />
        <div className="p-4 text-sm text-gray-600">
          {details.length > 150 && !showFullText
            ? (
              <>
                {details.slice(0, 150)}...
               <div>
                <button
                  onClick={() => setShowFullText(true)}
                  className="text-orange-500 font-semibold
                  hover:underline cursor-pointer ml-1"
                >
                  Read More
                </button>
                </div>
              </>
            )
            : (
              <>
                {details}
                {details.length > 150 && (
                 <div>
                 <button
                    onClick={() => setShowFullText(false)}
                    className="text-orange-500 font-semibold
                    hover:underline cursor-pointer ml-1"
                  >
                    Show Less
                  </button>
                  </div>
                )}
              </>
            )
          }
       
      </div>
             
            </div>
            <div className='card shadow mb-10 p-3 border-base-200 flex 
            justify-between flex-row '>
                <div className='flex items-center gap-4 '>
              <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) =>
            i < rating?.number && <FaStar key={i} /> 
            )}
          </div>
          <p>{rating.number}</p>
        </div>
          <div className='flex gap-2 items-center'>
            <MdOutlineRemoveRedEye />
            {total_view}
          </div>
        </div>
        </div>
    );
};

export default NewsCard;