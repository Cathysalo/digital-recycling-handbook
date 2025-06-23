import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bioImg from '../assets/bins/bio.png';
import plasticImg from '../assets/bins/plastic.png';
import mixedImg from '../assets/bins/mixed.png';
import paperImg from '../assets/bins/paper.png';
import cardboardImg from '../assets/bins/cardboard.png';        
import metalImg from '../assets/bins/metal.png';
import glassImg from '../assets/bins/glass.png';

export default function Home() {
	const { t } = useTranslation();

	const sections = [
		{ to: '/bio', key: 'bio', img: bioImg },
		{ to: '/plastic', key: 'plastic', img: plasticImg },
		{ to: '/mixed', key: 'mixed', img: mixedImg },
		{ to: '/paper', key: 'paper', img: paperImg },
		{ to: '/cardboard', key: 'cardboard', img: cardboardImg },
		{ to: '/metal', key: 'metal', img: metalImg },
		{ to: '/glass', key: 'glass', img: glassImg },
	];

	return (
		<div style={{ backgroundColor: '#fff8f0', minHeight: '100vh', fontFamily: 'Inter, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
			<header style={{ backgroundColor: '#006666', color: 'white', padding: '2.5rem 1rem 1.5rem', textAlign: 'center' }}>
				<h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: '700' }}>{t('title')}</h1>
				<p style={{ fontSize: '1rem', opacity: 0.95 }}>{t('intro')}</p>
			</header>

			<div style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '2rem',
				padding: '2rem'
			}}>
				{sections.map(({ to, key, img }, i) => {
					const title = t(`${key}.title`);
					const desc = t(`${key}.description`);
					const shortDesc = desc.length > 100 ? desc.substring(0, 97) + '...' : desc;

					return (
						<Link
							to={to}
							key={i}
							style={{
								textDecoration: 'none',
								color: '#333',
								backgroundColor: '#ffffff',
								borderRadius: '16px',
								boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
								overflow: 'hidden',
								transition: 'all 0.3s ease',
								display: 'flex',
								flexDirection: 'column',
								width: '100%',
								maxWidth: '360px',
								margin: '0 auto',
								minHeight: '520px'
							}}
							onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.015)'}
							onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
						>
							<img
								src={img}
								alt={title}
								style={{
									width: '100%',
									height: '220px',
									objectFit: 'cover',
									borderTopLeftRadius: '16px',
									borderTopRightRadius: '16px'
								}}
							/>
							<div style={{ padding: '1.2rem', flexGrow: 1 }}>
								<h2 style={{ fontSize: '1.1rem', fontWeight: '600', margin: '0.5rem 0' }}>{title}</h2>
								<p style={{ fontSize: '0.9rem', color: '#444', lineHeight: '1.4' }}>{shortDesc}</p>
							</div>
						</Link>
					);
				})}
			</div>

			<footer style={{ textAlign: 'center', fontSize: '1.9rem', color: '#80685b', paddingBottom: '2rem' }}>
				🌍 {t('footer.note') || 'Learn to recycle and keep Finland clean!'}
			</footer>
		</div>
	);
}
