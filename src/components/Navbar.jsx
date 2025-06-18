import { Link } from 'react-router-dom';

const navItems = [
	{ to: '/', label: 'Home' },
	{ to: '/bio', label: 'Bio Waste' },
	{ to: '/plastic', label: 'Plastic Waste' },
	{ to: '/mixed', label: 'Mixed Waste' },
	{ to: '/paper', label: 'Paper' },
	{ to: '/cardboard', label: 'Cardboard' },
	{ to: '/metal', label: 'Metal' },
	{ to: '/glass', label: 'Glass' },
];

const linkStyle = {
	color: 'white',
	textDecoration: 'none',
	padding: '0.5rem 0.75rem',
	borderRadius: '8px',
	backgroundColor: 'none',
	fontWeight: 'bold',
	fontSize: '0.9rem',
};

export default function Navbar() {
	return (
		<nav style={{
			marginTop: '1rem',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
			gap: '0.75rem'
		}}>
			{navItems.map(({ to, label }) => (
				<Link to={to} key={to} style={linkStyle}>
					{label}
				</Link>
			))}
		</nav>
	);
}
