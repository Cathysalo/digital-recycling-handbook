// 📁 src/components/GlassWaste.jsx
import { useTranslation } from 'react-i18next';
import glassIcon from '../assets/bins/glass.png';

export default function GlassWaste() {
	const { t } = useTranslation();
	const examples = t('glass.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={glassIcon} alt={t('glass.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('glass.title')}</h2>
				<p className="card-description">{t('glass.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('glass.tip')}</em></p>
				<p className="card-credit">{t('glass.credit')}</p>
			</div>
		</section>
	);
}