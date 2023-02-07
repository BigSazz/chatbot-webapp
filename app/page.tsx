import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

function HomePage() {
	return (
		<div className='flex flex-col items-center justify-center text-white h-screen px-2'>
			<h1 className='text-5xl font-bold mb-20'>ChatBOT</h1>

			<div className='flex space-x-4 text-center'>
				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<SunIcon className='h-8 w-8'/>
						<h2>Examples</h2>
					</div>

					<div className="space-y-2">
						<p className='infoText'>"Explain Something to me"</p>
						<p className='infoText'>"What is the difference between a dog and a cat?"</p>
						<p className='infoText'>"What is the time in the US?"</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<BoltIcon className='h-8 w-8'/>
						<h2>Capabilities</h2>
					</div>

					<div className="space-y-2">
						<p className='infoText'>Change the ChatBOT Model to use</p>
						<p className='infoText'>Messages are stored in Firebase's Firestore</p>
						<p className='infoText'>Hot Toast notifications when ChatBOT is thinking!</p>
					</div>
				</div>

				<div>
					<div className="flex flex-col items-center justify-center mb-5">
						<ExclamationTriangleIcon className='h-8 w-8'/>
						<h2>Limitations</h2>
					</div>

					<div className="space-y-2">
						<p className='infoText'>May occasionally produce incorrect information</p>
						<p className='infoText'>May occasionally produce harmful instruction or biased content</p>
						<p className='infoText'>Limited knowledge of world and events after 2021</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage