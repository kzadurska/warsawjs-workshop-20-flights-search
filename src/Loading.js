import React from 'react';
const Loading = ({ isLoading }) => {
	if (isLoading) {
		return <span>Loading...</span>
	}

	return null
}

export default Loading