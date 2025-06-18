// 📁 src/components/PaperWaste.jsx
import { useTranslation } from 'react-i18next';
import paperIcon from '../assets/bins/paper.png';

export default function PaperWaste() {
	const { t } = useTranslation();
	const examples = t('paper.examples', { returnObjects: true });

	return (
		<section className="card">
			<img src={paperIcon} alt={t('paper.alt')} className="card-img" />
			<div className="card-content">
				<h2 className="card-title">{t('paper.title')}</h2>
				<p className="card-description">{t('paper.description')}</p>
				<ul className="card-list">
					{Array.isArray(examples) && examples.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<p className="card-tip"><em>{t('paper.tip')}</em></p>
				<p className="card-credit">{t('paper.credit')}</p>
			</div>
		</section>
	);
}
