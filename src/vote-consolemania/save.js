import { useBlockProps } from '@wordpress/block-editor';
import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function save( {
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
} ) {
	return (
		<aside { ...useBlockProps.save() }>
			<div className="wp-block-gioca-giue-vote-consolemania__box">
				<div className="wp-block-gioca-giue-vote-consolemania__details">
					{ piattaforma }
				</div>
				<div className="wp-block-gioca-giue-vote-consolemania__row">
					<div>
						<div className="wp-block-gioca-giue-vote-consolemania__row-label">
							{ __( 'Grafica', 'gioca-giue' ) }
						</div>
						<p>
							<RawHTML>{ grafica }</RawHTML>
						</p>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__vote">
						{ graficaVoto }
					</div>
				</div>
				<div className="wp-block-gioca-giue-vote-consolemania__row">
					<div>
						<div className="wp-block-gioca-giue-vote-consolemania__row-label">
							{ __( 'Sonoro', 'gioca-giue' ) }
						</div>
						<p>
							<RawHTML>{ sonoro }</RawHTML>
						</p>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__vote">
						{ sonoroVoto }
					</div>
				</div>
				<div className="wp-block-gioca-giue-vote-consolemania__row">
					<div>
						<div className="wp-block-gioca-giue-vote-consolemania__row-label">
							{ __( 'Giocabilità', 'gioca-giue' ) }
						</div>
						<p>
							<RawHTML>{ giocabilita }</RawHTML>
						</p>
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__vote">
						{ giocabilitaVoto }
					</div>
				</div>
				<div className="wp-block-gioca-giue-vote-consolemania__row">
					<div className="wp-block-gioca-giue-vote-consolemania__details">
						{ sviluppatore }
					</div>
					<div className="wp-block-gioca-giue-vote-consolemania__vote">
						{ voto }
					</div>
				</div>
			</div>
		</aside>
	);
}
