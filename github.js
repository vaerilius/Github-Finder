class Github {
  constructor() {
    this.client_id = 'f48ffda5c02c3331f39e';
    this.client_secret = '33913ef684f1162f4369bf895bba1d2ad7a3120d';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=
    ${this.clientSecret}`);

  
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // profile : profile
      profile,
      repos
    }
  }
}