export const useAuth = () => {
  const accessToken = localStorage?.getItem("access_token")
  if(!accessToken){
    return false
  } 
  return true
}
