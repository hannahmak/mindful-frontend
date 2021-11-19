import React, { useEffect, useState, useRef } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Avatar, Stack, Typography, TextField, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { io } from 'socket.io-client';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SendIcon from '@mui/icons-material/Send';

import ChatPanel from '../comps/Chat/ChatPanel';
import Message from '../comps/Chat/Message';
import ChatRoomHeader from '../comps/Chat/ChatRoomHeader';

import ChatService from '../services/ChatService';

const socket = io(process.env.NEXT_PUBLIC_BASE_URL);

const ChatPage = () => {
	const { user, error, isLoading } = useUser();
	const newMessageRef = useRef();

	const [isLoadingMessage, setIsLoadingMessage] = useState(true);
	const [isLoadingRoom, setIsLoadingRoom] = useState(true);
	const [isSelectingPartner, setIsSelectingPartner] = useState(false);
	const [keyword, setKeyword] = useState('');
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const [partnerKeyword, setPartnerKeyword] = useState('');
	const [partners, setPartners] = useState([]);
	const [rooms, setRooms] = useState([]);
	const [selectedRoom, setSelectedRoom] = useState(null);

	useEffect(() => {
		(async () => {
			await getChatRooms();
		})();
	}, [keyword]);

	useEffect(() => {
		(async () => {
			if (partnerKeyword.length > 0) {
				await openChoosePartnerPanel();
			}
		})();
	}, [partnerKeyword]);

	useEffect(() => {
		(async () => {
			if (selectedRoom) {
				await getMessagesByRoomId();
			}
		})();
	}, [selectedRoom]);

	socket.on('newMessage', (message) => {
		const newMessages = [...messages];
		newMessages.push(message);

		setMessages(newMessages);
	});

	const createNewChat = async ({ avatar, partnerName, sub }) => {
		try {
			const chatService = new ChatService();

			const response = await chatService.createNewChat({
				owner_sub: user.sub,
				partner_sub: sub,
			});

			openChatRoom({
				partner_name: partnerName,
				partner_avatar: avatar,
				room_id: response.roomid,
			});

			setIsSelectingPartner(false);
		} catch (error) {
			console.error(error.message);
		}
	};

	const getChatRooms = async () => {
		try {
			setIsLoadingRoom(true);
			const chatService = new ChatService();

			const response = await chatService.getChatRooms({
				owner_sub: user.sub,
				keyword,
			});
			setRooms(response);
		} catch (error) {
			console.error(error.message);
		} finally {
			setIsLoadingRoom(false);
		}
	};

	const getMessagesByRoomId = async () => {
		try {
			setIsLoadingMessage(true);
			const chatService = new ChatService();

			const response = await chatService.getMessages({
				room_id: selectedRoom.roomId,
			});

			setMessages(response);
		} catch (error) {
			console.error(error.message);
		} finally {
			setIsLoadingMessage(false);
		}
	};

	const openChoosePartnerPanel = async () => {
		try {
			setIsLoadingRoom(true);

			const chatService = new ChatService();
			const response = await chatService.getPartnerBySubId({
				owner_sub: user.sub,
				keyword: partnerKeyword,
			});
			setPartners(response);

			setIsSelectingPartner(true);
		} catch (error) {
			console.error(error.message);
		} finally {
			setIsLoadingRoom(false);
		}
	};

	const openChatRoom = ({ partner_name, partner_avatar, room_id }) => {
		setSelectedRoom({
			avatar: partner_avatar,
			roomId: room_id,
			partnerName: partner_name,
		});

		socket.emit('join', room_id);
	};

	const sendMessage = async () => {
		try {
			const timestamp = new Date()
				.toISOString()
				.replace(/T/g, ' ')
				.replace(/Z/g, '');
			socket.emit('newMessage', {
				message: newMessage,
				room_id: selectedRoom.roomId,
				sub: user.sub,
				timestamp,
			});

			newMessageRef.current.value = '';
		} catch (error) {
			console.error(error.message);
		}
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	return (
		<Stack
			direction="row"
			py={3}
			sx={{
				boxSizign: 'border-box',
				color: 'white',
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				background:
					'linear-gradient(149deg, rgba(94,98,201,1) 0%, rgba(46,47,75,1) 100%)',
			}}
		>
			<Box sx={{ width: '30%' }} px={5}>
				<Stack spacing={2}>
					<Stack
						alignItems="center"
						direction="row"
						justifyContent="space-between"
						sx={{ maxHeight: '15vh' }}
					>
						<Typography sx={{ color: 'white', fontSize: 24 }}>
							Chat
						</Typography>

						<Stack direction="row">
							{!isSelectingPartner ? (
								<AddOutlinedIcon
									sx={{ cursor: 'pointer' }}
									onClick={openChoosePartnerPanel}
								/>
							) : (
								<ArrowBackIosIcon
									sx={{ cursor: 'pointer' }}
									onClick={() => setIsSelectingPartner(false)}
								/>
							)}
						</Stack>
					</Stack>

					{!isSelectingPartner ? (
						<>
							<TextField
								fullWidth
								id="friend-search"
								placeholder="Search friend..."
								color="secondary"
								onChange={(e) => setKeyword(e.target.value)}
								sx={{
									background:
										'linear-gradient(149deg, rgba(116,118,164,1) 0%, rgba(59,59,90,1) 100%)',
								}}
							/>

							<Stack
								className="chat-panel"
								sx={{ maxHeight: '85vh', overflowY: 'auto' }}
								spacing={3}
							>
								{isLoadingRoom ? (
									new Array(8)
										.fill('')
										.map((_, index) => (
											<Skeleton
												varian="text"
												key={`skltn-key_${index}`}
											/>
										))
								) : rooms.length === 0 ? (
									<Typography sx={{ color: 'white' }}>
										Start chatting with your friend by
										clicking the + icon on top right corner
									</Typography>
								) : (
									rooms.map(
										({
											partner_name,
											partner_avatar,
											last_partner_message,
											last_chat_minute,
											room_id,
										}) => (
											<ChatPanel
												onClick={() =>
													openChatRoom({
														partner_name,
														partner_avatar,

														room_id,
													})
												}
												partnerName={partner_name}
												image={partner_avatar}
												message={last_partner_message}
												lastMessage={last_chat_minute}
												key={`cht-pnl-key_${room_id}`}
											/>
										)
									)
								)}
							</Stack>
						</>
					) : (
						<>
							<TextField
								fullWidth
								id="friend-search"
								placeholder="Choose partner..."
								color="secondary"
								onChange={(e) =>
									setPartnerKeyword(e.target.value)
								}
								sx={{
									background:
										'linear-gradient(149deg, rgba(116,118,164,1) 0%, rgba(59,59,90,1) 100%)',
								}}
							/>

							{partners.map(
								({
									avatar,
									name: partnerName,
									sub,
									...rest
								}) => {
									return (
										<Stack
											alignItems="center"
											spacing={2}
											direction="row"
											key={`partner-${sub}`}
											sx={{ cursor: 'pointer' }}
											onClick={() =>
												createNewChat({
													avatar,
													partnerName,
													sub,
													...rest,
												})
											}
										>
											<Box
												sx={{
													width: '15%',
												}}
											>
												<Avatar
													alt={partnerName}
													src={avatar}
													sx={{
														background: '#303351',
														width: 50,
														height: 50,
													}}
												/>
											</Box>

											<Typography color="white">
												{partnerName}
											</Typography>
										</Stack>
									);
								}
							)}
						</>
					)}
				</Stack>
			</Box>

			<Box sx={{ width: '70%' }} px={5}>
				{!selectedRoom ? (
					<Box />
				) : (
					<Stack spacing={3}>
						<Stack
							alignItems="center"
							direction="row"
							justifyContent="space-between"
							sx={{ maxHeight: '15vh' }}
						>
							<ChatRoomHeader
								name={selectedRoom.partnerName}
								isOnline={true}
								image={selectedRoom.avatar}
							/>
						</Stack>

						<Stack
							className="chat-room"
							sx={{
								maxHeight: '70vh',
								minHeight: '70vh',
								overflowY: 'auto',
								scrollbarWidth: 'none',
							}}
							spacing={3}
						>
							{isLoadingMessage ? (
								new Array(8)
									.fill('')
									.map((_, index) => (
										<Skeleton
											varian="text"
											key={`skltn-key_${index}`}
										/>
									))
							) : messages.length === 0 ? (
								<Typography sx={{ color: 'white' }}>
									Start chatting with your fiend
								</Typography>
							) : (
								messages.map(({ message, sub }, index) => {
									return (
										<Message
											key={`msg-key_${index}`}
											message={message}
											isMyMessage={sub === user.sub}
										/>
									);
								})
							)}
						</Stack>

						<Stack
							direction="row"
							justifyContent="space-between"
							spacing={1}
						>
							<Stack
								sx={{ height: '20vh', bottom: 0, width: '95%' }}
								alignItems="center"
							>
								<TextField
									className="message-input"
									fullWidth
									id="chat-message"
									maxRows={2}
									multiline
									ref={newMessageRef}
									placeholder="Write your message here..."
									color="secondary"
									value={newMessage}
									onChange={(e) =>
										setNewMessage(e.target.value)
									}
									sx={{
										background:
											'linear-gradient(149deg, rgba(116,118,164,1) 0%, rgba(59,59,90,1) 100%)',
									}}
								/>
							</Stack>

							<SendIcon
								onClick={sendMessage}
								sx={{ cursor: 'pointer' }}
							/>
						</Stack>
					</Stack>
				)}
			</Box>
		</Stack>
	);
};

export default withPageAuthRequired(ChatPage);
