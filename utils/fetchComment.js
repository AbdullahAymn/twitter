export const fetchComment = async (tweetId) => {
    const res = await fetch(`/api/getComment?tweetId=${tweetId}`)
    const comments = res.json()

    return comments
}