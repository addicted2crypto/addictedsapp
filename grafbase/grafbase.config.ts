import { g, auth, config } from '@grafbase/sdk'
//model for projects
const User = g.model('User', {
  name: g.string().length({ min: 1, max: 40}),
  email: g.string().unique(),
  walletConnect: g.url().optional(),
  //dont forget to check connections
  description: g.string().optional(),
  gitHubUrl: g.url().optional(),
  linkdInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
  //add vetted links here
})

const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),

})
  






export default config({
  schema: g
  
  
})
