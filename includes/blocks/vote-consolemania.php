<?php
function gioca_giue_vote_consolemania_init() {
	register_block_type( dirname( __DIR__, 2 ) . '/build/vote-consolemania' );
}
add_action( 'init', 'gioca_giue_vote_consolemania_init' );
