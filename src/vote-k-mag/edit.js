import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( {
	attributes: { grafica, fk, qi, sonoro, voto },
	setAttributes,
} ) {
	const onChangeGrafica = ( value ) => setAttributes( { grafica: value } );
	const onChangeQi = ( value ) => setAttributes( { qi: value } );
	const onChangeSonoro = ( value ) => setAttributes( { sonoro: value } );
	const onChangeK = ( value ) => setAttributes( { fk: value } );
	const onChangeVoto = ( value ) => setAttributes( { voto: value } );
	return (
		<>
			<aside { ...useBlockProps() }>
				<div className="wp-block-gioca-giue-vote-k-mag__box">
					<NumberControl
						className="wp-block-gioca-giue-vote-k-mag__vote"
						isDragEnabled={ false }
						max={ 1000 }
						min={ 0 }
						onChange={ onChangeVoto }
						step={ 1 }
						value={ voto }
					/>
					<div className="wp-block-gioca-giue-vote-k-mag__grades">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
						<span>6</span>
						<span>7</span>
						<span>8</span>
						<span>9</span>
						<span>10</span>
					</div>
					<div className="wp-block-gioca-giue-vote-k-mag__bar">
						<div>G</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-k-mag__bar-vote"
							isDragEnabled={ false }
							max={ 10 }
							min={ 0 }
							onChange={ onChangeGrafica }
							step={ 1 }
							value={ grafica }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-k-mag__bar">
						<div>QI</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-k-mag__bar-vote"
							isDragEnabled={ false }
							max={ 10 }
							min={ 0 }
							onChange={ onChangeQi }
							step={ 1 }
							value={ qi }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-k-mag__bar">
						<div>A</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-k-mag__bar-vote"
							isDragEnabled={ false }
							max={ 10 }
							min={ 0 }
							onChange={ onChangeSonoro }
							step={ 1 }
							value={ sonoro }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-k-mag__bar">
						<div>FK</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-k-mag__bar-vote"
							isDragEnabled={ false }
							max={ 10 }
							min={ 0 }
							onChange={ onChangeK }
							step={ 1 }
							value={ fk }
						/>
					</div>
				</div>
			</aside>
			<InspectorControls>
				<PanelBody title={ __( 'Impostazioni Voto', 'gioca-giue' ) }>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto K Mag', 'gioca-giue' ) }
						max={ 1000 }
						min={ 0 }
						onChange={ onChangeVoto }
						step={ 1 }
						value={ voto }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Grafica', 'gioca-giue' ) }
						max={ 10 }
						min={ 0 }
						onChange={ onChangeGrafica }
						step={ 1 }
						value={ grafica }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto QI', 'gioca-giue' ) }
						max={ 10 }
						min={ 0 }
						onChange={ onChangeQi }
						step={ 1 }
						value={ qi }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Sonoro', 'gioca-giue' ) }
						max={ 10 }
						min={ 0 }
						onChange={ onChangeSonoro }
						step={ 1 }
						value={ sonoro }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Fattore K', 'gioca-giue' ) }
						max={ 10 }
						min={ 0 }
						onChange={ onChangeK }
						step={ 1 }
						value={ fk }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
