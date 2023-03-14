import ErukuProfile from '../src/images/profileImage/Eruku_profile.jpg';
import TrollFootballProfile from '../src/images/profileImage/Troll_football_profile.jpg';
import AdarProfile from '../src/images/profileImage/Adar_profile.jpg';


const WhoToFollowDB = [
    {
        id: 1,
        userImage: ErukuProfile,
        userName: '',
        verified: 'no',
        userHandle: '@Eruku_nlla',
        userBio: '30GB',
        following: '244',
        follower: '257',
        followed: false
    },{
        id: 2,
        userImage: TrollFootballProfile,
        userName: 'Troll Football',
        verified: 'no',
        userHandle: '@Troll_Fotballl',
        userBio: 'PARODY ACC',
        following: '29',
        follower: '47.8K',
        followed: false
    },{
        id: 3,
        userImage: AdarProfile,
        userName: 'Adar Poonawalla',
        verified: 'yes',
        userHandle: '@adarpoonawalla',
        userBio: `CEO and Owner, 
        @seruminstindia
        , Chairman, Poonawalla Fincorp, Founder, 
        @CleanCityPune
        , Passionate about vaccines, horse racing and public health.`,
        following: '86',
        follower: '1.3M',
        followed: false
    }
]

export default WhoToFollowDB;