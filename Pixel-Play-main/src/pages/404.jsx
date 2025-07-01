import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div
			className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden'
			style={{ backgroundImage: `url('/404.png')` }}
		>
			<header className='absolute top-0 left-0 px-4 py-2 bg-black w-full flex items-center h-14'>
				<Link to={"/"}>
					<img
						src='/pixelplay-logo.png'
						alt='Pixel Play'
						className='h-28h-auto max-h-25 md:max-h-30 object-contain' // logo size
					/>
				</Link>
			</header>

			<main className='text-center error-page--content z-10 mt-24 px-4'>
				<h1 className='text-6xl font-bold mb-4'>Lost your way?</h1>
				<p className='mb-6 text-xl max-w-2xl mx-auto'>
					Sorry, we can't find that page. You'll find lots to explore on the home page.
				</p>
				<Link
					to="/"
					className="bg-white text-black font-bold py-3 px-9 rounded hover:bg-gray-200 transition"
				>
					Pixel Play Home
				</Link>
			</main>
		</div>
	);
};

export default NotFoundPage;

