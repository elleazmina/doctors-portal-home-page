import React from 'react';
import Winson from '../../../images/Winson.png';
import Joshy from '../../../images/Joshy.png';
import Tiana from '../../../images/Tiana.png'
import Blog from '../Blog/Blog';

const blogData = [
    {
        title: 'Check atleast a doctor in a year for your teeth',
        description: '',
        author: 'Dr. John Smith',
        authorImage: Tiana,
        date: '12 March, 2019'
    },
    {
        title: 'Two times of brush in a day can keep your teeth healthy',
        description: '',
        author: 'Dr. Hussain Hammad',
        authorImage: Joshy,
        date: '31 August, 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: '',
        author: 'Dr. Christopher Green',
        authorImage: Winson,
        date: '29 July, 2019'
    }

]

const Blogs = () => {
    return (
        <section className="blogs-container mt-5">
        <div className="text-center">
          <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>OUR BLOG</h5>
          <h1 style={{ color: "#3A4256" }}>From Our Blog News</h1>
        </div>
  
        <div className="d-flex justify-content-center">
          {/* <div className="row w-75 mt-5 pt-5"> */}
          <div className="card-deck w-75 mt-5 pt-5">
            {
                blogData.map(blog => <Blog blog={blog}></Blog>)
            }
          </div>
        </div>
      </section>
    );
};

export default Blogs;