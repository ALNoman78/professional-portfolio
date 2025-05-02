import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const CategoryCard = () => {
    const { data: news } = useLoaderData()
    return (
        <div className='p-4'>
            <h2>CategoryCard {news.length}</h2>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    news.map((singleNews, idx) => (
                        <NewsCard key={idx} news={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    )
}

CategoryCard.propTypes = {}

export default CategoryCard