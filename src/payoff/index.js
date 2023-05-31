import { registerBlockType } from '@wordpress/blocks';
import { registerPlugin } from '@wordpress/plugins';

import giocaGiueIcon from '../icon';
import Edit from './edit';
import DocumentSettingPanel from './document-setting-panel';
import metadata from './block.json';
import './style.scss';

registerBlockType( metadata.name, {
	edit: Edit,
	save: () => null,
	icon: giocaGiueIcon,
} );

registerPlugin( 'gioca-giue-document-setting-panel-payoff', {
	render: DocumentSettingPanel,
} );
