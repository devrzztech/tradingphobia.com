import { DiscussionEmbed } from 'disqus-react'

export default function DisqusComments({ url, identifier, title }) {
  const disqusShortname = 'tradingphobia'
  const disqusConfig = {
    url,
    identifier, // Single post id
    title, // Single post title
  }
  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
}
