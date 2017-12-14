import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import PostContent from './PostContent';

class PostsShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => this.props.history.push('/'));
	}

	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<Link to="/">
					<button className="btn btn-primary pull-xs">Back</button>
				</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>
				<PostContent post={post} />
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
