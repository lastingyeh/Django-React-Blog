import React from 'react';

const Err = () => {
	console.log('Err Component');
	return (
		<div className="columns">
			<div className="column col-xs-6">
				<span className="label label-error">You have not been authenticated.</span>
			</div>
		</div>
	);
};

export default Err;
