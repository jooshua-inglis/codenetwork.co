import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import RulesContainer from '../components/rulesContainer'

const RulesPage = () => (
  <Layout>
    <RulesContainer>
      <h1>General Rules</h1>
      <p>
        These are general rules that apply everywhere in the Code Network
        community, including our events, meetups and discussions.
      </p>
      <div className="summary">
        <h3>Summary</h3>
        <p>
          <i>
            Don’t post anything off topic. Memes etc. are ok in moderation, but
            avoid them. If you’re a recruiter, your job post doesn’t belong in
            our community. If you’re a technical looking to fill a paid role
            feel free to advertise it but include detailed info about the role.
            No advertising or self promotion - share stuff you’ve built to start
            conversations, not conversions. Always follow our Code of Conduct
            and Safe Space Policy.
          </i>
        </p>
      </div>
      <h3>Keep posts etc on topic</h3>
      <p>
        Our FB group is primarily for technical discussions, networking, demoing
        side-projects, & making friends. Occasional off-topic memes are fine,
        just keep in mind that excessive off-topic discussions our better suited
        for our community Discord server. Off-topic posts may be removed without
        notice at moderators&rsquo; discretion.
      </p>
      <h3>Recruiter/non technical looking to fill a role</h3>
      <p>
        If you are not in a technical role (e.g. recruiter, hiring manager, hr
        employee, etc.) this section applies to you. Your job advert doesn’t
        belong here. If you represent a company, contact your technical
        (development) team and send them to talk to our members. If you don’t
        work for a tech company, sorry, but we can’t help you. Remember, if you
        lie or mislead anyone we may exclude you from the community for
        violating our Code of Conduct.
      </p>
      <h3>Technical person looking to fill a role</h3>
      <p>
        If you are in a technical role (developer, dev ops, etc) or are an
        academic at an educational institution looking to fill a paid role, you
        don’t need to ask before sharing an opportunity. The best place to post
        is our Facebook group or discord. Make sure you post in the correct
        channels if posting in Discord. If it is an unpaid role please speak to
        a member of the executive to get approval. This includes all internships
        and “work experience” opportunities. We do this to prevent our community
        being taken advantage of. Finally, when sharing a position be sure to
        include relevant info like the language, stack and any experience that
        is required.
      </p>
      <h3>Advertising/Self Promotion</h3>
      <p>
        We don’t allow blatant advertising, view/lead generation or self
        promotion in either our Discord* or Facebook group. You can share
        projects, videos or any other technical thing you’ve worked on. However
        you must aim to seek feedback or help, create a discussion or otherwise
        contribute to the community. Creating a conversation is different to
        conversion.
        <br />
        <i>
          *specific discord channels may allow self promotion, links etc. It
          must explicitly say this in the channel description.
        </i>
      </p>
      <h3>Follow our expectations</h3>
      <p>
        Be kind and always follow this document, the{' '}
        <Link to="/coc">Code of Conduct</Link> and{' '}
        <Link to="/ssp">Safe Space Policy</Link>.
      </p>
    </RulesContainer>
  </Layout>
)

export default RulesPage
