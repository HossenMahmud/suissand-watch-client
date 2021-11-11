import React, { useEffect, useState } from 'react';
import './Blog.css';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogFakeData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div className='blog-bg py-5'>
            <div className="container">
                <div className="blog-title">
                    <h1>Read Our Lastest News</h1>
                </div>
                <div className="row">
                    {
                        blogs.map(blog => <div key={blog.id} className="col-lg-4 col-12 col-sm-12 col-md-4 text-start mb-5">
                            <div className="blog-item">
                                <img className='img-fluid' src={blog.img} alt="" />
                                <div className="blog-item-info">
                                    <h5>{blog.title}</h5>
                                    <p>BY <span className='author-name'>{blog.author}</span> {blog.date}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="row subscribe-part mt-5">
                    <div className="col-lg-6 text-start">
                        <h4 className='text-white'>Join Our </h4>
                        <h4 className='subscibe-content'>Newsletter Now</h4>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Yours Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-warning" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;