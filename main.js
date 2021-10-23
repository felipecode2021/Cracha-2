const LinksSocialMidia = {
  github: 'felipecode2021',
  youtube: 'Felipe Carvalho',
  Facebook: 'felipe.alexandre568',
  Twitter: '@FEPEBRASIL',
  Instagram: 'felipe.carv26'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMidiaLinks()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name

      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfilesInfos()
