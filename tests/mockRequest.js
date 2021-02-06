const mockRequest = (sessionData, bodyData, paramsData) => {
    return {
        session: { user: sessionData },
        body: bodyData,
        params: paramsData
    };
};

module.exports = mockRequest;