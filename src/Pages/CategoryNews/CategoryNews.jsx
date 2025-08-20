import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {

    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const newsId = parseInt(id);
    const news = useLoaderData();

    useEffect(() => {
        if(newsId === 0) {
            setCategoryNews(news);
        }
        else if(newsId === 1) {
            const filteredNews = news.filter(n => n.others.is_today_pick === true);
            setCategoryNews(filteredNews);
        }
        else{
            const filteredNews = news.filter(n => n.category_id === newsId);
            setCategoryNews(filteredNews);
        }

    }, [news,newsId]);

    return (
        <div>
          {categoryNews.map(news => (

             <NewsCard key={news.id} news={news}></NewsCard>

          ))}
        </div>
    );
};

export default CategoryNews;