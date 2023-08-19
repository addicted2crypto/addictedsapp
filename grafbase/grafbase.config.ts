import { g, auth, config } from '@grafbase/sdk'
//model for projects
// @ts-ignore
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
}).auth((rules) => {
  rules.public().read();
})

// @ts-ignore
const Project = g.model('Project', {
  title: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),

}).auth((rules) => {
  rules.public().read(),
  rules.private().create().delete().update();
})
  

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),


})




export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules: (rules) => rules.private(),
  }
  
  
})
