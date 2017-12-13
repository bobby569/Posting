import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chip from 'material-ui/Chip';

const styles = {
	chip: {
		margin: 'auto'
	},
	wrapper: {
		display: 'flex',
		flexWrap: 'wrap'
	}
};

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
		if (!this.props.post) {
			return <div>Loading...</div>;
		}
		const { post: { title, categories, content } } = this.props;
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
				<div className="content">
					<h2>{title}</h2>
					<div>
						<MuiThemeProvider style={styles.wrapper}>
							<Chip style={styles.chip}>{categories}</Chip>
						</MuiThemeProvider>
					</div>
					<div>
						<p>{content}</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
