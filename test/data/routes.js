const router = load( 'koa-router' )();

/*************** ACCOUNT *******************/

/*
    body : {
        openId   : string,
        regionId : objectId,
    }
*/
router.post( '/account/signin/wechat',
    queryValidator( {
        body: joi.object().keys( {
            openId: joi.string().required(),
            regionId: joi.objectId().required()
        } )
    } ),
    modelChecker( [
        modelChecker.exist( 'Region._id', 'body.regionId' )
    ] ),
    permissionValidator( {
        public: true
    } ),
    load( '/routes/account/signin/wechat' )
);


/*
    params : {
        _regionId    : objectId
    }
*/
router.get( '/region/:_regionId/login/historys',
    queryValidator( {
        params: joi.object().keys( {
            _regionId: joi.objectId().required()
        } )
    } ),
    modelChecker( [
        modelChecker.exist( 'Region._id', 'params._regionId' )
    ] ),
    permissionValidator( {
        'public': false
    } ),
    load( '/routes/account/signin/history' )
);

/*************** REGION *******************/

/*
    params : {
        _id   : objectId
    }

    body : {
        name   : string,
        state  : string   //'1','2'
    }
*/
router.put( '/region/:_id',
    queryValidator( {
        params: joi.object().keys( {
            _id: joi.objectId().required(),
        } ),
        body: joi.object().keys( {
            name: joi.string(),
            state: joi.string().valid( '1', '2' )
        } )
    } ),
    permissionValidator( {
        'public': false
    } ),
    modelChecker( [
        modelChecker.exist( 'Region._id', 'params._id' )
    ] ),
    load( '/routes/region/put' )
);