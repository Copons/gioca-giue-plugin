<?php

function gioca_giue_authors_init() {
	register_block_type( dirname( __DIR__, 2 ) . '/build/authors', [
		'render_callback' => 'gioca_giue_authors_render_callback',
	] );
}
add_action( 'init', 'gioca_giue_authors_init' );

function gioca_giue_authors_render_callback( $attributes ) {
	$classes = [];
	if ( isset( $attributes['textAlign'] ) ) {
		$classes[] = 'has-text-align-' . $attributes['textAlign'];
	}
	if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
		$classes[] = 'has-link-color';
	}

	$authors = get_users( [
		'capability' => [ 'edit_posts' ],
		'has_published_posts' => true,
	] );

	$wrapper_attributes = get_block_wrapper_attributes( [
		'class' => implode( ' ', $classes ),
	] );
	ob_start();
	?>
<ul <?php echo $wrapper_attributes; ?>>
	<?php foreach ( $authors as $author ) : ?>
		<li class="wp-block-gioca-giue-authors-author">
			<a

				href="<?php echo esc_url( get_author_posts_url( $author->ID ) ); ?>"
			>
				<?php echo esc_html( $author->display_name ); ?>
			</a>
		</li>
	<?php endforeach; ?>
</ul>
	<?php
	$content = ob_get_contents();
	ob_end_clean();
	return $content;
}
