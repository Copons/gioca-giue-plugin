import classnames from 'classnames';
import {
	AlignmentControl,
	BlockControls,
	PlainText,
	useBlockProps,
} from '@wordpress/block-editor';
import { useEntityProp } from '@wordpress/core-data';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( {
	attributes: { textAlign },
	setAttributes,
	context: { postId, postType },
} ) {
	const [ meta, setMeta ] = useEntityProp(
		'postType',
		postType || 'post',
		'meta',
		postId
	);
	const payoff = meta?.[ 'gioca_giue_payoff' ];
	const onChange = ( value ) =>
		setMeta( { ...meta, gioca_giue_payoff: value } );

	const blockProps = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
			{ !! postId && (
				<PlainText
					__experimentalVersion={ 2 }
					disableLineBreaks
					onChange={ onChange }
					placeholder={ __( 'Payoff', 'gioca-giue' ) }
					value={ payoff }
					{ ...blockProps }
				/>
			) }
			{ ! postId && <div { ...blockProps }>{ payoff || 'Payoff' }</div> }
		</>
	);
}
