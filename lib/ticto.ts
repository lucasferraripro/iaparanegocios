
/**
 * Ticto API Service
 * Handles authentication and product management via Ticto Glados API
 */

const TICTO_AUTH_URL = 'https://glados.ticto.cloud/api/security/oauth/token';
const TICTO_BASE_URL = 'https://glados.ticto.cloud/api/v1';

interface TictoTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export class TictoService {
  private static accessToken: string | null = null;
  private static tokenExpiry: number | null = null;

  /**
   * Get OAuth2 Access Token
   */
  private static async getAccessToken(): Promise<string> {
    const now = Date.now();
    if (this.accessToken && this.tokenExpiry && now < this.tokenExpiry) {
      return this.accessToken;
    }

    const clientId = process.env.TICTO_CLIENT_ID;
    const clientSecret = process.env.TICTO_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      throw new Error('TICTO_CLIENT_ID or TICTO_CLIENT_SECRET not configured');
    }

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

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to authenticate with Ticto: ${error}`);
    }

    const data: TictoTokenResponse = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = now + (data.expires_in * 1000) - 60000; // 1 min buffer

    return this.accessToken;
  }

  /**
   * Fetch products from Ticto
   */
  static async getProducts() {
    const token = await this.getAccessToken();
    const response = await fetch(`${TICTO_BASE_URL}/products`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to fetch products: ${error}`);
    }

    return await response.json();
  }

  /**
   * Update a product (e.g. photo, description)
   */
  static async updateProduct(productId: string, data: any) {
    const token = await this.getAccessToken();
    const response = await fetch(`${TICTO_BASE_URL}/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to update product ${productId}: ${error}`);
    }

    return await response.json();
  }
}
