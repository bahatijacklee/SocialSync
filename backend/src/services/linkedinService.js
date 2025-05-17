const axios = require('axios');

// Fetch LinkedIn analytics for a user or organization
async function getAccountAnalytics(account) {
  // account: { accessToken, username, ... }
  try {
    // Example: Fetch organization (company page) follower count
    // You may need to adjust this if you want personal profile analytics
    // For demo, we'll fetch organization stats if available

    // 1. Get organizations the user administers
    const orgsRes = await axios.get('https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee&role=ADMINISTRATOR&state=APPROVED', {
      headers: { Authorization: `Bearer ${account.accessToken}` },
    });
    const orgs = orgsRes.data.elements.map(e => e.organizationalTarget.split(':').pop());
    if (!orgs.length) throw new Error('No LinkedIn organization found for this account');
    const orgId = orgs[0];

    // 2. Get follower count
    const followersRes = await axios.get(`https://api.linkedin.com/v2/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn:li:organization:${orgId}`, {
      headers: { Authorization: `Bearer ${account.accessToken}` },
    });
    const followers = followersRes.data.elements[0]?.followerCounts?.organicFollowerCount || 0;

    // 3. Get page statistics (impressions, engagement)
    // Note: LinkedIn's API for detailed analytics may require additional permissions and setup
    // We'll mock engagement for now
    const impressions = 10000; // Replace with real API call if available
    const engagement = { likes: 500, retweets: 0, replies: 100 }; // Replace with real data

    return {
      followers,
      engagement,
      impressions,
    };
  } catch (error) {
    console.error('LinkedIn API Error:', error.response?.data || error.message);
    throw error;
  }
}

module.exports = { getAccountAnalytics }; 