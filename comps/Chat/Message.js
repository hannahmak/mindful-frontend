import React from 'react';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const readIconColor = grey['400'];

const Message = ({ message, isMyMessage, isSeen }) => {
	return (
		<Stack
			direction="row"
			justifyContent={isMyMessage ? 'flex-end' : 'flex-start'}
		>
			<Stack
				alignItems="center"
				direction="row"
				py={2}
				px={3}
				spacing={1}
				sx={{
					background: isMyMessage ? '#9e90cb' : '#584e97',
					maxWidth: '90%',
					borderRadius: 6,
				}}
			>
				<Typography
					color="white"
					textAlign={isMyMessage ? 'end' : 'start'}
					fontSize={14}
				>
					{message}
				</Typography>

				{isMyMessage ? (
					isSeen ? (
						<CheckCircleIcon
							sx={{ color: '#bdbdbd', fontSize: 12 }}
						/>
					) : (
						<CheckCircleOutlineIcon
							sx={{ color: '#bdbdbd', fontSize: 12 }}
						/>
					)
				) : null}
			</Stack>
		</Stack>
	);
};

export default Message;
