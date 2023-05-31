<?php

function gioca_giue_post_authors_init() {
	register_block_type( dirname( __DIR__, 2 ) . '/build/post-authors', [
		'render_callback' => 'gioca_giue_post_authors_render_callback',
	] );
}
add_action( 'init', 'gioca_giue_post_authors_init' );

function gioca_giue_post_authors_render_callback( $attributes ) {
	$authors = gioca_giue_post_authors_get_authors();

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
	ob_start();
	?>
<div <?php echo $wrapper_attributes; ?>>
	<?php foreach( $authors as $author ) : ?>
		<span class="wp-block-gioca-giue-post-authors-author"><?php
			if ( empty( $author->user_email ) ) {
				echo $author->display_name;
			} else {
				$link_title = sprintf(
					'Visualizza tutti gli articoli di %s',
					$author->display_name
				);
				echo sprintf(
					'<a href="%s" title="%s">%s</a>',
					get_author_posts_url( $author->ID ),
					esc_attr__( $link_title ),
					$author->display_name
				);
			}
		?></span>
	<?php endforeach; ?>
</div>
	<?php
	$content = ob_get_contents();
	ob_end_clean();
	return $content;
}

function gioca_giue_post_authors_get_authors() {
	if ( function_exists( 'get_coauthors' ) ) {
		return get_coauthors();
	}
	return [ get_userdata( get_the_author_meta( 'ID' ) ) ];
}
