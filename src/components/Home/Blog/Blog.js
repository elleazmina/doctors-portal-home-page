import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body d-flex  align-items-center">
        <img className="mx-3" src={blog.authorImage} alt="" width="60" />
        <div>
          <h6 style={{ color: "#1CC7C1" }}>{blog.author}</h6>
          <p className="m-0 text-secondary">{blog.date}</p>
        </div>
      </div>
      <div className="card-body">
        <h5>{blog.title}</h5>
        <p style={{ color: "#3A4256" }} className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla
          officia tenetur consequuntur reiciendis minima maiores fugiat eos
          dolorum amet.
        </p>
      </div>
    </div>
  );
};

export default Blog;
