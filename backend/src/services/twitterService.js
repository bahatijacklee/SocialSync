const { TwitterApi } = require('twitter-api-v2');

class TwitterService {
  constructor() {
    // Log the first few characters of the API key to verify it's being loaded
    console.log('Twitter API Key (first 4 chars):', process.env.TWITTER_API_KEY?.substring(0, 4));
    
    this.client = new TwitterApi({
      appKey: process.env.TWITTER_API_KEY,
      appSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });
  }

  async getAccountAnalytics(username) {
    try {
      console.log('Fetching analytics for username:', username);
      
      // Get user by username
      const user = await this.client.v2.userByUsername(username);
      console.log('User lookup response:', user);
      
      if (!user.data) {
        throw new Error('User not found');
      }

      // Get user's tweets from the last 7 days
      const tweets = await this.client.v2.userTimeline(user.data.id, {
        'tweet.fields': ['public_metrics', 'created_at'],
        max_results: 100,
        start_time: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      });
      console.log('Tweets response:', tweets);

      // Calculate engagement metrics
      const metrics = tweets.data.data.reduce((acc, tweet) => {
        const metrics = tweet.public_metrics;
        acc.totalLikes += metrics.like_count;
        acc.totalRetweets += metrics.retweet_count;
        acc.totalReplies += metrics.reply_count;
        return acc;
      }, { totalLikes: 0, totalRetweets: 0, totalReplies: 0 });

      // Get follower count
      const followers = await this.client.v2.followers(user.data.id, {
        'user.fields': ['public_metrics'],
      });
      console.log('Followers response:', followers);

      return {
        followers: followers.meta.total_count,
        engagement: {
          likes: metrics.totalLikes,
          retweets: metrics.totalRetweets,
          replies: metrics.totalReplies,
        },
        tweets: tweets.data.data.map(tweet => ({
          date: tweet.created_at,
          metrics: tweet.public_metrics,
        })),
      };
    } catch (error) {
      console.error('Twitter API Error Details:', {
        message: error.message,
        code: error.code,
        data: error.data,
        rateLimit: error.rateLimit,
        stack: error.stack
      });
      throw error;
    }
  }

  async getSentimentAnalysis(username) {
    try {
      // Get user's recent tweets
      const user = await this.client.v2.userByUsername(username);
      const tweets = await this.client.v2.userTimeline(user.data.id, {
        'tweet.fields': ['text'],
        max_results: 100,
      });

      // For MVP, we'll use a simple keyword-based sentiment analysis
      // In production, you'd want to use a proper NLP service
      const sentiment = tweets.data.data.reduce((acc, tweet) => {
        const text = tweet.text.toLowerCase();
        if (text.includes('happy') || text.includes('great') || text.includes('love')) {
          acc.positive++;
        } else if (text.includes('sad') || text.includes('bad') || text.includes('hate')) {
          acc.negative++;
        } else {
          acc.neutral++;
        }
        return acc;
      }, { positive: 0, negative: 0, neutral: 0 });

      // Convert to percentages
      const total = sentiment.positive + sentiment.negative + sentiment.neutral;
      return {
        positive: Math.round((sentiment.positive / total) * 100),
        negative: Math.round((sentiment.negative / total) * 100),
        neutral: Math.round((sentiment.neutral / total) * 100),
      };
    } catch (error) {
      console.error('Twitter API Error:', error);
      throw error;
    }
  }
}

module.exports = new TwitterService(); 