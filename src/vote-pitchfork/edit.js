import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( { attributes: { voto }, setAttributes } ) {
	const onChange = ( value ) => setAttributes( { voto: value } );
	return (
		<>
			<aside { ...useBlockProps() }>
				<div className="wp-block-gioca-giue-vote-pitchfork__vote">
					<NumberControl
						isDragEnabled={ false }
						max={ 10.0 }
						min={ 0.0 }
						onChange={ onChange }
						step={ 0.1 }
						value={ voto }
					/>
				</div>
			</aside>
			<InspectorControls>
				<PanelBody title={ __( 'Impostazioni Voto', 'gioca-giue' ) }>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Pitchfork', 'gioca-giue' ) }
						max={ 10.0 }
						min={ 0.0 }
						onChange={ onChange }
						step={ 0.1 }
						value={ voto }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
