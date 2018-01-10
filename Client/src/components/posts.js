import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
	const renderPost = post => (
		<div className="column col-6" key={post.id}>
			<div className="card">
				<div className="card-header">
					<h4 className="card-subtitle">{post.title}</h4>
				</div>
				<div className="card-body">{post.content}</div>
				<div className="card-footer">
					<Link
						className="btn btn-primary"
						to={`/view_post/${post.id}`}
					>
						View
					</Link>
				</div>
			</div>
		</div>
	);

	return <div className="columns">{posts.map(renderPost)}</div>;
};

export default Posts;
