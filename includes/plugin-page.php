<?php

function gioca_giue_plugin_page() {
	add_submenu_page(
		'tools.php',
		__( 'Gioca Giuè', 'gioca-giue' ),
		__( 'Gioca Giuè', 'gioca-giue' ),
        'manage_options',
		'gioca-giue',
		'gioca_giue_submenu_page',
	);
}
add_action( 'admin_menu', 'gioca_giue_plugin_page' );

function gioca_giue_submenu_page() {
	?>
<div class="wrap">
	<h1><?php esc_html_e( 'Gioca Giuè', 'gioca-giue' ); ?></h1>

	<h2><?php esc_html_e( 'Posts with Payoff (OLD)', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_payoff(); ?>

	<h2><?php esc_html_e( 'Posts with Yoast Metadesc', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_yoast_metadesc(); ?>

	<h2><?php esc_html_e( 'Posts with Pitchfork Vote', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_pitchfork_vote(); ?>

	<h2><?php esc_html_e( 'Posts with K Mag Vote', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_k_mag_vote(); ?>

	<h2><?php esc_html_e( 'Posts with Consolemania Vote', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_consolemania_vote(); ?>

	<h2><?php esc_html_e( 'Posts with Payoff (NEW)', 'gioca-giue' ); ?></h2>
	<?php gioca_giue_posts_with_gioca_giue_payoff(); ?>
</div>
	<?php
}

function gioca_giue_posts_with_payoff() {
	$fields = [ 'ID', 'Title', 'Payoff' ];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => 'copons_payoff',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, 'copons_payoff', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}

function gioca_giue_posts_with_yoast_metadesc() {
	$fields = [ 'ID', 'Title', 'Yoast Metadesc' ];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => '_yoast_wpseo_metadesc',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, '_yoast_wpseo_metadesc', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}

function gioca_giue_posts_with_pitchfork_vote() {
	$fields = [ 'ID', 'Title', 'Vote' ];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => 'pitchfork_vote',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, 'pitchfork_vote', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}

function gioca_giue_posts_with_k_mag_vote() {
	$fields = [ 'ID', 'Title', 'Vote', 'G', 'QI', 'A', 'FK' ];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => 'kmag_vote',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, 'kmag_vote', true ),
			get_post_meta( $p->ID, 'kmag_grafica', true ),
			get_post_meta( $p->ID, 'kmag_qi', true ),
			get_post_meta( $p->ID, 'kmag_sonoro', true ),
			get_post_meta( $p->ID, 'kmag_k', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}

function gioca_giue_posts_with_consolemania_vote() {
	$fields = [
		'ID',
		'Title',
		'Piattaforma',
		'Grafica',
		'G_Voto',
		'Sonoro',
		'S_Voto',
		'Giocabilità',
		'Gi_Voto',
		'Sviluppatore',
		'Voto'
	];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => 'cm_vote',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, 'cm_piattaforma', true ),
			sprintf(
				'<p>%s</p><p>%s</p><p>%s</p>',
				get_post_meta( $p->ID, 'cm_grafica1', true ),
				get_post_meta( $p->ID, 'cm_grafica2', true ),
				get_post_meta( $p->ID, 'cm_grafica3', true ),
			),
			get_post_meta( $p->ID, 'cm_grafica_voto', true ),
			sprintf(
				'<p>%s</p><p>%s</p><p>%s</p>',
				get_post_meta( $p->ID, 'cm_sonoro1', true ),
				get_post_meta( $p->ID, 'cm_sonoro2', true ),
				get_post_meta( $p->ID, 'cm_sonoro3', true ),
			),
			get_post_meta( $p->ID, 'cm_sonoro_voto', true ),
			sprintf(
				'<p>%s</p><p>%s</p><p>%s</p>',
				get_post_meta( $p->ID, 'cm_gioc1', true ),
				get_post_meta( $p->ID, 'cm_gioc2', true ),
				get_post_meta( $p->ID, 'cm_gioc3', true ),
			),
			get_post_meta( $p->ID, 'cm_gioc_voto', true ),
			get_post_meta( $p->ID, 'cm_sviluppatore', true ),
			get_post_meta( $p->ID, 'cm_vote', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}

function gioca_giue_posts_with_gioca_giue_payoff() {
	$fields = [ 'ID', 'Title', 'Payoff' ];
	$data = [];
	$q = new WP_Query( [
		'post_type' => 'post',
		'posts_per_page' => -1,
		'order' => 'ASC',
		'meta_query' => [
			[
				'key' => 'gioca_giue_payoff',
				'value' => '',
				'compare' => '!=',
			]
		],
	] );
	foreach( $q->posts as $p ) {
		$data[] = [
			gioca_giue_get_id_field( $p ),
			get_the_title( $p ),
			get_post_meta( $p->ID, 'gioca_giue_payoff', true ),
		];
	}
	gioca_giue_print_table( $fields, $data );
}


/* UTILS */

function gioca_giue_print_table( $fields, $data ) {
	?>
<table class="widefat striped">
	<thead>
		<tr>
			<?php foreach( $fields as $field ) : ?>
				<th><?php echo esc_html( $field ); ?></th>
			<?php endforeach; ?>
		</tr>
	</thead>
	<tbody>
		<?php foreach( $data as $key => $row ) : ?>
			<tr>
				<?php foreach( $row as $cell ) :?>
					<td><?php echo $cell; ?></td>
				<?php endforeach; ?>
			</tr>
		<?php endforeach; ?>
	</tbody>
</table>
	<?php
}

function gioca_giue_get_id_field( $post ) {
	return sprintf(
		'<a href="%s">[id:%s]</a>',
		get_edit_post_link( $post ),
		$post->ID
	);
}
