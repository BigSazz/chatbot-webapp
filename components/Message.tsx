import { DocumentData } from 'firebase/firestore';

type Props = {
	message: DocumentData;
};

function Message({ message }: Props) {
	const isBot = message?.user?.name === 'ChatGPT';
	return (
		<div className={`${isBot && "bg-[#434654]"} py-5 text-white`}>
			<div className='flex space-x-5 px-1 max-w-2xl mx-auto'>
				<img
					className='h-8 w-8'
					src={message?.user?.avatar}
					alt='user'
				/>
				<p className='pt-1 text-sm'>{message?.text}</p>
			</div>
		</div>
	);
}

export default Message;
