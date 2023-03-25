import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Mentor from '../components/Mentor'
import Partner from '../components/Partners'
const mentors=[
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],
    ["","0","0"],];
export default function Home() {
    return (
        <>
        {mentors.map((item, i) => (
            <div>
                <Mentor image={mentors[i][0]} colorA={mentors[i][1]} colorB={mentors[i][2]}/>
            </div>
        ))}
       
       <Partner/>
       </>
    );
}
