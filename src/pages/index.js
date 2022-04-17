import Feed from "../components/Feed";
import Layout from "../components/Layout";
import Suggestions from "../components/Suggestions";

import { openDB } from '../lib/openDB';

function Index({posts}) {
    return (
        <Layout>
            <Feed posts={posts}></Feed>
            <Suggestions></Suggestions>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    // Implements search database mongoDB
    const db = await openDB();
    const data = await db.collection('feed').find().toArray();

    // const data = [
    //     {   
    //         id: 1, 
    //         author: { id: 1, avatar: '', name: 'Patrick Anjos', userName: 'setxpro'}, 
    //         description: 'Olá mundo!', 
    //         tags: [{ title: '#Typescript' }, { title: '#NextJS' }],
    //         songName: '',
    //         videoUrl: 
    //             'https://v16-webapp.tiktok.com/4870b84cc5917f45cae20b3e0a0ec36f/625a5c7e/video/tos/maliva/tos-maliva-ve-0068c799-us/cf1ce58948af4a4aafea1a71af03b8ec/?a=1988&br=2370&bt=1185&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HAzMyq8ZTMYLwe2Nod3yl7Gb&l=2022041600041201022308414122803E09&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amY1MzU6ZjV2OzMzZzczNEApPDdmNjU6aWVnN2U6OTZoZmdqc2NwcjRnNXBgLS1kMS9zczVfNGNhYWEzX180Xl4tNV46Yw%3D%3D&vl=&vr=',
    //         likes: 1000,
    //         comments: 800,
    //         replices: 500
    //     },
    //     {   
    //         id: 2, 
    //         author: { id: 2, avatar: 'https://avatars.githubusercontent.com/u/69186374?v=4', name: 'Patrick Anjos', userName: 'setxpro'}, 
    //         description: 'original sound - desginer tips', 
    //         tags: [{ title: '#sotembraba' }, { title: '#breack' }],
    //         songName: 'som original - Viviwinkler',
    //         videoUrl: '',
    //         likes: 1000,
    //         comments: 800,
    //         replices: 500
    //     }
    // ]

    return {
      props: {
          posts: JSON.parse(JSON.stringify(data)),
      }, // will be passed to the page component as props
    }
}

export default Index;