const getHash = () => 
    location.slice(1).toLocaleLowerCase().split('/')[1] || '/' //['','1','']

export default getHash;