// 📁 src/components/PlasticWaste.jsx
import { useTranslation } from 'react-i18next';
import plasticIcon from '../assets/bins/plastic.png';

export default function PlasticWaste() {
	const { t } = useTranslation();
	const examples = t('plastic.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={plasticIcon} alt={t('plastic.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('plastic.title')}</h2>
				<p className="card-description">{t('plastic.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('plastic.tip')}</em></p>
				<p className="card-credit">{t('plastic.credit')}</p>
			</div>
		</section>
	);
}