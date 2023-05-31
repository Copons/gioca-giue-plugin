import classnames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import {
	AlignmentControl,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';

import './editor.scss';

export default function Edit( {
	attributes: { textAlign },
	setAttributes,
	context: { postId, postType },
} ) {
	const postAuthor = useSelect( ( select ) => {
		const { getEditedEntityRecord, getUser } = select( coreStore );
		const authorId = getEditedEntityRecord(
			'postType',
			postType,
			postId
		)?.author;

		return authorId ? getUser( authorId ) : null;
	} );

	const [ authors, setAuthors ] = useState( [] );

	useEffect( () => {
		if ( ! postId ) {
			setAuthors( [
				{
					displayName: 'Autore del Post',
					userNicename: 'autore',
				},
			] );
			return;
		}
		apiFetch( {
			method: 'GET',
			path: `/coauthors/v1/authors/${ postId }`,
		} ).then( ( coauthors ) => setAuthors( coauthors ) );
	}, [ postId ] );

	const blockProps = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );

	if ( ! authors.length && ! postAuthor ) {
		return (
			<div { ...blockProps }>
				<Spinner />
			</div>
		);
	}

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
			<div { ...blockProps }>
				{ !! authors.length &&
					authors.map( ( { displayName, email, userNicename } ) => (
						<span
							className="wp-block-gioca-giue-post-authors-author"
							key={ userNicename }
						>
							{ email ? <a>{ displayName }</a> : displayName }
						</span>
					) ) }
				{ ! authors.length && (
					<a className="wp-block-gioca-giue-post-authors-author">
						{ postAuthor.name }
					</a>
				) }
			</div>
		</>
	);
}
