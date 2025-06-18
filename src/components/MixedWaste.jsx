// 📁 src/components/MixedWaste.jsx
import { useTranslation } from 'react-i18next';
import mixedIcon from '../assets/bins/mixed.png'; // adjust path as needed

export default function MixedWaste() {
	const { t } = useTranslation();
	const examples = t('mixed.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={mixedIcon} alt={t('mixed.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('mixed.title')}</h2>
				<p className="card-description">{t('mixed.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('mixed.tip')}</em></p>
				<p className="card-credit">{t('mixed.credit')}</p>
			</div>
		</section>
	);
}
