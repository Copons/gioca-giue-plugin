import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';

export default function Edit( {
	attributes: {
		piattaforma,
		grafica,
		graficaVoto,
		sonoro,
		sonoroVoto,
		giocabilita,
		giocabilitaVoto,
		sviluppatore,
		voto,
	},
	setAttributes,
} ) {
	const onChangePiattaforma = ( value ) =>
		setAttributes( { piattaforma: value } );
	const onChangeGrafica = ( value ) => setAttributes( { grafica: value } );
	const onChangeGraficaVoto = ( value ) =>
		setAttributes( { graficaVoto: value } );
	const onChangeSonoro = ( value ) => setAttributes( { sonoro: value } );
	const onChangeSonoroVoto = ( value ) =>
		setAttributes( { sonoroVoto: value } );
	const onChangeGiocabilita = ( value ) =>
		setAttributes( { giocabilita: value } );
	const onChangeGiocabilitaVoto = ( value ) =>
		setAttributes( { giocabilitaVoto: value } );
	const onChangeSviluppatore = ( value ) =>
		setAttributes( { sviluppatore: value } );
	const onChangeVoto = ( value ) => setAttributes( { voto: value } );

	return (
		<>
			<aside { ...useBlockProps() }>
				<div className="wp-block-gioca-giue-vote-consolemania__box">
					<div className="wp-block-gioca-giue-vote-consolemania__details">
						<TextControl
							onChange={ onChangePiattaforma }
							placeholder={ __( 'Piattaforma', 'gioca-giue' ) }
							value={ piattaforma }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__row">
						<div>
							<div className="wp-block-gioca-giue-vote-consolemania__row-label">
								{ __( 'Grafica', 'gioca-giue' ) }
							</div>
							<RichText
								allowedFormats={ [] }
								onChange={ onChangeGrafica }
								placeholder={ __(
									'Grafica (+ o -)',
									'gioca-giue'
								) }
								value={ grafica }
							/>
						</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-consolemania__vote"
							isDragEnabled={ false }
							max={ 100 }
							min={ 0 }
							onChange={ onChangeGraficaVoto }
							step={ 1 }
							value={ graficaVoto }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__row">
						<div>
							<div className="wp-block-gioca-giue-vote-consolemania__row-label">
								{ __( 'Sonoro', 'gioca-giue' ) }
							</div>
							<RichText
								allowedFormats={ [] }
								onChange={ onChangeSonoro }
								placeholder={ __(
									'Sonoro (+ o -)',
									'gioca-giue'
								) }
								value={ sonoro }
							/>
						</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-consolemania__vote"
							isDragEnabled={ false }
							max={ 100 }
							min={ 0 }
							onChange={ onChangeSonoroVoto }
							step={ 1 }
							value={ sonoroVoto }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__row">
						<div>
							<div className="wp-block-gioca-giue-vote-consolemania__row-label">
								{ __( 'Giocabilità', 'gioca-giue' ) }
							</div>
							<RichText
								allowedFormats={ [] }
								onChange={ onChangeGiocabilita }
								placeholder={ __(
									'Giocabilità (+ o -)',
									'gioca-giue'
								) }
								value={ giocabilita }
							/>
						</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-consolemania__vote"
							isDragEnabled={ false }
							max={ 100 }
							min={ 0 }
							onChange={ onChangeGiocabilitaVoto }
							step={ 1 }
							value={ giocabilitaVoto }
						/>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__row">
						<div className="wp-block-gioca-giue-vote-consolemania__details">
							<TextControl
								onChange={ onChangeSviluppatore }
								placeholder={ __(
									'Sviluppatore',
									'gioca-giue'
								) }
								value={ sviluppatore }
							/>
						</div>
						<NumberControl
							className="wp-block-gioca-giue-vote-consolemania__vote"
							isDragEnabled={ false }
							max={ 100 }
							min={ 0 }
							onChange={ onChangeVoto }
							step={ 1 }
							value={ voto }
						/>
					</div>
				</div>
			</aside>
			<InspectorControls>
				<PanelBody title={ __( 'Impostazioni Voto', 'gioca-giue' ) }>
					<TextControl
						label={ __( 'Piattaforma', 'gioca-giue' ) }
						onChange={ onChangePiattaforma }
						value={ piattaforma }
					/>
					<RichText
						onChange={ onChangeGrafica }
						label={ __( 'Grafica (+ o -)', 'gioca-giue' ) }
						value={ grafica }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Grafica', 'gioca-giue' ) }
						max={ 100 }
						min={ 0 }
						onChange={ onChangeGraficaVoto }
						step={ 1 }
						value={ graficaVoto }
					/>
					<RichText
						onChange={ onChangeSonoro }
						label={ __( 'Sonoro (+ o -)', 'gioca-giue' ) }
						value={ sonoro }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Sonoro', 'gioca-giue' ) }
						max={ 100 }
						min={ 0 }
						onChange={ onChangeSonoroVoto }
						step={ 1 }
						value={ sonoroVoto }
					/>
					<RichText
						onChange={ onChangeGiocabilita }
						label={ __( 'Giocabilità (+ o -)', 'gioca-giue' ) }
						value={ giocabilita }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Giocabilità', 'gioca-giue' ) }
						max={ 100 }
						min={ 0 }
						onChange={ onChangeGiocabilitaVoto }
						step={ 1 }
						value={ giocabilitaVoto }
					/>
					<TextControl
						label={ __( 'Sviluppatore', 'gioca-giue' ) }
						onChange={ onChangeSviluppatore }
						value={ sviluppatore }
					/>
					<NumberControl
						isDragEnabled={ false }
						label={ __( 'Voto Consolemania', 'gioca-giue' ) }
						max={ 100 }
						min={ 0 }
						onChange={ onChangeVoto }
						step={ 1 }
						value={ voto }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
