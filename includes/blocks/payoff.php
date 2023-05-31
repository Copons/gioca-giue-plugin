<?php

function gioca_giue_payoff_init() {
	gioca_giue_register_payoff_post_meta();
	register_block_type( dirname( __DIR__, 2 ) . '/build/payoff', [
		'render_callback' => 'gioca_giue_payoff_render_callback',
	] );
}
add_action( 'init', 'gioca_giue_payoff_init' );

function gioca_giue_register_payoff_post_meta() {
	register_meta( 'post', 'gioca_giue_payoff', array(
		'show_in_rest' => true,
		'single' => true,
		'type' => 'string',
	) );
}

function gioca_giue_payoff_render_callback( $attributes ) {
	$payoff = get_post_meta( get_the_ID(), 'gioca_giue_payoff', true );

	if ( ! $payoff ) {
		return '';
	}

	$classes = [];
	if ( isset( $attributes['textAlign'] ) ) {
		$classes[] = 'has-text-align-' . $attributes['textAlign'];
	}
	if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
		$classes[] = 'has-link-color';
	}

	$wrapper_attributes = get_block_wrapper_attributes( [
		'class' => implode( ' ', $classes ),
	] );
	return sprintf(
		'<div %s>%s</div>',
		$wrapper_attributes,
		esc_html__( $payoff )
	);
}
