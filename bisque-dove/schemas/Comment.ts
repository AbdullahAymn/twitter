export default {
  name: 'Comment',
  type: 'document',
  title: 'comment',
  fields: [
    {
      name: 'comment',
      type: 'string',
      title: 'comment',
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
      name: 'tweet',
      title: 'tweet',
      type: 'reference',
      to: {
        type: 'Tweety',
      },
    },
  ],
}
