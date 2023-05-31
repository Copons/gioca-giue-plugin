<?php

function gioca_giue_vote_pitchfork_init() {
	register_block_type( dirname( __DIR__, 2 ) . '/build/vote-pitchfork' );
}
add_action( 'init', 'gioca_giue_vote_pitchfork_init' );
