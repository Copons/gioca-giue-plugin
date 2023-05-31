import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes: { voto } } ) {
	return (
		<aside { ...useBlockProps.save() }>
			<div className="wp-block-gioca-giue-vote-pitchfork__vote">
				{ voto }
			</div>
		</aside>
	);
}
