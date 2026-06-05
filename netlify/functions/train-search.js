exports.handler = async (event) => {
  const appId = process.env.TRANSPORT_API_APP_ID;
  const appKey = process.env.TRANSPORT_API_APP_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({
      appIdExists: !!appId,
      appKeyExists: !!appKey
    })
  };
};
