enum respondStatus
{
    created = 201 ,
    notFound = 404 ,
    success = 200 ,
    badRequest = 400 ,
    unauthorize = 401 ,
    forbiden = 403 , 
    internalServiceError = 500 ,
    serviceUnavailable = 503 ,
    dataConflict = 409
}

export default respondStatus