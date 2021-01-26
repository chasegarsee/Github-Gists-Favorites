import axios from "axios"

export default async (values) => {
  values.setError("")
  const response = await axios(`https://api.github.com/users/${values.user}`).catch((err) => {
    console.log(err)
  })
  if (response) values.setGithubUser(response.data)
  else values.setError("No users with that username were found")
}
