
const TICTO_AUTH_URL = 'https://glados.ticto.cloud/api/security/oauth/token';

async function testAuth() {
  const clientId = 'a14fbd63-4f62-4eef-bc17-7c30172019d5';
  const clientSecret = '1gXMEA4uno57siWyJJJmBjNoLWyGP06iXgKdBa6k7owCv64DVimLXHRxrnns0BgHT';

  console.log('Testing authentication...');
  
  try {
    const response = await fetch(TICTO_AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: '*',
      }),
    });

    const data = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));

    if (data.access_token) {
      console.log('Auth SUCCESS');
      
      console.log('Testing products list...');
      const prodResponse = await fetch('https://glados.ticto.cloud/api/v1/products', {
        headers: {
          'Authorization': `Bearer ${data.access_token}`,
          'Accept': 'application/json',
        }
      });
      
      const prodData = await prodResponse.json();
      console.log('Products Status:', prodResponse.status);
      console.log('Products Data:', JSON.stringify(prodData, null, 2));
    } else {
      console.log('Auth FAILED');
    }
  } catch (err) {
    console.error('Error during test:', err);
  }
}

testAuth();
