import classnames from 'classnames';
import { useBlockProps } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit( { attributes: { textAlign }, setAttributes } ) {
	const authors = useSelect( ( select ) => {
		const { getUsers } = select( coreStore );
		return (
			getUsers( {
				who: 'authors',
				per_page: 100,
				context: 'view',
			} ) || []
		);
	} );

	const blockProps = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	if ( ! authors.length ) {
		return (
			<div { ...blockProps }>
				<Spinner />
			</div>
		);
	}

	return (
		<ul { ...blockProps }>
			{ authors.map( ( { id, name } ) => (
				<li className="wp-block-gioca-giue-authors-author" key={ id }>
					<a>{ name }</a>
				</li>
			) ) }
		</ul>
	);
}
