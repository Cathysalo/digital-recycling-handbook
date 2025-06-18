// 📁 src/components/BioWaste.jsx
import { useTranslation } from 'react-i18next';
import bioIcon from '../assets/bins/bio.png';
import './BioWaste.css';

export default function BioWaste() {
	const { t } = useTranslation();
	const examples = t('bio.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={bioIcon} alt={t('bio.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('bio.title')}</h2>
				<p className="card-description">{t('bio.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('bio.tip')}</em></p>
				<p className="card-credit">{t('bio.credit')}</p>
			</div>
		</section>
	);
}
// 📁 src/components/BioWaste.css