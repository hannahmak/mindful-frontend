import React from 'react';
import { Stack, Typography } from '@mui/material';

const Message = ({ message, isMyMessage }) => {
	return (
		<Stack direction="row" justifyContent={isMyMessage ? 'end' : 'start'}>
			<Typography
				color="white"
				textAlign={isMyMessage ? 'end' : 'start'}
				fontSize={14}
				py={2}
				px={3}
				sx={{
					background: isMyMessage ? '#9e90cb' : '#584e97',
					maxWidth: '90%',
					borderRadius: 6,
				}}
			>
				{message}
			</Typography>
		</Stack>
	);
};

export default Message;
