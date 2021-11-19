import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ChatRoomHeader = ({ isOnline, name, image }) => {
	return (
		<Stack direction="row" spacing={3}>
			<Box>
				<Avatar
					alt={name}
					src={image}
					sx={{
						background: '#303351',
						width: 50,
						height: 50,
					}}
				/>
			</Box>

			<Stack spacing={0.5}>
				<Typography fontSize={18} color="white">
					{name}
				</Typography>

				<Typography color="white" fontSize={11}>
					{isOnline ? 'Online' : ''}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default ChatRoomHeader;
