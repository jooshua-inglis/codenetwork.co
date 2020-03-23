import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import RulesContainer from '../components/rulesContainer'

const CodeOfConductPage = () => (
  <Layout>
    <RulesContainer>
      <h1>Code of Conduct</h1>
      <p>
        To help make our community feel safe and welcoming, this code of conduct
        describes how we expect people to behave and interact with each other
        while taking part in our community
      </p>
      <div className="summary">
        <h3>tl;dr</h3>
        <p>
          Always be considerate, respectful and treat others how you’d want to
          be treated. Never start/continue flame wars or trolling and don’t make
          anyone feel uncomfortable or unwelcome. Always be collaborative, stay
          honest and don’t misrepresent the group or executive. Above all, never
          discriminate against or harass someone.
        </p>
      </div>

      <h3>Be Considerate</h3>
      <p>
        Code Network events, workspaces and online facilities (like Discord and
        Facebook) are shared with the community. You should be considerate of
        how your actions affect the people around you and the Code Network
        community as a whole.
      </p>
      <h3>Be Respectful</h3>
      <p>
        Treat everyone around you in the Code Network community with respect and
        dignity. Every member can make a valuable contribution. Although it’s
        not always possible to agree, disagreement is never an excuse for poor
        behaviour or bad manners. Never put others down, belittle their
        achievements or treat them in a malicious or disrespectful way.
      </p>
      <p>
        It’s important to remember that a community where people feel
        uncomfortable, unwelcome or threatened, is not a productive one. We
        can’t allow frustration or disagreements to turn into personal attacks.
        We expect members of the community to be respectful and courteous of
        each other, whether it’s another member or someone outside of our
        community. All feedback, comments and criticism should be positive and
        should never be malicious.
      </p>
      <p>
        Don’t start, perpetuate or become involved in flame wars, excessive
        trolling, personal attacks or repetitive arguments. Take matters offline
        (e.g. agree to meet in person) if you feel it may help resolve an
        argument. Don’t use any public or communal communications to make fun
        of, shame or disrespect someone.
      </p>
      <p>
        Most importantly, don’t turn a conflict into a personal attack. Never
        use someone’s race, gender, sexuality, religion or other personal
        characteristics in an argument. The
        <Link to="/ssp"> Safe Space Policy </Link> (SSP) covers this in more
        detail and should be adhered to at all times.
      </p>
      <h3>Be Collaborative</h3>
      <p>
        The most important part of Code Network is working together on projects
        and creating a welcoming community. Collaboration and working together
        helps to create meaningful connections and grow the knowledge of not
        only individuals, but the group as a whole.
      </p>
      <p>
        When you reach a disagreement, consult other members. Don’t be scared to
        ask for help or advice on how to handle a situation. Disagreements and
        constructive criticism are both part of working together in a team.
        Don’t avoid disagreements or different views, but aim to resolve them
        constructively.
      </p>

      <h3>Be Honest</h3>
      <p>
        Code Network strongly values honesty and transparency. Never attempt to
        manipulate somebody or lie to gain personal benefit. Blackmail or
        manipulation of any other kind is not tolerated. If you’ve made a
        mistake, just own up to it. Be honest when committing to a task, posting
        for help or even advertising a position. Nothing loses trust quicker
        than being misled or manipulated.
      </p>
      <h3>Representation of Executive and the Group</h3>
      <p>
        Don’t try and pretend you are part of the executive or any other
        authoritative figure/group if you aren’t. Don’t make false
        representations of the executive or the community. Also, never state
        your personal opinions as official Code Network policies or procedures.
        Above all else, if you aren’t sure about something check with the
        executive first.
      </p>
    </RulesContainer>
  </Layout>
)

export default CodeOfConductPage
