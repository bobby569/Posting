import React from 'react';
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

export default props => (
	<div className="content">
		<h2>{props.post.title}</h2>
		<div>
			<MuiThemeProvider style={styles.wrapper}>
				<Chip style={styles.chip}>{props.post.categories}</Chip>
			</MuiThemeProvider>
		</div>
		<div>
			<p>{props.post.content}</p>
		</div>
	</div>
);
