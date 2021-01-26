import axios from "axios"

export default async (values) => {
  const res = await axios(`https://api.github.com/users/${values.githubUser.login}/gists`)
  try {
    values.setGists(res.data)
  } catch (err) {
    console.error(err)
  }
}