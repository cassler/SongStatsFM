import React, { Component } from 'react';

class MediaObject extends Component {
	render() {

		// Simplify input of classname when retriving props
		const mediaClassName = "d-flex align-self-" + this.props.align + " mr-3";
		
		return (
			<div className="media">
				<img 
					className={mediaClassName}
					src={this.props.imgSrc} 
					alt={this.props.imgAlt} 
				/>
				<div className="media-body">
					<h5 className="mt-0">{this.props.title}</h5>
					{this.props.text}
				</div>
			</div>
		);
	}
}

MediaObject.propTypes = {
	align: React.PropTypes.string.isRequired,
	imgSrc: React.PropTypes.string.isRequired,
	imgAlt: React.PropTypes.string,
	title: React.PropTypes.string.isRequired,
	text: React.PropTypes.string.isRequired,
	minHeight: React.PropTypes.number,
}

MediaObject.defaultProps = {
	align: "center",
	imgAlt: '',
	title: "Define a title in MediaObject props",
	text: "Define text in MediaObject props",
}

export default MediaObject;