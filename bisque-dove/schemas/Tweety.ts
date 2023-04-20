export default {
  name: 'Tweety',
  type: 'document',
  title: 'tweet',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'TweetText',
    },
    {
      name: 'ID',
      type: 'string',
      title: 'ID',
    },
    {
      name: 'blockTweet',
      type: 'boolean',
      title: 'Block tweet',
      description: 'Admins control ',
    },
    {
      name: 'userName',
      type: 'string',
      title: 'user name',
    },
    {
      name: 'profileImg',
      type: 'string',
      title: 'p img',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Tweet image',
    },
  ],
}
