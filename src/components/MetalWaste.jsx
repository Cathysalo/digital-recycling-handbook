// 📁 src/components/MetalWaste.jsx
import { useTranslation } from 'react-i18next';
import metalIcon from '../assets/bins/metal.png';

export default function MetalWaste() {
	const { t } = useTranslation();
	const examples = t('metal.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={metalIcon} alt={t('metal.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('metal.title')}</h2>
				<p className="card-description">{t('metal.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('metal.tip')}</em></p>
				<p className="card-credit">{t('metal.credit')}</p>
			</div>
		</section>
	);
}