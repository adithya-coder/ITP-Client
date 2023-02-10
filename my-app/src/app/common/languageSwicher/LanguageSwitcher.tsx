import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import React, {useContext} from 'react';
import { useState } from 'react';
import i18n from 'i18next';
import customTheme from '../../pages/hooks/custom-theme.module.css'
import {ThemeContext} from "../../ThemeContext";
// import { changeLanguage } from '../../store/application/i18nSlice';
// import { useSelector, useDispatch } from 'react-redux';

const languages = [
	{
		id: 'en',
		title: 'English',
		flag: 'lk'
	},
	{
		id: 'si',
		title: 'සිංහල',
		flag: 'lk'
	},
	{
		id: 'ta',
		title: 'தமிழ்',
		flag: 'lk'
	}
];

function LanguageSwitcher(props: any) {
	// const dispatch = useDispatch();

	const currentLanguage = languages.find(lng => lng.id === i18n.language);

	const [menu, setMenu] = useState(null);

	const langMenuClick = (event: any) => {
		setMenu(event.currentTarget);
	};

	const langMenuClose = () => {
		setMenu(null);
	};

	const {customStyles} = useContext(ThemeContext);

	const {menuItem} = customStyles

	function handleLanguageChange(lng: any) {
		// dispatch(changeLanguage(lng.id));
		i18n.changeLanguage(lng.id);
		langMenuClose();
	}

	return (
		<>
			<Button className="h-40 w-64" onClick={langMenuClick}>
				<Typography className="mx-4 font-semibold uppercase" color="textSecondary">
					{currentLanguage?.title}
				</Typography>
			</Button>

			<Popover
				open={Boolean(menu)}
				anchorEl={menu}
				className={customTheme.languageSwitchDrop}
				onClose={langMenuClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				classes={{
					paper: 'py-8'
				}}
			>
				{languages.map(lng => (
					<MenuItem className={menuItem} key={lng.id} onClick={() => handleLanguageChange(lng)}>
						{/* <ListItemIcon className="min-w-40">
							<img className="min-w-20" src={`assets/images/flags/${lng.flag}.png`} alt={lng.title} />
						</ListItemIcon> */}
						<ListItemText primary={lng.title} />
					</MenuItem>
				))}

				{/* <MenuItem
					component={Link}
					to="/documentation/configuration/multi-language"
					onClick={langMenuClose}
					role="button"
				>
					<ListItemText primary="Learn More" />
				</MenuItem> */}
			</Popover>
		</>
	);
}

export default LanguageSwitcher;
