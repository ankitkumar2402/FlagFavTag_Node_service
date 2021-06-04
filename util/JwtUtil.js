// import jsonwebtoken from 'jsonwebtoken';

const jsonwebtoken = require('jsonwebtoken')


 function parseTenantFromJwt(jsonWebToken) {
	const decodedToken = jsonwebtoken.decode(jsonWebToken);
	const { spid: subjectPolicyId, zid: tenant, typ: tokenType, language: languageCode } = decodedToken;
	return { subjectPolicyId, tenant, tokenType, languageCode };
}

module.exports = {parseTenantFromJwt};