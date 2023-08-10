const hobbyLinks = ['https://playvalorant.com/en-us/', 'https://www.leagueoflegends.com/en-us/', 'https://www.crunchyroll.com/'];

export default function HobbyLinks() {
    return (
        <>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Valorant</a>
            <a href = {hobbyLinks[1]}>League of Legends</a>
            <a href = {hobbyLinks[2]}>Anime</a>
        </>  
    );
};