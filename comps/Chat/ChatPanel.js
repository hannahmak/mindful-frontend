import React from 'react';

import { Badge, Stack, Typography, Avatar } from '@mui/material';
import { Box } from '@mui/system';

const ChatPanel = ({
	image,
	partnerName,
	message,
	lastMessage,
	onClick,
	unread,
}) => {
	const renderLastMinute = () => {
		if (lastMessage / 60 > 1) {
			return `${Math.ceil(lastMessage / 60)} hours`;
		}

		return `${lastMessage} minutes`;
	};

	return (
		<Stack
			onClick={onClick}
			alignItems="center"
			direction="row"
			spacing={1}
			py={1}
			sx={{ cursor: 'pointer', borderBottom: '1px solid #505496' }}
		>
			<Box sx={{ width: '15%' }}>
				<Avatar
					alt={partnerName}
					src={image}
					sx={{
						background: '#303351',
						width: 50,
						height: 50,
					}}
				/>
			</Box>

			<Stack sx={{ width: '60%', textOverflow: 'ellipsis' }}>
				<Typography color="white">{partnerName}</Typography>
				<Typography
					color="white"
					fontSize={13}
					sx={{
						width: '100%',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					{message}
				</Typography>
			</Stack>

			<Stack sx={{ width: '15%' }} alignItems="center" spacing={0.5}>
				<Typography
					color="white"
					fontSize={13}
					sx={{
						width: '100%',
						whiteSpace: 'nowrap',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
				>
					{lastMessage ? renderLastMinute() : ''}
				</Typography>

				{unread > 0 && (
					<Stack
						alignItems="center"
						justifyContent="center"
						sx={{
							background: 'white',
							borderRadius: '100%',
							height: 20,
							width: 20,
						}}
					>
						<Typography sx={{ fontSize: 12, color: '#50549c' }}>
							{unread}
						</Typography>
					</Stack>
				)}
			</Stack>
		</Stack>
	);
};

export default ChatPanel;
