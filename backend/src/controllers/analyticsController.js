const Analytics = require('../models/Analytics');
const jwt = require('jsonwebtoken');
const twitterService = require('../services/twitterService');

function getUserId(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch {
    return null;
  }
}

exports.getOverview = async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    // For MVP, we'll use Twitter data
    // In production, you'd want to aggregate data from all connected accounts
    const twitterData = await twitterService.getAccountAnalytics(req.query.username || 'elonmusk');
    
    res.json({
      totalFollowers: twitterData.followers,
      engagementRate: ((twitterData.engagement.likes + twitterData.engagement.retweets) / twitterData.followers * 100).toFixed(1),
      impressions: twitterData.engagement.likes + twitterData.engagement.retweets + twitterData.engagement.replies
    });
  } catch (error) {
    console.error('Analytics Error:', error);
    res.status(500).json({ message: 'Error fetching analytics', error: error.message });
  }
};

exports.getSentiment = async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const sentiment = await twitterService.getSentimentAnalysis(req.query.username || 'elonmusk');
    res.json(sentiment);
  } catch (error) {
    console.error('Analytics Error:', error);
    res.status(500).json({ message: 'Error fetching sentiment', error: error.message });
  }
};

exports.getPerformance = async (req, res) => {
  try {
    const userId = getUserId(req);
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const twitterData = await twitterService.getAccountAnalytics(req.query.username || 'elonmusk');
    
    // Transform tweet data into daily performance metrics
    const performanceData = twitterData.tweets.reduce((acc, tweet) => {
      const date = tweet.date.split('T')[0];
      const existingDay = acc.find(day => day.date === date);
      
      if (existingDay) {
        existingDay.followers = twitterData.followers; // Use current follower count
        existingDay.engagement = ((tweet.metrics.like_count + tweet.metrics.retweet_count) / twitterData.followers * 100).toFixed(1);
      } else {
        acc.push({
          date,
          followers: twitterData.followers,
          engagement: ((tweet.metrics.like_count + tweet.metrics.retweet_count) / twitterData.followers * 100).toFixed(1)
        });
      }
      return acc;
    }, []);

    res.json(performanceData);
  } catch (error) {
    console.error('Analytics Error:', error);
    res.status(500).json({ message: 'Error fetching performance data', error: error.message });
  }
}; 