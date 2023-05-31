import { TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';

import giocaGiueIcon from '../icon';

export default function DocumentSettingPanel() {
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	const payoff = meta?.[ 'gioca_giue_payoff' ];
	const onChange = ( value ) =>
		setMeta( { ...meta, gioca_giue_payoff: value } );
	return (
		<PluginDocumentSettingPanel
			icon={ giocaGiueIcon }
			name="gioca-giue-payoff"
			title={ __( 'Gioca Giuè - Payoff', 'gioca-giue' ) }
		>
			<TextControl
				onChange={ onChange }
				label={ __( "Payoff dell'articolo", 'gioca-giue' ) }
				value={ payoff }
			/>
		</PluginDocumentSettingPanel>
	);
}
