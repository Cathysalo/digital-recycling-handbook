import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
	const { i18n } = useTranslation();

	const changeLanguage = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<div style={{ marginBottom: '1rem', textAlign: 'right' }}>
			<label htmlFor="language-select" style={{ marginRight: '0.5rem' }}>
				🌐 Language:
			</label>
			<select
				id="language-select"
				onChange={changeLanguage}
				value={i18n.language}
				style={{
					padding: '0.3rem 0.5rem',
					borderRadius: '4px',
					border: '1px solid #ccc',
					fontSize: '1rem'
				}}
			>
				<option value="en">English</option>
				<option value="ru">Русский</option>
				<option value="zh">中文</option>
				<option value="tl">Tagalog</option>
				<option value="si">සිංහල</option>
			</select>
		</div>
	);
}
