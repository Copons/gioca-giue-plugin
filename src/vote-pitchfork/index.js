import { registerBlockType } from '@wordpress/blocks';

import giocaGiueIcon from '../icon';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save,
	icon: giocaGiueIcon,
} );
