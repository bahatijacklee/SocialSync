# SocialSync Backend Storage Plan

1. **Primary Database: MongoDB**  
   - User accounts  
   - Platform configurations  
   - Report templates  
   - Analytics metadata  
   - Performance metrics  
   - Engagement statistics  
   - Historical trends  
   - Social media posts  
   - Comments and mentions  
   - Sentiment analysis results  

2. **Cache Layer: Redis**  
   - Session management  
   - Real-time metrics  
   - API response caching  

3. **Database Schema (MongoDB)**  
   - **Users Collection**:  
     ```javascript
     {
       email: String, // required, unique
       password: String, // hashed
       firstName: String,
       lastName: String,
       phone: String,
       location: String,
       bio: String,
       createdAt: Date,
       updatedAt: Date
     }
     ```
   - **Accounts Collection**:  
     ```javascript
     {
       userId: ObjectId, // reference to Users
       platform: String, // "Twitter", "Instagram", etc.
       username: String,
       accessToken: String, // encrypted
       connectedAt: Date
     }
     ```
   - **Analytics Collection**:  
     ```javascript
     {
       userId: ObjectId,
       platform: String,
       date: Date,
       followers: Number,
       engagementRate: Number,
       impressions: Number,
       sentiment: { positive: Number, negative: Number, neutral: Number }
     }
     ```
   - **Reports Collection**:  
     ```javascript
     {
       userId: ObjectId,
       timeRange: String, // "30days", "90days", etc.
       reportUrl: String, // S3 URL
       generatedAt: Date
     }
     ```
   - **Posts Collection**:  
     ```javascript
     {
       accountId: ObjectId, // reference to Accounts
       platform: String,
       postId: String,
       content: String,
       createdAt: Date,
       comments: [String],
       mentions: [String]
     }
     ```

4. **File Storage**  
   - Store generated reports in AWS S3 or Cloudinary.