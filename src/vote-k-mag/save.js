import { useBlockProps } from '@wordpress/block-editor';

export default function save( {
	attributes: { grafica, fk, qi, sonoro, voto },
} ) {
	return (
		<aside { ...useBlockProps.save() }>
			<div className="wp-block-gioca-giue-vote-k-mag__box">
				<div className="wp-block-gioca-giue-vote-k-mag__vote">
					{ voto }
				</div>
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
				<div
					className={ `wp-block-gioca-giue-vote-k-mag__bar is-${ grafica }` }
				>
					<div>G</div>
				</div>
				<div
					className={ `wp-block-gioca-giue-vote-k-mag__bar is-${ qi }` }
				>
					<div>QI</div>
				</div>
				<div
					className={ `wp-block-gioca-giue-vote-k-mag__bar is-${ sonoro }` }
				>
					<div>A</div>
				</div>
				<div
					className={ `wp-block-gioca-giue-vote-k-mag__bar is-${ fk }` }
				>
					<div>FK</div>
				</div>
			</div>
		</aside>
	);
}
