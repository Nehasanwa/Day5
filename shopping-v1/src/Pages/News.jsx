import React from 'react'
import CustomButton from '../components/CustomButton'

function News() {
    const newsArticle = {
        title: 'A Theft',
        author: 'Neha',
        date: '22 October',
        time: '4 PM',
        description: 'Sample description'
    }
    const name = "Sanwal"
    return (
        <div>
            
            <h1> This is the News Page</h1>
            <marquee>News Page</marquee>
            <CustomButton />
            <p>{newsArticle.title}</p>
            <p>{newsArticle.time}</p>
        </div>
      )
    }

export default News