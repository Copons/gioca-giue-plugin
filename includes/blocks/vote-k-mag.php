<?php

function gioca_giue_vote_k_mag_init() {
	register_block_type( dirname( __DIR__, 2 ) . '/build/vote-k-mag' );
}
add_action( 'init', 'gioca_giue_vote_k_mag_init' );
