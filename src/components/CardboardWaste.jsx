
// 📁 src/components/CardboardWaste.jsx
import { useTranslation } from 'react-i18next';
import cardboardIcon from '../assets/bins/cardboard.png';

export default function CardboardWaste() {
	const { t } = useTranslation();
	const examples = t('cardboard.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={cardboardIcon} alt={t('cardboard.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('cardboard.title')}</h2>
				<p className="card-description">{t('cardboard.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('cardboard.tip')}</em></p>
				<p className="card-credit">{t('cardboard.credit')}</p>
			</div>
		</section>
	);
}
