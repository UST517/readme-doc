'use strict';

const log4js = load( 'log4js' );

log4js.configure( {
	appenders: load( '/config/log' )
} );

module.exports = {
    get : name =>{
        let logger = log4js.getLogger( name );
        logger.setLevel( 'INFO' );
        return logger;
    }
};