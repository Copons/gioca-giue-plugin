import { registerBlockType } from '@wordpress/blocks';

import giocaGiueIcon from '../icon';
import Edit from './edit';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
	icon: giocaGiueIcon,
} );
